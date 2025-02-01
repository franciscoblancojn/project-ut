import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputText, InputTextProps } from "./index";

export default {
    title: "UIFenextjs/Input/Text",
    component: InputText,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputTextProps>> = (args) => (
    <InputText {...args}>Test Children</InputText>
);

export const Index = Profile.bind({});
const args : InputTextProps = {
    
}
Index.args = args
