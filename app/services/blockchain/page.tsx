"use client";
import { useEffect, useState } from "react";
import BlockchainDevelopment from '@/src/components/services/BlockchainDevelopment';
import Loader from '@/src/components/common/Loader';

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
      {loading ? <Loader /> : <BlockchainDevelopment />}
    </div>
  );
}

export default BlockchainPage;
