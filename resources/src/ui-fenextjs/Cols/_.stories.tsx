import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Cols, ColsProps } from "./index";

export default {
    title: "UIFenextjs/Cols",
    component: Cols,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ColsProps>> = (args) => (
    <Cols {...args}>Test Children</Cols>
);

export const Index = Profile.bind({});
const args : ColsProps = {
    
}
Index.args = args
