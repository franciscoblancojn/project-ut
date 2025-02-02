import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Modal, ModalProps } from "./index";

export default {
    title: "UIFenextjs/Modal",
    component: Modal,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ModalProps>> = (args) => (
    <Modal {...args}>Test Children</Modal>
);

export const Index = Profile.bind({});
const args : ModalProps = {
    
}
Index.args = args
