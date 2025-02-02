import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputDate, InputDateProps } from "./index";

export default {
    title: "UIFenextjs/Input/Date",
    component: InputDate,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputDateProps>> = (args) => (
    <InputDate {...args}>Test Children</InputDate>
);

export const Index = Profile.bind({});
const args : InputDateProps = {
    
}
Index.args = args
