import React from "react";
import type { Page } from "../types";

interface NavbarProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
    const navStyle = (page: Page) => ({
        padding: "8px 16px",
        cursor: "pointer",
        backgroundColor: currentPage === page ? "#0070f3" : "transparent",
        color: currentPage === page ? "#fff" : "#333",
        border: "none",
        borderRadius: "4px",
        fontWeight: "bold" as const,
    });

    return (
        <nav style={{ display: "flex", gap: "10px", padding: "16px", borderBottom: "1px solid #ccc" }}>
            <button style={navStyle("home")} onClick={() => setCurrentPage("home")}>
                Home
            </button>
            <button style={navStyle("about")} onClick={() => setCurrentPage("about")}>
                About
            </button>
            <button style={navStyle("contact")} onClick={() => setCurrentPage("contact")}>
                Contact
            </button>
        </nav>
    );
};
