"use client";
import { useEffect, useState } from "react";
import { MainPagePresentation } from "./MainPagePresentation";

export function MainPageContainer() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/ping");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetcher();
  }, []);
  if (loading) return null;
  return <MainPagePresentation message={data?.message || ""} />;
}
