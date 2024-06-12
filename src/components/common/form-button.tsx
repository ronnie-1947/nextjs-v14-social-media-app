"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode;
}

function FormButton({ children }: Props) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}

export default FormButton;
