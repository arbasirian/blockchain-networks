import { NetworkItemModel } from "./network.model";

export interface HomePageProps {
  networks: {
    [key: string]: NetworkItemModel;
  };
}
