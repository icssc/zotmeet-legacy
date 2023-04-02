"use client";

import React from "react";
import * as Select from "@radix-ui/react-select";
import cx from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import styles from "./select.module.scss";

const Root = Select.Root;
Root.displayName = Select.Root.displayName;

const Trigger = React.forwardRef<
  React.ElementRef<typeof Select.Trigger>,
  React.ComponentPropsWithoutRef<typeof Select.Trigger> & {
    color?: "sand" | "red" | "green" | "yellow" | "blue";
  }
>(({ className, children, color = "sand", ...props }, ref) => (
  <Select.Trigger
    ref={ref}
    className={cx(styles["select-trigger"], styles[color], className)}
    {...props}
  >
    <Select.Value placeholder="Select" />
    <Select.Icon className="SelectIcon">
      <ChevronDownIcon />
    </Select.Icon>
  </Select.Trigger>
));
Trigger.displayName = Select.Trigger.displayName;

const Portal = Select.Portal;

const Content = React.forwardRef<
  React.ElementRef<typeof Select.Content>,
  React.ComponentPropsWithoutRef<typeof Select.Content>
>(({ className, children, ...props }, ref) => (
  <Select.Content
    ref={ref}
    className={cx(styles["select-content"], className)}
    {...props}
  >
    {children}
  </Select.Content>
));
Content.displayName = Select.Content.displayName;

const ScrollUpButton = React.forwardRef<
  React.ElementRef<typeof Select.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof Select.ScrollUpButton>
>(({ className, children, ...props }, ref) => (
  <Select.ScrollUpButton
    ref={ref}
    className={cx(styles["select-scroll-button"], className)}
    {...props}
  >
    <ChevronUpIcon />
  </Select.ScrollUpButton>
));
ScrollUpButton.displayName = Select.ScrollUpButton.displayName;

const Viewport = React.forwardRef<
  React.ElementRef<typeof Select.Viewport>,
  React.ComponentPropsWithoutRef<typeof Select.Viewport>
>(({ className, children, ...props }, ref) => (
  <Select.Viewport
    ref={ref}
    className={cx(styles["select-viewport"], className)}
    {...props}
  >
    {children}
  </Select.Viewport>
));
Viewport.displayName = Select.Viewport.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.SelectItem>,
  React.ComponentPropsWithoutRef<typeof Select.SelectItem>
>(({ className, children, ...props }, ref) => (
  <Select.Item
    ref={ref}
    className={cx(styles["select-item"], className)}
    {...props}
  >
    <Select.ItemIndicator>
      <CheckIcon />
    </Select.ItemIndicator>
    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
));
SelectItem.displayName = Select.SelectItem.displayName;

const ScrollDownButton = React.forwardRef<
  React.ElementRef<typeof Select.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof Select.ScrollDownButton>
>(({ className, children, ...props }, ref) => (
  <Select.ScrollDownButton
    ref={ref}
    className={cx(styles["select-scroll-button"], className)}
    {...props}
  >
    <ChevronDownIcon />
  </Select.ScrollDownButton>
));
ScrollDownButton.displayName = Select.ScrollDownButton.displayName;

export {
  Root,
  Trigger,
  Portal,
  Content,
  ScrollUpButton,
  Viewport,
  SelectItem,
  ScrollDownButton,
};
