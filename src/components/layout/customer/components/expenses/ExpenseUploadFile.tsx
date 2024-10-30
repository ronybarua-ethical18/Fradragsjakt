import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import DragAndDropFile from '@/components/DragAndDropFile';
import { Button } from '@/components/ui/button';

const ExpenseUploadFile: React.FC = () => {
  const [fileLink, setFileLink] = useState<File | null>(null);
  const [mediaUploadLoading, setMediaUploadLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFileLink(acceptedFiles[0]); // Set the first accepted file
    setMediaUploadLoading(true);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'] },
  });

  return (
    <div className="mt-4">
      <h1>Upload receipt csv, pdf</h1>

      <div className="rounded-lg mb-5 mt-2 bg-[#F0EFFE] p-5 border-dashed border-2 border-[#5B52F9]">
        <div
          {...getRootProps()}
          className="h-full w-full flex items-center justify-center"
        >
          <DragAndDropFile
            setFileLink={setFileLink}
            fileLink={fileLink}
            loading={mediaUploadLoading}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
          />
        </div>
      </div>
      <Button variant="purple" className="w-full">
        Upload
      </Button>
    </div>
  );
};

export default ExpenseUploadFile;
