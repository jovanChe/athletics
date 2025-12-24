"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  Button,
} from "../../../components/primitives";
import { CalendarDays } from "lucide-react";

export default function HoverCardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Hover Card</h1>
        <p className="text-muted-foreground">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      {/* Basic Example */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic Example</h2>
        <div className="flex items-center justify-center p-8 border rounded-lg">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar.Root>
                  <Avatar.Image src="https://github.com/vercel.png" />
                  <Avatar.Fallback>VC</Avatar.Fallback>
                </Avatar.Root>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* Text Trigger */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Text Trigger</h2>
        <div className="flex items-center justify-center p-8 border rounded-lg">
          <p className="text-sm">
            Hover over{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="underline cursor-pointer font-medium">
                  this text
                </span>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Inline Hover Card</h4>
                  <p className="text-sm text-muted-foreground">
                    Hover cards can be triggered by any element, not just buttons.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>{" "}
            to see more information.
          </p>
        </div>
      </section>

      {/* Different Alignments */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Alignment Options</h2>
        <div className="flex items-center justify-center gap-8 p-8 border rounded-lg">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline">Align Start</Button>
            </HoverCardTrigger>
            <HoverCardContent align="start">
              <p className="text-sm">Content aligned to the start</p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline">Align Center</Button>
            </HoverCardTrigger>
            <HoverCardContent align="center">
              <p className="text-sm">Content aligned to the center</p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline">Align End</Button>
            </HoverCardTrigger>
            <HoverCardContent align="end">
              <p className="text-sm">Content aligned to the end</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* With Open Delay */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Delay</h2>
        <div className="flex items-center justify-center gap-8 p-8 border rounded-lg">
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="outline">No Delay</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">Opens immediately on hover</p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={500}>
            <HoverCardTrigger asChild>
              <Button variant="outline">500ms Delay</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">Opens after 500ms delay</p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={1000}>
            <HoverCardTrigger asChild>
              <Button variant="outline">1s Delay</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">Opens after 1 second delay</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* Rich Content */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Rich Content</h2>
        <div className="flex items-center justify-center p-8 border rounded-lg">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button>View Product</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-3">
                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md" />
                <div className="space-y-1">
                  <h4 className="font-semibold">Premium Subscription</h4>
                  <p className="text-sm text-muted-foreground">
                    Get access to all features with our premium plan.
                  </p>
                  <p className="text-lg font-bold">$29/month</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>
    </div>
  );
}

