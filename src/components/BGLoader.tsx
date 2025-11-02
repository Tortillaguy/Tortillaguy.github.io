import { useEffect, useState } from "react";

// Dynamically import the heavy BG component
const BG = () => import("./BG");

export default function BGLoader() {
  const [BGComponent, setBGComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Wait for page to be interactive before loading heavy component
    const loadBG = async () => {
      try {
        const module = await BG();
        setBGComponent(() => module.default);

        // Add class to body to trigger skeleton fade out
        document.body.classList.add('bg-loaded');
      } catch (error) {
        console.error('Failed to load background:', error);
      }
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    // This ensures BG loads after critical content is rendered
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadBG, { timeout: 2000 });
    } else {
      setTimeout(loadBG, 1000);
    }
  }, []);

  // Render the BG component if loaded, otherwise return empty div (skeleton shows)
  // Must return a valid element for SSR compatibility
  return BGComponent ? <BGComponent /> : <div />;
}
