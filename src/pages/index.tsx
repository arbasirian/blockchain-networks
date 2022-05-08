import { HomePageProps, NetworkItemModel } from "src/models";
import type { NextPage } from "next";

import HomePage from "./home/home.page";
import axios from "axios";

const Home: NextPage<HomePageProps> = (props) => {
  return <HomePage {...props} />;
};

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  const schema = host.indexOf("localhost") > -1 ? "http://" : "https://";

  const { data: networks } = await axios.get<{
    [key: string]: NetworkItemModel;
  }>(`${process?.env?.NEXT_PUBLIC_BASE_URL_API}/chains/properties`);

  return {
    props: { networks },
  };
}

export default Home;
