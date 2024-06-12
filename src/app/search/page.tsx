import React from "react";

interface Props{
  searchParams: {
    term: string
  }
}

export default function page({searchParams: {term}}: Props) {
  return <h1>{term}</h1>;
}
