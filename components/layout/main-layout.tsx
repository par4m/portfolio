import Head from "next/head";
import React from "react";
import { Footer } from "../footer";
import { NavbarWrapper } from "../navbar";
import { Box } from "../styles/box";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Param's homepage" />
        <meta name="author" content="Param Arora" />
        <meta name="author" content="paramarora" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Param Arora" />
        <meta property="og:site_name" content="Param Arora" />
        <meta name="og:title" content="Param Arora" />
        <meta property="og:type" content="website" />
        <title>Param Arora - Homepage</title>
      </Head>

      <NavbarWrapper />
      <Box
        css={{
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {children}
        <Footer />
      </Box>
    </Box>
  );
};
