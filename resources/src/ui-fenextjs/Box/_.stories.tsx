import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Box, BoxProps } from "./index";

export default {
    title: "UIFenextjs/Box",
    component: Box,
} as Meta;

const Profile: StoryFn<PropsWithChildren<BoxProps>> = (args) => (
    <Box {...args}>Test Children</Box>
);

export const Index = Profile.bind({});
const args : BoxProps = {
    
}
Index.args = args
