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
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API || "",
    ...props,
  };

  return axios(config);
};

export default axiosHelper;
