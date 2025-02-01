import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FormLogin,FormLoginProps } from "./index";

export default {
    title: "Component/Form/Login",
    component: FormLogin,
} as Meta;

const Profile: StoryFn<PropsWithChildren<FormLoginProps>> = (args) => (
    <FormLogin {...args}>Test Children</FormLogin>
);

export const Index = Profile.bind({});
const args : FormLoginProps = {
    
}
Index.args = args
