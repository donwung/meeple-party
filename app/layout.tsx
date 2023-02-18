import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <head />
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
