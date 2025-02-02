import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Back, BackProps } from "./index";

export default {
    title: "UIFenextjs/Back",
    component: Back,
} as Meta;

const Profile: StoryFn<PropsWithChildren<BackProps>> = (args) => (
    <Back {...args}>Test Children</Back>
);

export const Index = Profile.bind({});
const args : BackProps = {
    
}
Index.args = args
