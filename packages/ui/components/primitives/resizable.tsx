"use client";

import * as React from "react";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  PanelGroupProps,
  PanelProps,
  PanelResizeHandleProps,
} from "react-resizable-panels";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/resizable.module.css";

const ResizablePanelGroup = ({
  className,
  ...props
}: PanelGroupProps) => (
  <PanelGroup
    className={cn(styles.panelGroup, className)}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: PanelResizeHandleProps & {
  withHandle?: boolean;
}) => (
  <PanelResizeHandle
    className={cn(styles.handle, className)}
    {...props}
  >
    {withHandle && (
      <div className={styles.handleInner}>
        <DragHandleDots2Icon className={styles.handleIcon} />
      </div>
    )}
  </PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

