import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FormForgotPassword,FormForgotPasswordProps } from "./index";

export default {
    title: "Component/Form/ForgotPassword",
    component: FormForgotPassword,
} as Meta;

const Profile: StoryFn<PropsWithChildren<FormForgotPasswordProps>> = (args) => (
    <FormForgotPassword {...args}>Test Children</FormForgotPassword>
);

export const Index = Profile.bind({});
const args : FormForgotPasswordProps = {
    
}
Index.args = args
