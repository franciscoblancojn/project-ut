import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ChangeLang,ChangeLangProps } from "./index";

export default {
    title: "Component/ChangeLang",
    component: ChangeLang,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ChangeLangProps>> = (args) => (
    <ChangeLang {...args}>Test Children</ChangeLang>
);

export const Index = Profile.bind({});
const args : ChangeLangProps = {
    
}
Index.args = args
