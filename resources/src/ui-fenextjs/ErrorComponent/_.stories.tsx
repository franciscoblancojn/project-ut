import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ErrorComponent, ErrorComponentProps } from "./index";

export default {
    title: "UIFenextjs/ErrorComponent",
    component: ErrorComponent,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ErrorComponentProps>> = (args) => (
    <ErrorComponent {...args}>Test Children</ErrorComponent>
);

export const Index = Profile.bind({});
const args : ErrorComponentProps = {
    
}
Index.args = args
