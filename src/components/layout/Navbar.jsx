import { useState, useEffect } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const SECTIONS = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#howitworks" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <Terminal className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            ProjectHub
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {SECTIONS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-slate-100 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {SECTIONS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 text-lg hover:text-indigo-400"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-indigo-400 font-semibold"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
