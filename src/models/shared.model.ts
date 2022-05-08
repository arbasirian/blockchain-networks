export type FetchingDataType<T> = {
  data: T;
  fetching: boolean;
};

export enum ActionMethodEnum {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PATCH = "patch",
  PUT = "put",
}
