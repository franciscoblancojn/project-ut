import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputSelectT, InputSelectTProps } from "./index";

export default {
    title: "UIFenextjs/Input/SelectT",
    component: InputSelectT,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputSelectTProps<any>>> = (args) => (
    <InputSelectT {...args}>Test Children</InputSelectT>
);

export const Index = Profile.bind({});
const args : InputSelectTProps<any> = {
        onParse:(e)=>{
            return {
                id:"1",
                text:"",
                data:e
            }
        },
        options:[]
}
Index.args = args
