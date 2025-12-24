/**
 * Primitive Components
 * Core components built with Radix UI primitives
 */

export { Button, buttonVariants } from './button';
export type { ButtonProps } from './button';

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './dialog';
export type { DialogContentProps } from './dialog';

export { Input, inputVariants } from './input';
export type { InputProps } from './input';

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './select';
export type { SelectTriggerProps } from './select';

export { MenuItem, menuItemVariants } from './menu-item';
export type { MenuItemProps } from './menu-item';

export { Avatar } from './avatar';
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps } from './avatar';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuItemIndicator,
  DropdownMenuRadioGroup,
} from './dropdown-menu';

export { Icon, iconSizes } from './icon';
export type { IconProps } from './icon';

export { Icons } from './icons';
export type { IconName } from './icons';

export { Label } from './label';
export type { LabelProps } from './label';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card';
export type {
  CardProps,
  CardHeaderProps,
  CardFooterProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
} from './card';

export { Separator } from './separator';
export type { SeparatorProps } from './separator';

export { Badge, badgeVariants } from './badge';
export type { BadgeProps } from './badge';

export { Textarea } from './textarea';
export type { TextareaProps } from './textarea';

export { Checkbox } from './checkbox';
export type { CheckboxProps } from './checkbox';

export { RadioGroup, RadioGroupItem } from './radio-group';
export type { RadioGroupProps, RadioGroupItemProps } from './radio-group';

export { Switch } from './switch';
export type { SwitchProps } from './switch';

export { Slider } from './slider';
export type { SliderProps } from './slider';

export { Alert, AlertTitle, AlertDescription, alertVariants } from './alert';
export type { AlertProps } from './alert';

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './alert-dialog';

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from './form';

export { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './breadcrumb';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './tooltip';

export { Popover, PopoverTrigger, PopoverContent } from './popover';

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './sheet';

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from './drawer';

export { Skeleton } from './skeleton';

export { Progress } from './progress';

export { Toaster } from './sonner';

export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

export { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';

export { ScrollArea, ScrollBar } from './scroll-area';

export { Calendar } from './calendar';
export type { CalendarProps } from './calendar';

export { DatePicker } from './date-picker';
export type { DatePickerProps } from './date-picker';

export { DateRangePicker } from './date-range-picker';
export type { DateRangePickerProps, DateRange } from './date-range-picker';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command';

export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable';

export {
  DataTable,
  DataTablePagination,
  DataTableColumnHeader,
  DataTableRowSelect,
  DataTableSelectAll,
} from './data-table';
export type {
  DataTableProps,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  RowSelectionState,
} from './data-table';

export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar } from './sidebar';

// Chart components (Recharts integration)
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  useChart,
  Recharts,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  RadialBarChart,
  RadialBar,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
  Sector,
} from './chart';
export type { ChartConfig } from './chart';

// StatCard component
export { StatCard } from './stat-card';
export type { StatCardProps } from './stat-card';

// EmptyState component
export { EmptyState } from './empty-state';
export type { EmptyStateProps } from './empty-state';
