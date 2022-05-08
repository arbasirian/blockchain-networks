import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConnectionStatus from "./connection-status";

export default {
  title: "Components/ConnectionStatus",
  component: ConnectionStatus,
} as ComponentMeta<typeof ConnectionStatus>;

const Template: ComponentStory<typeof ConnectionStatus> = (args) => (
  <ConnectionStatus {...args} />
);

export const Active = Template.bind({});
Active.args = {
  status: true,
};
export const Deactive = Template.bind({});
Deactive.args = {
  status: false,
};
