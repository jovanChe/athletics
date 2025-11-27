"use client";

import React from "react";
import {
  Box,
  Flex,
  Section,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "../../../src";

export default function TablePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <div>
        <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0, marginBottom: "var(--space-sm)" }}>
          Table Component
        </h1>
        <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
          Accessible table component built with semantic HTML and styled with CSS Modules. Based on shadcn/ui Table component.
        </p>
      </div>

      {/* Basic Table */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Table
        </h2>
        <Box mb={4}>
          <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
            Simple Table
          </h3>
          <Table variant="ghost" size="2">
            <TableCaption>A list of team members and their roles.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Full name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Group</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Danilo Sousa</TableCell>
                <TableCell>danilo@example.com</TableCell>
                <TableCell>Developer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Zahra Ambessa</TableCell>
                <TableCell>zahra@example.com</TableCell>
                <TableCell>Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Jasper Eriksson</TableCell>
                <TableCell>jasper@example.com</TableCell>
                <TableCell>Developer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Section>

      {/* Table with Surface Variant */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Table Variants
        </h2>
        <Flex direction="column" gap={4}>
          <Box>
            <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
              Ghost Variant (Default)
            </h3>
            <Table variant="ghost" size="2">
              <TableCaption>Product inventory - Ghost variant.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget A</TableCell>
                  <TableCell>$29.99</TableCell>
                  <TableCell>150</TableCell>
                  <TableCell>In Stock</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget B</TableCell>
                  <TableCell>$49.99</TableCell>
                  <TableCell>23</TableCell>
                  <TableCell>Low Stock</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget C</TableCell>
                  <TableCell>$19.99</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>Out of Stock</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box>
            <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
              Surface Variant
            </h3>
            <Table variant="surface" size="2">
              <TableCaption>Product inventory - Surface variant with footer.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget A</TableCell>
                  <TableCell>$29.99</TableCell>
                  <TableCell>150</TableCell>
                  <TableCell>In Stock</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget B</TableCell>
                  <TableCell>$49.99</TableCell>
                  <TableCell>23</TableCell>
                  <TableCell>Low Stock</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget C</TableCell>
                  <TableCell>$19.99</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>Out of Stock</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total Products</TableCell>
                  <TableCell>3</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </Box>
        </Flex>
      </Section>

      {/* Table Size Variants */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Size Variants
        </h2>
        <Flex direction="column" gap={4}>
          <Box>
            <p style={{ fontSize: "var(--font-size-xs)", margin: 0, marginBottom: "var(--space-xs)", color: "var(--color-text-secondary)" }}>
              Size 1 (Small)
            </p>
            <Table variant="ghost" size="1">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Jane Smith</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell>Designer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box>
            <p style={{ fontSize: "var(--font-size-xs)", margin: 0, marginBottom: "var(--space-xs)", color: "var(--color-text-secondary)" }}>
              Size 2 (Default)
            </p>
            <Table variant="ghost" size="2">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Jane Smith</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell>Designer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box>
            <p style={{ fontSize: "var(--font-size-xs)", margin: 0, marginBottom: "var(--space-xs)", color: "var(--color-text-secondary)" }}>
              Size 3 (Large)
            </p>
            <Table variant="ghost" size="3">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Jane Smith</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell>Designer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Flex>
      </Section>

      {/* Table with Layout */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Table Layout
        </h2>
        <Flex direction="column" gap={4}>
          <Box>
            <p style={{ fontSize: "var(--font-size-xs)", margin: 0, marginBottom: "var(--space-xs)", color: "var(--color-text-secondary)" }}>
              Auto Layout (Default)
            </p>
            <Table variant="ghost" size="2" layout="auto">
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget A</TableCell>
                  <TableCell>A high-quality widget for everyday use</TableCell>
                  <TableCell>$29.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget B</TableCell>
                  <TableCell>Premium widget with advanced features</TableCell>
                  <TableCell>$49.99</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box>
            <p style={{ fontSize: "var(--font-size-xs)", margin: 0, marginBottom: "var(--space-xs)", color: "var(--color-text-secondary)" }}>
              Fixed Layout
            </p>
            <Table variant="ghost" size="2" layout="fixed">
              <TableHeader>
                <TableRow>
                  <TableHead style={{ width: "200px" }}>Product Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead style={{ width: "100px" }}>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget A</TableCell>
                  <TableCell>A high-quality widget for everyday use</TableCell>
                  <TableCell>$29.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>Widget B</TableCell>
                  <TableCell>Premium widget with advanced features</TableCell>
                  <TableCell>$49.99</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Flex>
      </Section>
    </div>
  );
}

