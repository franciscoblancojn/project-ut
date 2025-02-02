import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FormAddAmountUser,FormAddAmountUserProps } from "./index";

export default {
    title: "Component/Form/AddAmountUser",
    component: FormAddAmountUser,
} as Meta;

const Profile: StoryFn<PropsWithChildren<FormAddAmountUserProps>> = (args) => (
    <FormAddAmountUser {...args}>Test Children</FormAddAmountUser>
);

export const Index = Profile.bind({});
const args : FormAddAmountUserProps = {
    
}
Index.args = args
