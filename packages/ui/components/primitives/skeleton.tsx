import * as React from "react";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/skeleton.module.css";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(styles.skeleton, className)}
      {...props}
    />
  );
}

export { Skeleton };
