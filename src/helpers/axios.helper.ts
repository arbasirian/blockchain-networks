import { ActionMethodEnum } from "@models";
import axios, { AxiosRequestConfig } from "axios";

export type AxiosHelperProps = {
  method: ActionMethodEnum;
  url: string;
  token?: string;
  header?: string;
  params?: { [key: string]: unknown };
  data?: { [key: string]: unknown };
};
const axiosHelper = ({ token, ...props }: AxiosHelperProps) => {
  const config: AxiosRequestConfig = {
    headers: {
      "accept-language": "en",
      accept: "application/json",
      "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_BASE_URL || "",
      "App-Platform": "web",
    },
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API || "",
    ...props,
  };

  return axios(config);
};

export default axiosHelper;
