import { HomePageProps } from "src/models";
import { NextPage } from "next";
import React from "react";
import { ConnectionStatus } from "@components";

const HomePage: NextPage<HomePageProps> = () => {
  console.log("process", process?.env?.NEXT_PUBLIC_BASE_URL_API);
  return (
    <div>
      HomePage <ConnectionStatus status></ConnectionStatus>
    </div>
  );
};

export default HomePage;
