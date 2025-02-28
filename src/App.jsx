import { Routes, Route } from "react-router-dom";
import Spain from "./pages/Spain.jsx";
import Croatia from "./pages/Croatia.jsx";
import Lithuania from "./pages/Lithuania.jsx";
import Article from "./pages/Article";
import Navigation from "./components/Navigation";

export default function App() {
    return (
        <div className="min-h-full bg-slate-50">
            <Navigation />
            <main className="pb-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Routes>
                        <Route path="/" element={<Article />} />
                        <Route path="/spain" element={<Spain />} />
                        <Route path="/croatia" element={<Croatia />} />
                        <Route path="/lithuania" element={<Lithuania />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}
