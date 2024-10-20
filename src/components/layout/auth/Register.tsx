"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import QuestionariesModal from "@/components/QuestionariesModal";
import { FormInput } from "@/components/FormInput";
 
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

export default function Register() {
  const { data: session } = useSession();
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null); // State to track errors

  useEffect(() => {
    if (session?.user) {
      router.push("/customer");
    }
  }, [router, session]);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    
    setError(null); // Reset error state before submission
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send form data as JSON
      });

      if (response.ok) {
        // If registration is successful, redirect or handle success
        reset(); // Reset form after successful submission
        router.push("/login"); // Redirect to login page after successful registration
      } else {
        // If an error occurs, get the error message
        const result = await response.json();
        setError(result.message || "Failed to register. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <QuestionariesModal />

      <h2 className="text-2xl font-bold text-center">Sign Up</h2>

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex space-x-2">
          {/* First Name */}
          <FormInput
            name="firstName"
            control={control}
            type="text"
            placeholder="First Name"
            required
          />

          {/* Last Name */}
          <FormInput
            name="lastName"
            control={control}
            type="text"
            placeholder="Last Name"
            required
          />
        </div>

        {/* Email */}
        <FormInput
          name="email"
          control={control}
          type="email"
          placeholder="Email"
          required
        />

        {/* Password */}
        <FormInput
          name="password"
          control={control}
          type="password"
          placeholder="Password"
          required
        />

        {/* Role (Select) */}
        <FormInput
          name="role"
          control={control}
          type="select"
          placeholder="Select Role"
          options={[
            { title: "Auditor", value: "auditor" },
            { title: "Customer", value: "customer" },
          ]}
          required
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full text-white">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
