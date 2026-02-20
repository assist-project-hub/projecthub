import { Globe, Layout, Cpu } from "lucide-react"
import { content } from "../../data/content"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950 text-slate-500 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
            aria-label="Globe"
          >
            <Globe size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
            aria-label="Layout"
          >
            <Layout size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
            aria-label="Cpu"
          >
            <Cpu size={20} />
          </a>
        </div>
        <p>&copy; ProjectHub. All rights reserved.</p>
        <p className="text-sm mt-2 font-mono">{content.footer.tagline}</p>
      </div>
    </footer>
  )
}
