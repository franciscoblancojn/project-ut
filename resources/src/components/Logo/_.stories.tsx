import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Logo, LogoProps } from "./index";

export default {
    title: "Component/Logo",
    component: Logo,
} as Meta;

const Profile: StoryFn<PropsWithChildren<LogoProps>> = (args) => (
    <Logo {...args}>Test Children</Logo>
);

export const Index = Profile.bind({});
const args : LogoProps = {
    
}
Index.args = args
