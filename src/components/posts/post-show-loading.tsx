import { Skeleton } from "@nextui-org/react";
import React from "react";

function PostShowLoading() {
  return <div className="m-4">
    <div className="my-2">
      <Skeleton className="h-10 w-11/12"/>
    </div>
    <div className="p-4 border rounded space-y-2">
      <Skeleton className="h-6 w-11/12"/>
      <Skeleton className="h-6 w-11/12"/>
      <Skeleton className="h-6 w-11/12"/>
    </div>
  </div>;
}

export default PostShowLoading;

