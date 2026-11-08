import { useState, useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import type { Page } from "./types";

export function App() {
    const [currentPage, setCurrentPage] = useState<Page>("home");

    // Integrasi sederhana dengan browser History API (agar tombol Back/Forward browser berfungsi)
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (event.state?.page) {
                setCurrentPage(event.state.page);
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    const navigateTo = (page: Page) => {
        setCurrentPage(page);
        window.history.pushState({ page }, "", `/#${page}`);
    };

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <Home />;
            case "about":
                return <About />;
            case "contact":
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div style={{ fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
            <Navbar currentPage={currentPage} setCurrentPage={navigateTo} />
            <main style={{ padding: "20px" }}>{renderPage()}</main>
        </div>
    );
}

export default App;
