import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Contact } from "@/sections/Contact";
import { ChartColumnStacked } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Contact />
      </main>
    </div>
  )
}

export default App;