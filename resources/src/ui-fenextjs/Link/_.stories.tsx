import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Link, LinkProps } from "./index";

export default {
    title: "UIFenextjs/Link",
    component: Link,
} as Meta;

const Profile: StoryFn<PropsWithChildren<LinkProps>> = (args) => (
    <Link {...args}>Test Children</Link>
);

export const Index = Profile.bind({});
const args : LinkProps = {
    href:""
}
Index.args = args
