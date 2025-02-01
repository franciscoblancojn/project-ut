import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Table, TableProps } from "./index";

export default {
    title: "UIFenextjs/Table",
    component: Table,
} as Meta;

const Profile: StoryFn<PropsWithChildren<TableProps<any>>> = (args) => (
    <Table {...args}>Test Children</Table>
);

export const Index = Profile.bind({});
const args : TableProps<any> = {
    header:[],
    name:"Table"
}
Index.args = args
