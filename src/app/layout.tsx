"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <title>Snow Shot - 简单优雅的工具软件</title>
        <meta name="description" content="功能完备，纯粹的社区驱动" />
        <link rel="icon" href="/app-icon.png" />
      </head>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </html>
  );
}
