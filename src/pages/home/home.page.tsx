import { HomePageProps } from "src/models";
import { NextPage } from "next";
import React from "react";

const HomePage: NextPage<HomePageProps> = () => {
  console.log("process", process?.env?.NEXT_PUBLIC_BASE_URL_API);
  return <div>HomePage {process?.env?.NEXT_PUBLIC_BASE_URL_API}</div>;
};

export default HomePage;
