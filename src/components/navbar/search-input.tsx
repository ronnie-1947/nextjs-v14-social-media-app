"use client";

import { searchAction } from "@/actions/search";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={searchAction}>
      <Suspense>
        <Input name="term" defaultValue={searchParams.get("term") || ""} />
      </Suspense>
    </form>
  );
}

export default SearchInput;
