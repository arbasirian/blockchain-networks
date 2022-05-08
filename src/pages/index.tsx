import { HomePageProps } from "src/models";
import type { NextPage } from "next";

import HomePage from "./home/home.page";

const Home: NextPage<HomePageProps> = (props) => {
  return <HomePage {...props} />;
};

export async function getServerSideProps(context) {
  return {
    props: { homeData: "" },
  };
}

export default Home;
