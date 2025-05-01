"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import BlockchainDevelopment from "@/src/components/services/BlockchainDevelopment";
import Loader from "@/src/components/common/Loader";

const BlockchainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Blockchain Development Services - Secure and Scalable Solutions by
          Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services specializes in providing innovative blockchain development solutions. We create secure, scalable, and decentralized applications to drive transparency, trust, and efficiency in your business."
        />
        <meta
          name="keywords"
          content="blockchain development, decentralized applications, blockchain solutions, Nugen IT services, blockchain technology, smart contracts, secure blockchain, blockchain services"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Blockchain Development Services - Secure and Scalable Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' blockchain development expertise. We design and build secure blockchain-based solutions tailored to your business needs, ensuring transparency and security in your digital transactions."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/blockchain"
        />
      </Head>

      {loading ? <Loader /> : <BlockchainDevelopment />}
    </div>
  );
};

export default BlockchainPage;
