import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FenextjsInfo, FenextjsInfoProps } from "./index";

export default {
    title: "Component/FenextjsInfo",
    component: FenextjsInfo,
} as Meta;

const Profile: StoryFn<PropsWithChildren<FenextjsInfoProps>> = (args) => (
    <FenextjsInfo {...args}>Test Children</FenextjsInfo>
);

export const Index = Profile.bind({});
const args : FenextjsInfoProps = {
    
}
Index.args = args
