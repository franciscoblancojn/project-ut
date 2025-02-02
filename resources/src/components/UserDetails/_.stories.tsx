import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { UserDetails,UserDetailsProps } from "./index";

export default {
    title: "Component/UserDetails",
    component: UserDetails,
} as Meta;

const Profile: StoryFn<PropsWithChildren<UserDetailsProps>> = (args) => (
    <UserDetails {...args}>Test Children</UserDetails>
);

export const Index = Profile.bind({});
const args : UserDetailsProps = {
    
}
Index.args = args
