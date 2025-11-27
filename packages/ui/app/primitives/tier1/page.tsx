"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  Section,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Separator,
  Badge,
  Textarea,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Button,
  Input,
} from "../../../src";

export default function Tier1ComponentsPage() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Tier 1 Components</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Foundation components for building forms, layouts, and basic blocks.
      </p>

      {/* Label */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Label
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" style={{ marginTop: "var(--space-xs)" }} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" style={{ marginTop: "var(--space-xs)" }} />
            </div>
            <div>
              <Label htmlFor="disabled" data-disabled>
                Disabled Label
              </Label>
              <Input id="disabled" disabled placeholder="Disabled input" style={{ marginTop: "var(--space-xs)" }} />
            </div>
          </Flex>
        </Box>
      </Section>

      {/* Card */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Card
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
                  This is the card content. You can put any content here.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="md">
                  Action
                </Button>
                <Button variant="ghost" size="md">
                  Cancel
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card without Footer</CardTitle>
                <CardDescription>Some cards don't need a footer</CardDescription>
              </CardHeader>
              <CardContent>
                <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
                  This card only has header and content sections.
                </p>
              </CardContent>
            </Card>
          </Flex>
        </Box>
      </Section>

      {/* Separator */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Separator
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <p style={{ margin: 0 }}>Content above</p>
              <Separator style={{ margin: "var(--space-md) 0" }} />
              <p style={{ margin: 0 }}>Content below</p>
            </div>
            <Flex align="center" gap={4}>
              <span>Left</span>
              <Separator orientation="vertical" style={{ height: "1rem" }} />
              <span>Middle</span>
              <Separator orientation="vertical" style={{ height: "1rem" }} />
              <span>Right</span>
            </Flex>
          </Flex>
        </Box>
      </Section>

      {/* Badge */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Badge
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={4} wrap="wrap">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </Flex>
            <div>
              <p style={{ margin: 0, marginBottom: "var(--space-sm)" }}>
                Badges can be used inline: <Badge variant="default">New</Badge> or{" "}
                <Badge variant="secondary">Updated</Badge>
              </p>
            </div>
          </Flex>
        </Box>
      </Section>

      {/* Textarea */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Textarea
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message here..."
                style={{ marginTop: "var(--space-xs)" }}
              />
            </div>
            <div>
              <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
              <Textarea
                id="disabled-textarea"
                disabled
                placeholder="This textarea is disabled"
                style={{ marginTop: "var(--space-xs)" }}
              />
            </div>
          </Flex>
        </Box>
      </Section>

      {/* Checkbox */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Checkbox
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={2}>
              <Checkbox
                id="terms"
                checked={checkboxChecked}
                onCheckedChange={(checked) => setCheckboxChecked(checked === true)}
              />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </Flex>
            <Flex align="center" gap={2}>
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </Flex>
            <Flex align="center" gap={2}>
              <Checkbox id="disabled-checkbox" disabled />
              <Label htmlFor="disabled-checkbox" data-disabled>
                Disabled checkbox
              </Label>
            </Flex>
          </Flex>
        </Box>
      </Section>

      {/* Radio Group */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Radio Group
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>Select an option</Label>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <Flex align="center" gap={2}>
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">Option 1</Label>
                </Flex>
                <Flex align="center" gap={2}>
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">Option 2</Label>
                </Flex>
                <Flex align="center" gap={2}>
                  <RadioGroupItem value="option3" id="option3" />
                  <Label htmlFor="option3">Option 3</Label>
                </Flex>
              </RadioGroup>
            </div>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>Disabled Radio Group</Label>
              <RadioGroup disabled defaultValue="option1">
                <Flex align="center" gap={2}>
                  <RadioGroupItem value="option1" id="disabled-option1" />
                  <Label htmlFor="disabled-option1" data-disabled>
                    Disabled Option 1
                  </Label>
                </Flex>
                <Flex align="center" gap={2}>
                  <RadioGroupItem value="option2" id="disabled-option2" />
                  <Label htmlFor="disabled-option2" data-disabled>
                    Disabled Option 2
                  </Label>
                </Flex>
              </RadioGroup>
            </div>
          </Flex>
        </Box>
      </Section>

      {/* Combined Example */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Combined Example
        </h2>
        <Box mb={4}>
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Example form using Tier 1 components</CardDescription>
            </CardHeader>
            <CardContent>
              <Flex direction="column" gap={4}>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" style={{ marginTop: "var(--space-xs)" }} />
                </div>
                <div>
                  <Label htmlFor="email-form">Email</Label>
                  <Input id="email-form" type="email" placeholder="your@email.com" style={{ marginTop: "var(--space-xs)" }} />
                </div>
                <div>
                  <Label htmlFor="message-form">Message</Label>
                  <Textarea
                    id="message-form"
                    placeholder="Your message..."
                    style={{ marginTop: "var(--space-xs)" }}
                  />
                </div>
                <Separator />
                <Flex align="center" gap={2}>
                  <Checkbox id="privacy" />
                  <Label htmlFor="privacy">I agree to the privacy policy</Label>
                </Flex>
                <div>
                  <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>Priority</Label>
                  <RadioGroup defaultValue="normal">
                    <Flex align="center" gap={2}>
                      <RadioGroupItem value="low" id="low" />
                      <Label htmlFor="low">Low</Label>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <RadioGroupItem value="normal" id="normal" />
                      <Label htmlFor="normal">Normal</Label>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high">High</Label>
                    </Flex>
                  </RadioGroup>
                </div>
              </Flex>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="md">
                Submit
              </Button>
              <Button variant="ghost" size="md">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </Section>
    </div>
  );
}

