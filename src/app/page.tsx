"use client";
import { Routes } from "@/Utils/Routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(Routes.Dashboard.DefaultDashboard);
  }, [router]);
  
  return <></>;
}

export default Home;
