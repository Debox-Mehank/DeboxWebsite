import { NextPage } from "next";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

const Layout: NextPage = ({ children }) => {
  return (
    <div className="min-h-full flex flex-col tracking-widest">
      <Head>
        <title>Debox Consulting - Bussiness Consulting Firm</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
