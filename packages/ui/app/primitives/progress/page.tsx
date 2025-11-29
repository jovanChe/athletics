"use client";

import React, { useState, useEffect } from "react";
import { Box, Section, Progress } from "../../../src";

export default function ProgressPage() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Progress</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Progress indicator component for uploads, form completion, and loading states.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Progress
        </h2>
        <Box mb={4} style={{ width: "60%" }}>
          <Progress value={progress} />
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Different Values
        </h2>
        <Box mb={4} style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", width: "60%" }}>
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </Box>
      </Section>
    </div>
  );
}
