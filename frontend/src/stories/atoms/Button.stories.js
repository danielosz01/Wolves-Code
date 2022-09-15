import React from "react";

import Button from "../../components/atoms/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => (
  <Button styles="btn btn-primary col-12 contactUs" text="Contact us" />
);
Primary.storyName = "Contact us";

export const Secondary = () => (
  <Button styles="btn btn-primary col-12 login" text="Log in" />
);
Secondary.storyName = "Log in";

export const Tertiary = () => (
  <Button styles="btn btn-primary col-12 send" text="Send" />
);
Tertiary.storyName = "Send";
