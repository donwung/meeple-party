import "./globals.css";
import "@/theme/theme.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import AuthProvider from "@/context/authContext";
import UserProvider from "@/context/userContext";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthProvider>
          <UserProvider>{children}</UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
