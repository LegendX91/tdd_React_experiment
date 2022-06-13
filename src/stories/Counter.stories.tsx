import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter } from "../components/Counter/Counter";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Counter",
  component: Counter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fontSize: { control: "number" },
    backgroundColor: { control: "color" },
    marginLeft: { control: "number" },
    borderRadius: { control: "number" },
    borderColor: { control: "color" },
    fontStyle: { control: "text" },
    fontWeight: { control: "text" },
    color: { control: "color"}
  },
} as ComponentMeta<typeof Counter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
