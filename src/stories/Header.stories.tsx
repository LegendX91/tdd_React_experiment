import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "../components/Header/Header";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    fontSize: { control: "number" },
    backgroundColor: { control: "color" },
    borderRadius: { control: "number" },
    borderColor: { control: "color" },
    color: {control: "color"},
    marginTop: {control: "number"}
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
