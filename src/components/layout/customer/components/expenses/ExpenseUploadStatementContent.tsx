'use client';
import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { FormInput } from '@/components/FormInput';

type FormData = {
  Description: string;
  Amount: string;
};

type ColumnType = {
  title: string;
  dataIndex: string;
  key: string;
};

type CSVRowData = {
  key: string;
  [key: string]: string;
};

type MappedDataType = {
  description: string;
  amount: number;
};

const fixed_columns: ColumnType[] = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const ExpenseUploadStatementContent: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>();
  const [csvData, setCsvData] = useState<CSVRowData[]>([]);
  console.log('csvData__', csvData);
  const [mappedData, setMappedData] = useState<MappedDataType[]>([]);
  console.log('mappedData__', mappedData);

  const [columns, setColumns] = useState<ColumnType[]>([]);

  const handleFileLoaded = (data: string[][]): void => {
    const csvColumns: ColumnType[] = data[0].slice(1).map((header, index) => ({
      title: header,
      dataIndex: `column_${index}`,
      key: `column_${index}`,
    }));

    setColumns(csvColumns);

    const processedData: CSVRowData[] = data
      .slice(1)
      .filter((row) => {
        return row.slice(1).some((cell) => cell && cell.trim() !== '');
      })
      .map((row, rowIndex) => {
        const processedRow = row.slice(1).reduce(
          (acc: CSVRowData, val: string, colIndex: number) => {
            if (val && val.trim() !== '') {
              acc[`column_${colIndex}`] = val.trim();
            }
            return acc;
          },
          { key: `row_${rowIndex}` }
        );

        return Object.keys(processedRow).length > 1 ? processedRow : null;
      })
      .filter((row): row is CSVRowData => row !== null);

    setCsvData(processedData);
  };

  const onSubmit = (formData: FormData): void => {
    const mapped: MappedDataType[] = csvData
      .map((row) => {
        const descriptionColumnIndex = columns.findIndex(
          (col) => col.title === formData.Description
        );
        const amountColumnIndex = columns.findIndex(
          (col) => col.title === formData.Amount
        );

        const description = row[`column_${descriptionColumnIndex}`];
        const amount = row[`column_${amountColumnIndex}`];

        if (description && amount) {
          const parsedAmount = parseFloat(amount.replace(/[^\d.-]/g, ''));
          if (!isNaN(parsedAmount)) {
            return {
              description: description.trim(),
              amount: parsedAmount,
            };
          }
        }
        return null;
      })
      .filter((item): item is MappedDataType => item !== null);

    setMappedData(mapped);
    console.log('Mapped Data:', mapped);
  };

  const columnOptions = React.useMemo(
    () =>
      columns.map((column) => ({
        value: column.title,
        title: column.title,
      })),
    [columns]
  );

  return (
    <>
      <h1 className="font-bold text-xl text-[#5B52F9] mb-4">
        Upload receipt as attachment
      </h1>

      <CSVReader
        onFileLoaded={handleFileLoaded}
        parserOptions={{ header: false }}
      />

      <div className="grid grid-cols-2 gap-4 my-6">
        <p className="text-gray-400 border-b border-gray-200 text-xs pb-2">
          Data Field
        </p>
        <p className="text-gray-400 border-b border-gray-200 text-xs pb-2">
          Imported file headers
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {fixed_columns.map((column, i) => (
          <div
            key={i}
            className="grid grid-cols-2 gap-4 space-y-2 items-center"
          >
            <p className="text-gray-800 text-xs pt-2 font-semibold">
              {column.title}
            </p>
            <FormInput
              name={column.title}
              control={control}
              type="select"
              placeholder={column.title}
              options={columnOptions}
              required
            />
          </div>
        ))}
        <Button
          type="submit"
          className="w-full mt-4 text-white"
          variant="purple"
          disabled={csvData.length === 0}
        >
          Map
        </Button>
      </form>
    </>
  );
};

export default ExpenseUploadStatementContent;
