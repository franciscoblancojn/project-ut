import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputSelectMultipleT, InputSelectMultipleTProps } from "./index";

export default {
    title: "UIFenextjs/Input/SelectMultipleT",
    component: InputSelectMultipleT,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputSelectMultipleTProps<any>>> = (args) => (
    <InputSelectMultipleT {...args}>Test Children</InputSelectMultipleT>
);

export const Index = Profile.bind({});
const args : InputSelectMultipleTProps<any> = {
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
