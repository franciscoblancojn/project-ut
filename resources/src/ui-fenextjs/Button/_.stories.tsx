import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
    title: "UIFenextjs/Button",
    component: Button,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ButtonProps>> = (args) => (
    <Button {...args}>Test Children</Button>
);

export const Index = Profile.bind({});
const args : ButtonProps = {
    
}
Index.args = args
