import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NetworkMobileView from "./network-mobile-view";
import { SortTypeEnum } from "@models";

export default {
  title: "Components/NetworkMobileView",
  component: NetworkMobileView,
} as ComponentMeta<typeof NetworkMobileView>;

const Template: ComponentStory<typeof NetworkMobileView> = (args) => (
  <NetworkMobileView {...args} />
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
