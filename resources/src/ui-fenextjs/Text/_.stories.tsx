import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Text, TextProps } from "./index";

export default {
    title: "UIFenextjs/Text",
    component: Text,
} as Meta;

const Profile: StoryFn<PropsWithChildren<TextProps>> = (args) => (
    <Text {...args}>Test Children</Text>
);

export const Index = Profile.bind({});
const args : TextProps = {
    
}
Index.args = args
