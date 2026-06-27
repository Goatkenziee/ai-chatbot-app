export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      padding: "2rem",
      textAlign: "center",
      background: "#07070a",
      color: "#f8f8fa",
      fontFamily: "Inter, system-ui, sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, fontSize: "1.125rem" }}>
        <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#8b5cf6" }} />
        App
      </div>
      <h1 style={{ fontSize: "4rem", fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>404</h1>
      <p style={{ maxWidth: "28rem", color: "#a1a1aa", margin: 0 }}>
        This page doesn&apos;t exist or was removed.
      </p>
      <a href="/" style={{
        display: "inline-flex",
        height: "2.75rem",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem",
        padding: "0 1.5rem",
        fontSize: "0.875rem",
        fontWeight: 500,
        background: "#8b5cf6",
        color: "#fff",
        textDecoration: "none",
      }}>
        Go home
      </a>
    </div>
  );
}
