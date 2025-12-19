"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  GalleryVerticalEnd,
  ChevronRight,
  Plus,
  Minus,
  BookOpen,
  Bot,
  Command,
  Frame,
  PieChart,
  Map,
  LifeBuoy,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Separator,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Section,
  Box,
} from "../../../src";

// Sample data for different variants
const navMain = [
  {
    title: "Getting Started",
    icon: BookOpen,
    url: "#",
    items: [
      { title: "Installation", url: "#" },
      { title: "Project Structure", url: "#" },
    ],
  },
  {
    title: "Building Your Application",
    icon: SquareTerminal,
    url: "#",
    items: [
      { title: "Routing", url: "#" },
      { title: "Data Fetching", url: "#", isActive: true },
      { title: "Rendering", url: "#" },
      { title: "Caching", url: "#" },
      { title: "Styling", url: "#" },
    ],
  },
  {
    title: "API Reference",
    icon: Command,
    url: "#",
    items: [
      { title: "Components", url: "#" },
      { title: "File Conventions", url: "#" },
      { title: "Functions", url: "#" },
    ],
  },
];

const navMainWithIcons = [
  {
    title: "Playground",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      { title: "History", url: "#" },
      { title: "Starred", url: "#" },
      { title: "Settings", url: "#" },
    ],
  },
  {
    title: "Models",
    url: "#",
    icon: Bot,
    items: [
      { title: "Genesis", url: "#" },
      { title: "Explorer", url: "#" },
      { title: "Quantum", url: "#" },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
    items: [
      { title: "Introduction", url: "#" },
      { title: "Get Started", url: "#" },
      { title: "Tutorials", url: "#" },
    ],
  },
];

