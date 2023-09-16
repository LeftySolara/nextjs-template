import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS Template",
  description: "A template for NextJS projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
