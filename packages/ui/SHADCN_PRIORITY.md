# shadcn/ui Component Onboarding Priority

## Current Components ✅
- Button
- Dialog
- Input
- Select
- Avatar
- Dropdown Menu
- Table
- Icon/Icons

---

## Priority Tiers

### 🔴 **Tier 1: Critical Foundation** (Build immediately)
*Essential for building forms, layouts, and basic blocks*

1. **Label** - Required for all form inputs
2. **Card** - Foundation for dashboard blocks, content containers
3. **Separator** - Visual organization in layouts
4. **Badge** - Status indicators, tags, counts (used in sidebars, tables, cards)
5. **Textarea** - Multi-line text input (forms, comments, descriptions)
6. **Checkbox** - Form inputs (settings, filters, selections)
7. **Radio Group** - Single choice selections (forms, filters)

**Why:** These are the absolute minimum needed to build functional forms and card-based layouts (like dashboards).

---

### 🟠 **Tier 2: Form & Data Entry** (Build next)
*Complete form capabilities and data display*

8. **Form** - React Hook Form integration (validation, error handling)
9. **Switch** - Toggle inputs (settings, preferences)
10. **Slider** - Range inputs (filters, settings)
11. **Alert** - Error messages, warnings, info (form validation, notifications)
12. **Alert Dialog** - Confirmation dialogs (delete confirmations, critical actions)

**Why:** Completes form functionality and adds essential user feedback patterns.

---

### 🟡 **Tier 3: Navigation & Organization** (Build after Tier 2)
*Complex navigation patterns and content organization*

13. **Tabs** - Content organization (settings pages, dashboards)
14. **Breadcrumb** - Navigation hierarchy (multi-level pages)
15. **Pagination** - Data table navigation
16. **Tooltip** - Help text, hover information
17. **Popover** - Contextual information, filters, actions

**Why:** Enables complex navigation patterns seen in dashboard blocks and multi-page flows.

---

### 🟢 **Tier 4: Enhanced UX** (Build after Tier 3)
*Improved user experience and advanced interactions*

18. **Sheet** - Mobile-friendly side panels (mobile navigation, filters)
19. **Drawer** - Bottom sheets (mobile actions, menus)
20. **Skeleton** - Loading states (better UX than spinners)
21. **Progress** - Progress indicators (uploads, form completion)
22. **Toast/Sonner** - Non-blocking notifications (success messages, errors)

**Why:** Significantly improves UX, especially for mobile and async operations.

---

### 🔵 **Tier 5: Advanced Features** (Build as needed)
*Specialized components for specific use cases*

23. **Calendar** - Date selection (if building calendar blocks)
24. **Command** - Command palette (search, shortcuts)
25. **Hover Card** - Rich hover previews
26. **Collapsible** - Expandable sections
27. **Accordion** - FAQ, expandable content
28. **Scroll Area** - Custom scrollbars (better styling control)
29. **Resizable** - Resizable panels (advanced layouts)
30. **Sidebar** - Dedicated sidebar component (if building sidebar blocks)

**Why:** These are specialized and can be added when specific blocks require them.

---

## Implementation Strategy

### Phase 1: Foundation (Week 1)
- [ ] Label
- [ ] Card
- [ ] Separator
- [ ] Badge
- [ ] Textarea
- [ ] Checkbox
- [ ] Radio Group

**Goal:** Can build basic forms and card layouts

### Phase 2: Complete Forms (Week 2)
- [ ] Form
- [ ] Switch
- [ ] Slider
- [ ] Alert
- [ ] Alert Dialog

**Goal:** Can build complete, validated forms with feedback

### Phase 3: Navigation (Week 3)
- [ ] Tabs
- [ ] Breadcrumb
- [ ] Pagination
- [ ] Tooltip
- [ ] Popover

**Goal:** Can build complex navigation patterns

### Phase 4: Polish (Week 4)
- [ ] Sheet
- [ ] Drawer
- [ ] Skeleton
- [ ] Progress
- [ ] Toast/Sonner

**Goal:** Production-ready UX with loading states and notifications

---

## Notes

- **All components** will be converted from Tailwind to CSS Modules
- **Design tokens** will be used consistently across all components
- **Accessibility** is maintained via Radix UI primitives
- **Blocks** can be built incrementally as components are added
- **Priority** may shift based on specific block requirements

---

## Block Dependencies

### Dashboard Block
- Card ✅ (Tier 1)
- Badge ✅ (Tier 1)
- Separator ✅ (Tier 1)
- Table ✅ (Done)
- Tabs (Tier 3)
- Skeleton (Tier 4)
- Progress (Tier 4)

### Sidebar Blocks
- Badge ✅ (Tier 1)
- Separator ✅ (Tier 1)
- Collapsible (Tier 5)
- Sidebar (Tier 5)

### Login Blocks
- Label ✅ (Tier 1)
- Input ✅ (Done)
- Button ✅ (Done)
- Checkbox ✅ (Tier 1)
- Alert ✅ (Tier 2)
- Form ✅ (Tier 2)

### Calendar Blocks
- Calendar (Tier 5)
- Popover (Tier 3)
- Button ✅ (Done)

