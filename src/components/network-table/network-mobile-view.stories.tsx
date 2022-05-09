import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NetworkTable from "./network-table";
import { SortTypeEnum } from "@models";

export default {
  title: "Components/NetworkTable",
  component: NetworkTable,
} as ComponentMeta<typeof NetworkTable>;

const Template: ComponentStory<typeof NetworkTable> = (args) => (
  <NetworkTable {...args} />
);

export const HaveItems = Template.bind({});
HaveItems.args = {
  data: [
    {
      key: "kusama",
      network: {
        connected: true,
        icon: "",
        name: "Kusama",
        node: "wss://kusama-rpc.polkadot.io",
      },
    },
  ],
  onSort: () => {},
  sortType: SortTypeEnum.DEFAULT,
};
export const Empty = Template.bind({});
Empty.args = {
  data: [],
  onSort: () => {},
  sortType: SortTypeEnum.DEFAULT,
};
