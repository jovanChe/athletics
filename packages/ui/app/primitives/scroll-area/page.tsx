"use client";

import { ScrollArea, ScrollBar } from "../../../components/primitives";
import { Separator } from "../../../components/primitives";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Tag ${a.length - i}`
);

const artworks = [
  { title: "Abstract Horizon", artist: "Maria Chen" },
  { title: "Neon Dreams", artist: "James Wright" },
  { title: "Ocean Depths", artist: "Sofia Patel" },
  { title: "Mountain Vista", artist: "Carlos Rivera" },
  { title: "Urban Jungle", artist: "Emma Thompson" },
  { title: "Desert Sunset", artist: "Ali Hassan" },
  { title: "Forest Whispers", artist: "Yuki Tanaka" },
  { title: "City Lights", artist: "David Kim" },
];

export default function ScrollAreaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Scroll Area</h1>
        <p className="text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>

      {/* Vertical Scroll */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Vertical Scroll</h2>
        <div className="flex items-start justify-center p-8 border rounded-lg">
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* Horizontal Scroll */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Horizontal Scroll</h2>
        <div className="p-8 border rounded-lg">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {artworks.map((artwork) => (
                <figure key={artwork.title} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <div
                      className="h-[150px] w-[250px] bg-gradient-to-br from-blue-500 to-purple-600"
                      style={{
                        background: `hsl(${Math.random() * 360}, 70%, 50%)`,
                      }}
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {artwork.title}
                    </span>
                    <br />
                    {artwork.artist}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Both Scrollbars */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Both Directions</h2>
        <div className="flex items-start justify-center p-8 border rounded-lg">
          <ScrollArea className="h-[300px] w-[400px] rounded-md border p-4">
            <div className="w-[600px]">
              <h4 className="mb-4 text-lg font-medium">Large Content Area</h4>
              <p className="mb-4">
                This content area is larger than the scroll container in both
                directions. You can scroll both horizontally and vertically to
                see all the content.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-24 rounded-md flex items-center justify-center text-white font-medium"
                    style={{
                      background: `hsl(${i * 30}, 70%, 50%)`,
                    }}
                  >
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </div>
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">In a Card</h2>
        <div className="flex items-start justify-center p-8 border rounded-lg">
          <div className="w-80 rounded-lg border bg-card shadow-sm">
            <div className="p-4 border-b">
              <h4 className="font-semibold">Notifications</h4>
              <p className="text-sm text-muted-foreground">
                You have 12 unread messages.
              </p>
            </div>
            <ScrollArea className="h-[200px]">
              <div className="p-4 space-y-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">User {i + 1}</p>
                      <p className="text-xs text-muted-foreground">
                        Sent you a message {i + 1} hour{i !== 0 ? "s" : ""} ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>
    </div>
  );
}

