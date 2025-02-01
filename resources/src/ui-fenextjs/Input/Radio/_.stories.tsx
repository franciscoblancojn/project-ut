import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputRadio, InputRadioProps } from "./index";

export default {
    title: "UIFenextjs/Input/Radio",
    component: InputRadio,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputRadioProps<any>>> = (args) => (
    <InputRadio {...args}>Test Children</InputRadio>
);

export const Index = Profile.bind({});
const args : InputRadioProps<any> = {
    
}
Index.args = args
