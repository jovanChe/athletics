import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../../../components/primitives/resizable";

export default function ResizablePage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "2rem" }}>Resizable Component</h1>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Horizontal Layout</h2>
      <ResizablePanelGroup
        direction="horizontal"
        style={{
          maxWidth: "800px",
          height: "200px",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)"
        }}
      >
        <ResizablePanel defaultSize={50}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "1rem" }}>
            <span style={{ fontWeight: "600" }}>Panel One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "1rem" }}>
            <span style={{ fontWeight: "600" }}>Panel Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Nested Layout</h2>
      <ResizablePanelGroup
        direction="horizontal"
        style={{
          maxWidth: "800px",
          height: "400px",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)"
        }}
      >
        <ResizablePanel defaultSize={50}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "1rem" }}>
            <span style={{ fontWeight: "600" }}>Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "1rem" }}>
                <span style={{ fontWeight: "600" }}>Header</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "1rem" }}>
                <span style={{ fontWeight: "600" }}>Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Features</h2>
        <ul>
          <li>Built with react-resizable-panels</li>
          <li>Horizontal and vertical layouts</li>
          <li>Nested panel groups</li>
          <li>Optional drag handles</li>
          <li>Keyboard accessible</li>
          <li>Persists panel sizes</li>
        </ul>
      </div>
    </div>
  );
}

