import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../components/primitives/accordion";

export default function AccordionPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "2rem" }}>Accordion Component</h1>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Single Collapsible</h2>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this component?</AccordionTrigger>
          <AccordionContent>
            The Accordion component allows you to create expandable/collapsible sections
            of content. It&apos;s perfect for FAQs, feature lists, and organizing content.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            It uses Radix UI primitives under the hood for accessibility and behavior,
            styled with CSS Modules using our design tokens.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize it?</AccordionTrigger>
          <AccordionContent>
            Yes! You can pass custom className props and override styles as needed.
            All animations and transitions are configurable via design tokens.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Multiple Open</h2>
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Feature 1</AccordionTrigger>
          <AccordionContent>
            Multiple items can be open at the same time with type=&quot;multiple&quot;
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Feature 2</AccordionTrigger>
          <AccordionContent>
            All animations are smooth and accessible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Feature 3</AccordionTrigger>
          <AccordionContent>
            Keyboard navigation is fully supported.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

