import React from "react";
import { ComponentMeta } from "@storybook/react";
import Spinner from "./spinner";

export default {
  component: Spinner,
  title: "Components/Spinner",
};

export const ThisIsHowItWork = () => {
  return <Spinner />;
};
