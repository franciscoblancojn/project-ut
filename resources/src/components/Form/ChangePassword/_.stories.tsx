import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FormChangePassword,FormChangePasswordProps } from "./index";

export default {
    title: "Component/Form/ChangePassword",
    component: FormChangePassword,
} as Meta;

const Profile: StoryFn<PropsWithChildren<FormChangePasswordProps>> = (args) => (
    <FormChangePassword {...args}>Test Children</FormChangePassword>
);

export const Index = Profile.bind({});
const args : FormChangePasswordProps = {
    
}
Index.args = args
