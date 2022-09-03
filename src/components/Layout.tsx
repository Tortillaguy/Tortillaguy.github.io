import Navbar from "./Navbar";
import * as React from "react";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
