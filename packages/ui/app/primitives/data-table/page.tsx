"use client";

import { useState } from "react";
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import {
  DataTable,
  DataTableColumnHeader,
  DataTableRowSelect,
  DataTableSelectAll,
} from "../../../components/primitives/data-table";
import { Badge } from "../../../components/primitives/badge";
import { Button } from "../../../components/primitives/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/primitives/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/primitives/dropdown-menu";
import {
  DotsHorizontalIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MagnifyingGlassIcon,
  EyeOpenIcon,
  CheckCircledIcon,
  TableIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import styles from "./page.module.css";

// ===========================================
// SAMPLE DATA
// ===========================================

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  customer: string;
  createdAt: Date;
};

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "in_stock" | "low_stock" | "out_of_stock";
};

// Larger dataset for pagination demo
const payments: Payment[] = [
  { id: "PAY-001", amount: 316.00, status: "success", email: "ken99@example.com", customer: "Ken Adams", createdAt: new Date("2024-01-15") },
  { id: "PAY-002", amount: 242.50, status: "success", email: "abe45@example.com", customer: "Abe Lincoln", createdAt: new Date("2024-01-16") },
  { id: "PAY-003", amount: 837.00, status: "processing", email: "monserrat44@example.com", customer: "Monserrat Garcia", createdAt: new Date("2024-01-17") },
  { id: "PAY-004", amount: 874.25, status: "success", email: "silas22@example.com", customer: "Silas Green", createdAt: new Date("2024-01-18") },
  { id: "PAY-005", amount: 721.00, status: "failed", email: "carmella@example.com", customer: "Carmella Jones", createdAt: new Date("2024-01-19") },
  { id: "PAY-006", amount: 150.75, status: "pending", email: "john@example.com", customer: "John Smith", createdAt: new Date("2024-01-20") },
  { id: "PAY-007", amount: 499.99, status: "success", email: "jane@example.com", customer: "Jane Doe", createdAt: new Date("2024-01-21") },
  { id: "PAY-008", amount: 1250.00, status: "processing", email: "bob@example.com", customer: "Bob Williams", createdAt: new Date("2024-01-22") },
  { id: "PAY-009", amount: 89.50, status: "failed", email: "alice@example.com", customer: "Alice Brown", createdAt: new Date("2024-01-23") },
  { id: "PAY-010", amount: 445.00, status: "success", email: "charlie@example.com", customer: "Charlie Wilson", createdAt: new Date("2024-01-24") },
  { id: "PAY-011", amount: 672.30, status: "pending", email: "diana@example.com", customer: "Diana Ross", createdAt: new Date("2024-01-25") },
  { id: "PAY-012", amount: 333.33, status: "success", email: "edward@example.com", customer: "Edward Norton", createdAt: new Date("2024-01-26") },
  { id: "PAY-013", amount: 567.00, status: "success", email: "frank@example.com", customer: "Frank Miller", createdAt: new Date("2024-01-27") },
  { id: "PAY-014", amount: 890.00, status: "processing", email: "grace@example.com", customer: "Grace Kelly", createdAt: new Date("2024-01-28") },
  { id: "PAY-015", amount: 234.50, status: "success", email: "henry@example.com", customer: "Henry Ford", createdAt: new Date("2024-01-29") },
];

const products: Product[] = [
  { id: "PRD-001", name: "MacBook Pro 14\"", category: "Electronics", price: 1999.00, stock: 45, status: "in_stock" },
  { id: "PRD-002", name: "iPhone 15 Pro", category: "Electronics", price: 1199.00, stock: 120, status: "in_stock" },
  { id: "PRD-003", name: "AirPods Pro", category: "Electronics", price: 249.00, stock: 5, status: "low_stock" },
  { id: "PRD-004", name: "Magic Keyboard", category: "Accessories", price: 299.00, stock: 0, status: "out_of_stock" },
  { id: "PRD-005", name: "iPad Air", category: "Electronics", price: 799.00, stock: 30, status: "in_stock" },
  { id: "PRD-006", name: "Apple Watch Ultra", category: "Wearables", price: 799.00, stock: 8, status: "low_stock" },
  { id: "PRD-007", name: "Studio Display", category: "Electronics", price: 1599.00, stock: 15, status: "in_stock" },
  { id: "PRD-008", name: "HomePod mini", category: "Smart Home", price: 99.00, stock: 0, status: "out_of_stock" },
];

// ===========================================
// COLUMN DEFINITIONS
// ===========================================

