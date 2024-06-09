'use client'

import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";

interface Props {
    children: React.ReactNode
}

function NextUIProviders({children}: Props) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}

export default NextUIProviders