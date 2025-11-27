/**
 * Icon Library
 * Common icons used throughout the design system
 * Based on Radix UI Icons with consistent sizing and styling
 */

import React from "react";
import { Icon } from "./icon";

// Import actual Radix UI Icons
import {
  HomeIcon as RadixHomeIcon,
  DashboardIcon as RadixDashboardIcon,
  PersonIcon as RadixPersonIcon,
  GearIcon as RadixGearIcon,
  BarChartIcon as RadixBarChartIcon,
  FileTextIcon as RadixFileTextIcon,
  PlusIcon as RadixPlusIcon,
  Pencil1Icon as RadixPencil1Icon,
  TrashIcon as RadixTrashIcon,
  MagnifyingGlassIcon as RadixMagnifyingGlassIcon,
  MixerHorizontalIcon as RadixMixerHorizontalIcon,
  CheckIcon as RadixCheckIcon,
  Cross2Icon as RadixCross2Icon,
  ExclamationTriangleIcon as RadixExclamationTriangleIcon,
  InfoCircledIcon as RadixInfoCircledIcon,
  ChatBubbleIcon as RadixChatBubbleIcon,
  EnvelopeClosedIcon as RadixEnvelopeClosedIcon,
  BellIcon as RadixBellIcon,
  LockClosedIcon as RadixLockClosedIcon,
  LockOpen1Icon as RadixLockOpen1Icon,
} from "@radix-ui/react-icons";

// Navigation Icons
export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixHomeIcon />
  </Icon>
);

export const DashboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixDashboardIcon />
  </Icon>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixPersonIcon />
  </Icon>
);

export const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixGearIcon />
  </Icon>
);

export const AnalyticsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixBarChartIcon />
  </Icon>
);

export const ReportsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixFileTextIcon />
  </Icon>
);

// Action Icons
export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixPlusIcon />
  </Icon>
);

export const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixPencil1Icon />
  </Icon>
);

export const DeleteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixTrashIcon />
  </Icon>
);

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixMagnifyingGlassIcon />
  </Icon>
);

export const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixMixerHorizontalIcon />
  </Icon>
);

// Status Icons
export const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixCheckIcon />
  </Icon>
);

export const CrossIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixCross2Icon />
  </Icon>
);

export const WarningIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixExclamationTriangleIcon />
  </Icon>
);

export const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixInfoCircledIcon />
  </Icon>
);

// Communication Icons
export const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixChatBubbleIcon />
  </Icon>
);

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixEnvelopeClosedIcon />
  </Icon>
);

export const BellIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixBellIcon />
  </Icon>
);

// Security Icons
export const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixLockClosedIcon />
  </Icon>
);

export const UnlockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <RadixLockOpen1Icon />
  </Icon>
);

// Export all icons as a collection
export const Icons = {
  // Navigation
  Home: HomeIcon,
  Dashboard: DashboardIcon,
  Users: UsersIcon,
  Settings: SettingsIcon,
  Analytics: AnalyticsIcon,
  Reports: ReportsIcon,

  // Actions
  Plus: PlusIcon,
  Edit: EditIcon,
  Delete: DeleteIcon,
  Search: SearchIcon,
  Filter: FilterIcon,

  // Status
  Check: CheckIcon,
  Cross: CrossIcon,
  Warning: WarningIcon,
  Info: InfoIcon,

  // Communication
  Message: MessageIcon,
  Mail: MailIcon,
  Bell: BellIcon,

  // Security
  Lock: LockIcon,
  Unlock: UnlockIcon,
} as const;

export type IconName = keyof typeof Icons;