// Full featured columns with all capabilities
const fullFeaturedColumns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => <DataTableSelectAll table={table} />,
    cell: ({ row }) => <DataTableRowSelect row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    enableHiding: false,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Customer" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => <span className={styles.email}>{row.getValue("email")}</span>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variants: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
        success: "default",
        processing: "secondary",
        pending: "outline",
        failed: "destructive",
      };
      return <Badge variant={variants[status] || "default"}>{status}</Badge>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return (
        <span className={styles.amount}>
          {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date;
      return <span className={styles.date}>{date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className={styles.destructiveItem}>Refund payment</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// Sorting demo columns
const sortingColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Product Name" />,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
    cell: ({ row }) => <Badge variant="outline">{row.getValue("category")}</Badge>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      return <span className={styles.amount}>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)}</span>;
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" />,
    cell: ({ row }) => {
      const stock = row.getValue("stock") as number;
      return <span className={stock === 0 ? styles.outOfStock : stock < 10 ? styles.lowStock : ""}>{stock} units</span>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Availability" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variants: Record<string, "default" | "secondary" | "destructive"> = {
        in_stock: "default",
        low_stock: "secondary",
        out_of_stock: "destructive",
      };
      const labels: Record<string, string> = {
        in_stock: "In Stock",
        low_stock: "Low Stock",
        out_of_stock: "Out of Stock",
      };
      return <Badge variant={variants[status]}>{labels[status]}</Badge>;
    },
  },
];

// Row selection columns
const selectionColumns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => <DataTableSelectAll table={table} />,
    cell: ({ row }) => <DataTableRowSelect row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
    },
  },
];

// ===========================================
// SHOWCASE PAGE COMPONENT
// ===========================================

