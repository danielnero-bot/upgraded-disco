export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a", // refined modern slate-navy
        primary: "#2563eb",
        amber: "#2563eb", // seamlessly map old amber usages to clean modern blue
        "amber-foreground": "#2563eb",
        slate: "#64748b",
        warm: "#FFFFFF",
      },
      fontFamily: {
        display: ["Inter", "Archivo", "system-ui", "sans-serif"],
        body: ["Inter", "IBM Plex Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -2px rgba(0, 0, 0, 0.04)",
        hover: "0 10px 25px -5px rgba(37, 99, 235, 0.08), 0 8px 10px -6px rgba(37, 99, 235, 0.04)",
      },
    },
  },
  plugins: [],
};
