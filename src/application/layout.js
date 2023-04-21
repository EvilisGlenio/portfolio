// Imports of the necessary packages

import { useClient } from "next-sanity";
import { ChakraProvider } from "@chakra-ui/react";

// Metadata for SEO
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// The definiton of the RootLayout component that wraps the entire application
export default function RootLayout({ children }) {
  const client = useClient();
  // wrap layout component in useClient

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
