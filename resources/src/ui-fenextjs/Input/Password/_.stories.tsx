import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputPassword, InputPasswordProps } from "./index";

export default {
    title: "UIFenextjs/Input/Password",
    component: InputPassword,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputPasswordProps>> = (args) => (
    <InputPassword {...args}>Test Children</InputPassword>
);

export const Index = Profile.bind({});
const args : InputPasswordProps = {
    
}
Index.args = args