export default function DataTablePage() {
  const [selectedPayments, setSelectedPayments] = useState<RowSelectionState>({});
  const [selectedProducts, setSelectedProducts] = useState<RowSelectionState>({});

  // Calculate selected payment totals
  const selectedPaymentIndices = Object.keys(selectedPayments).filter(k => selectedPayments[k]);
  const selectedPaymentTotal = selectedPaymentIndices.reduce((sum, idx) => {
    const payment = payments[parseInt(idx)];
    return sum + (payment?.amount || 0);
  }, 0);

  // Calculate selected product info
  const selectedProductIndices = Object.keys(selectedProducts).filter(k => selectedProducts[k]);
  const selectedProductTotal = selectedProductIndices.reduce((sum, idx) => {
    const product = products[parseInt(idx)];
    return sum + (product?.price || 0);
  }, 0);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1>DataTable Component</h1>
        <p>A powerful, feature-rich data table built on TanStack Table v8 with sorting, filtering, pagination, and row selection.</p>
      </header>

      {/* Feature Cards */}
      <div className={styles.featureCards}>
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <ArrowUpIcon /> Sorting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Click column headers to sort ascending/descending</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <MagnifyingGlassIcon /> Filtering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Filter by column or search globally</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <EyeOpenIcon /> Visibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Show/hide columns dynamically</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <CheckCircledIcon /> Selection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Single and multi-row selection</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <TableIcon /> Pagination
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Navigate pages with size options</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <LightningBoltIcon /> Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Row-level dropdown actions</CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Demo 1: Full Featured Table */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>🚀 Full Featured DataTable</h2>
          <p>All features enabled: sorting, filtering, column visibility, row selection, pagination, and actions.</p>
        </div>
        <div className={styles.instructions}>
          <strong>Try it:</strong>
          <ul>
            <li>Click column headers to <strong>sort</strong> (ascending → descending → none)</li>
            <li>Type in the filter input to <strong>search</strong> by email</li>
            <li>Click "Columns" button to <strong>hide/show columns</strong></li>
            <li>Click checkboxes to <strong>select rows</strong></li>
            <li>Use pagination controls to <strong>navigate pages</strong></li>
            <li>Click the ⋮ menu on each row for <strong>actions</strong></li>
          </ul>
        </div>
        <DataTable
          columns={fullFeaturedColumns}
          data={payments}
          enableRowSelection
          enableColumnVisibility
          enableGlobalFilter
          filterPlaceholder="Filter by email..."
          filterColumn="email"
          enablePagination
          defaultPageSize={5}
          pageSizeOptions={[5, 10, 15]}
          onRowSelectionChange={setSelectedPayments}
        />
        {selectedPaymentIndices.length > 0 && (
          <div className={styles.selectionSummary}>
            <strong>{selectedPaymentIndices.length}</strong> payment(s) selected
            <span className={styles.separator}>•</span>
            Total: <strong>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(selectedPaymentTotal)}</strong>
            <Button variant="outline" size="sm" onClick={() => setSelectedPayments({})}>
              Clear selection
            </Button>
          </div>
        )}
      </section>

      {/* Demo 2: Sorting */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>📊 Column Sorting</h2>
          <p>Click any column header to sort. Click again to reverse. Third click removes sorting.</p>
        </div>
        <div className={styles.instructions}>
          <strong>Sort indicators:</strong>
          <ul>
            <li><ArrowUpIcon style={{ display: "inline", verticalAlign: "middle" }} /> Ascending (A→Z, 0→9)</li>
            <li><ArrowDownIcon style={{ display: "inline", verticalAlign: "middle" }} /> Descending (Z→A, 9→0)</li>
          </ul>
        </div>
        <DataTable
          columns={sortingColumns}
          data={products}
          enablePagination={false}
        />
      </section>

      {/* Demo 3: Row Selection */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>✅ Row Selection</h2>
          <p>Select individual rows or use the header checkbox to select all visible rows.</p>
        </div>
        <DataTable
          columns={selectionColumns}
          data={products}
          enableRowSelection
          enablePagination={false}
          onRowSelectionChange={setSelectedProducts}
        />
        {selectedProductIndices.length > 0 && (
          <div className={styles.selectionSummary}>
            <strong>{selectedProductIndices.length}</strong> product(s) selected
            <span className={styles.separator}>•</span>
            Total value: <strong>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(selectedProductTotal)}</strong>
            <Button variant="destructive" size="sm">
              Delete selected
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSelectedProducts({})}>
              Clear
            </Button>
          </div>
        )}
      </section>

      {/* Demo 4: Global Search */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>🔍 Global Search</h2>
          <p>Search across all columns at once. Try typing a product name, category, or status.</p>
        </div>
        <DataTable
          columns={sortingColumns}
          data={products}
          enableGlobalFilter
          filterPlaceholder="Search products..."
          enablePagination={false}
        />
      </section>

      {/* Demo 5: Pagination */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>📄 Pagination</h2>
          <p>Navigate through large datasets with customizable page sizes.</p>
        </div>
        <div className={styles.instructions}>
          <strong>Controls:</strong>
          <ul>
            <li>⏮ Go to first page</li>
            <li>◀ Previous page</li>
            <li>▶ Next page</li>
            <li>⏭ Go to last page</li>
            <li>Dropdown: Change rows per page</li>
          </ul>
        </div>
        <DataTable
          columns={fullFeaturedColumns.filter(col => col.id !== "select")}
          data={payments}
          enablePagination
          defaultPageSize={3}
          pageSizeOptions={[3, 5, 10, 15]}
        />
      </section>

      {/* Usage Code */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>💻 Usage Example</h2>
          <p>Here&apos;s how to implement the DataTable in your application.</p>
        </div>
        <pre className={styles.code}>{`import { DataTable, DataTableColumnHeader, DataTableSelectAll, DataTableRowSelect } from "@repo/ui";
import type { ColumnDef } from "@tanstack/react-table";

// Define your data type
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "success" | "failed";
  email: string;
};

// Define columns
const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => <DataTableSelectAll table={table} />,
    cell: ({ row }) => <DataTableRowSelect row={row} />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Badge>{row.getValue("status")}</Badge>,
  },
];

// Use the DataTable
export function PaymentsTable({ data }) {
  return (
    <DataTable
      columns={columns}
      data={data}
      enableRowSelection
      enableColumnVisibility
      enableGlobalFilter
      filterPlaceholder="Filter emails..."
      filterColumn="email"
      enablePagination
      defaultPageSize={10}
    />
  );
}`}</pre>
      </section>

      {/* API Reference */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>📚 Props Reference</h2>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.propsTable}>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>columns</code></td>
                <td><code>ColumnDef[]</code></td>
                <td>Required</td>
                <td>Column definitions (TanStack Table format)</td>
              </tr>
              <tr>
                <td><code>data</code></td>
                <td><code>TData[]</code></td>
                <td>Required</td>
                <td>Array of data to display</td>
              </tr>
              <tr>
                <td><code>enableRowSelection</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enable row selection checkboxes</td>
              </tr>
              <tr>
                <td><code>enableColumnVisibility</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Show column visibility toggle</td>
              </tr>
              <tr>
                <td><code>enableGlobalFilter</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enable search/filter input</td>
              </tr>
              <tr>
                <td><code>filterColumn</code></td>
                <td><code>string</code></td>
                <td><code>undefined</code></td>
                <td>Column to filter (if not set, uses global filter)</td>
              </tr>
              <tr>
                <td><code>filterPlaceholder</code></td>
                <td><code>string</code></td>
                <td><code>&quot;Filter...&quot;</code></td>
                <td>Placeholder text for filter input</td>
              </tr>
              <tr>
                <td><code>enablePagination</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>Enable pagination controls</td>
              </tr>
              <tr>
                <td><code>defaultPageSize</code></td>
                <td><code>number</code></td>
                <td><code>10</code></td>
                <td>Initial rows per page</td>
              </tr>
              <tr>
                <td><code>pageSizeOptions</code></td>
                <td><code>number[]</code></td>
                <td><code>[10,20,30,40,50]</code></td>
                <td>Available page size options</td>
              </tr>
              <tr>
                <td><code>emptyMessage</code></td>
                <td><code>string</code></td>
                <td><code>&quot;No results.&quot;</code></td>
                <td>Message when no data</td>
              </tr>
              <tr>
                <td><code>onRowSelectionChange</code></td>
                <td><code>(selection) =&gt; void</code></td>
                <td><code>undefined</code></td>
                <td>Callback when selection changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