// Simple Sidebar Component (Variant 1)
function SimpleSidebar() {
  const items = [
    { title: "Home", url: "#", icon: Home },
    { title: "Inbox", url: "#", icon: Inbox },
    { title: "Calendar", url: "#", icon: Calendar },
    { title: "Search", url: "#", icon: Search },
    { title: "Settings", url: "#", icon: Settings },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  style={{
                    background: "var(--color-primary-600)",
                    color: "var(--color-text-inverse)",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GalleryVerticalEnd size={16} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                  <span style={{ fontWeight: "var(--font-weight-medium)" }}>Documentation</span>
                  <span style={{ fontSize: "var(--font-size-xs)" }}>v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon size={16} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

// Sidebar with Submenus (Variant 3)
function SidebarWithSubmenus() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  style={{
                    background: "var(--color-primary-600)",
                    color: "var(--color-text-inverse)",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GalleryVerticalEnd size={16} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                  <span style={{ fontWeight: "var(--font-weight-medium)" }}>Documentation</span>
                  <span style={{ fontSize: "var(--font-size-xs)" }}>v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a href={item.url} style={{ fontWeight: "var(--font-weight-medium)" }}>
                    {item.icon && <item.icon size={16} />}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                          <a href={subItem.url}><span>{subItem.title}</span></a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

// Floating Sidebar (Variant 4)
function FloatingSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  style={{
                    background: "var(--color-primary-600)",
                    color: "var(--color-text-inverse)",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GalleryVerticalEnd size={16} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                  <span style={{ fontWeight: "var(--font-weight-medium)" }}>Documentation</span>
                  <span style={{ fontSize: "var(--font-size-xs)" }}>v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu style={{ gap: "var(--space-sm)" }}>
            {navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a href={item.url} style={{ fontWeight: "var(--font-weight-medium)" }}>
                    {item.icon && <item.icon size={16} />}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub style={{ marginLeft: 0, borderLeft: "none", paddingLeft: "var(--space-sm)" }}>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                          <a href={subItem.url}><span>{subItem.title}</span></a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// Collapsible Sidebar (Variant 5)
function CollapsibleSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  style={{
                    background: "var(--color-primary-600)",
                    color: "var(--color-text-inverse)",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GalleryVerticalEnd size={16} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                  <span style={{ fontWeight: "var(--font-weight-medium)" }}>Documentation</span>
                  <span style={{ fontSize: "var(--font-size-xs)" }}>v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navMain.map((item, index) => (
              <Collapsible key={item.title} defaultOpen={index === 1}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.icon && <item.icon size={16} />}
                      <span>{item.title}</span>
                      <ChevronRight size={16} style={{ marginLeft: "auto", transition: "transform 0.2s" }} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                              <a href={subItem.url}><span>{subItem.title}</span></a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

// Inset Sidebar (Variant 8)
function InsetSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  style={{
                    background: "var(--color-primary-600)",
                    color: "var(--color-text-inverse)",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Command size={16} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                  <span style={{ fontWeight: "var(--font-weight-medium)" }}>Acme Inc</span>
                  <span style={{ fontSize: "var(--font-size-xs)" }}>Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navMainWithIcons.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon size={16} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="sm" asChild>
              <a href="#">
                <LifeBuoy size={16} />
                <span>Support</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size="sm" asChild>
              <a href="#">
                <Send size={16} />
                <span>Feedback</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default function SidebarPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Sidebar</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        A versatile sidebar component with multiple variants and collapsible functionality.
      </p>

      {/* Simple Sidebar */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Simple Sidebar
        </h2>
        <Box mb={4} style={{ height: "400px", border: "1px solid var(--color-border-primary)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <SidebarProvider>
            <SimpleSidebar />
            <SidebarInset>
              <header style={{ display: "flex", height: "4rem", alignItems: "center", gap: "var(--space-sm)", borderBottom: "1px solid var(--color-border-primary)", padding: "0 var(--space-md)" }}>
                <SidebarTrigger />
                <Separator orientation="vertical" style={{ height: "1rem" }} />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/primitives">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Sidebar</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <div style={{ padding: "var(--space-md)" }}>
                <p>Main content area</p>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </Box>
      </Section>

      {/* Sidebar with Submenus */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Sidebar with Submenus
        </h2>
        <Box mb={4} style={{ height: "400px", border: "1px solid var(--color-border-primary)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <SidebarProvider>
            <SidebarWithSubmenus />
            <SidebarInset>
              <header style={{ display: "flex", height: "4rem", alignItems: "center", gap: "var(--space-sm)", borderBottom: "1px solid var(--color-border-primary)", padding: "0 var(--space-md)" }}>
                <SidebarTrigger />
                <Separator orientation="vertical" style={{ height: "1rem" }} />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/primitives">Building Your Application</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <div style={{ padding: "var(--space-md)" }}>
                <p>Main content area</p>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </Box>
      </Section>

      {/* Floating Sidebar */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Floating Sidebar
        </h2>
        <Box mb={4} style={{ height: "400px", border: "1px solid var(--color-border-primary)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--color-bg-secondary)" }}>
          <SidebarProvider>
            <FloatingSidebar />
            <SidebarInset>
              <header style={{ display: "flex", height: "4rem", alignItems: "center", gap: "var(--space-sm)", padding: "0 var(--space-md)" }}>
                <SidebarTrigger />
                <Separator orientation="vertical" style={{ height: "1rem" }} />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/primitives">Building Your Application</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <div style={{ padding: "var(--space-md)" }}>
                <p>Main content area</p>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </Box>
      </Section>

      {/* Collapsible Sidebar */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Collapsible Sidebar
        </h2>
        <Box mb={4} style={{ height: "400px", border: "1px solid var(--color-border-primary)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <SidebarProvider>
            <CollapsibleSidebar />
            <SidebarInset>
              <header style={{ display: "flex", height: "4rem", alignItems: "center", gap: "var(--space-sm)", borderBottom: "1px solid var(--color-border-primary)", padding: "0 var(--space-md)" }}>
                <SidebarTrigger />
                <Separator orientation="vertical" style={{ height: "1rem" }} />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/primitives">Building Your Application</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <div style={{ padding: "var(--space-md)" }}>
                <p>Main content area</p>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </Box>
      </Section>

      {/* Inset Sidebar */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Inset Sidebar
        </h2>
        <Box mb={4} style={{ height: "400px", border: "1px solid var(--color-border-primary)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <SidebarProvider>
            <InsetSidebar />
            <SidebarInset>
              <header style={{ display: "flex", height: "4rem", alignItems: "center", gap: "var(--space-sm)", padding: "0 var(--space-md)" }}>
                <SidebarTrigger />
                <Separator orientation="vertical" style={{ height: "1rem" }} />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/primitives">Platform</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Playground</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <div style={{ padding: "var(--space-md)" }}>
                <p>Main content area</p>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </Box>
      </Section>
    </div>
  );
}

