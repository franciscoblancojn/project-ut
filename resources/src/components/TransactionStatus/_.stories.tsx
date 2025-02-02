import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { TransactionStatus, TransactionStatusProps } from "./index";

export default {
    title: "Component/TransactionStatus",
    component: TransactionStatus,
} as Meta;

const Profile: StoryFn<PropsWithChildren<TransactionStatusProps>> = (args) => (
    <TransactionStatus {...args}>Test Children</TransactionStatus>
);

export const Index = Profile.bind({});
const args : TransactionStatusProps = {
    
}
Index.args = args
