import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FormRegister,FormRegisterProps } from "./index";

export default {
    title: "Component/Form/Register",
    component: FormRegister,
} as Meta;

const Profile: StoryFn<PropsWithChildren<FormRegisterProps>> = (args) => (
    <FormRegister {...args}>Test Children</FormRegister>
);

export const Index = Profile.bind({});
const args : FormRegisterProps = {
    
}
Index.args = args
