"use client";
import { useEffect, useState } from "react";
import WordPressMaintenance from '@/src/components/services/WordPress';
import Loader from '@/src/components/common/Loader';

const WordpressPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <WordPressMaintenance />}
    </>
  );
}

export default WordpressPage;
