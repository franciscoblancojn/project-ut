import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FormCreateTransaction,FormCreateTransactionProps } from "./index";

export default {
    title: "Component/Form/CreateTransaction",
    component: FormCreateTransaction,
} as Meta;

const Profile: StoryFn<PropsWithChildren<FormCreateTransactionProps>> = (args) => (
    <FormCreateTransaction {...args}>Test Children</FormCreateTransaction>
);

export const Index = Profile.bind({});
const args : FormCreateTransactionProps = {
    
}
Index.args = args
