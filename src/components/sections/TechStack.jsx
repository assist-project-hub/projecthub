import { motion } from "framer-motion"
import {
  Layout,
  Server,
  Box,
  Database,
  Wrench,
} from "lucide-react"
import SectionTitle from "../ui/SectionTitle"

const CATEGORIES = [
  {
    title: "Frontend",
    icon: Layout,
    items: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Next.js", "Tailwind", "Bootstrap"],
    accent: "from-violet-500/20 to-indigo-500/20",
    border: "border-violet-500/30",
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "PHP", "Laravel", "Python"],
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
  {
    title: "Frameworks",
    icon: Box,
    items: ["React", "Next.js", "Vue.js", "Laravel", "Express"],
    accent: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    accent: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "VS Code", "Figma", "Postman", "Vite"],
    accent: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/30",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Distinct background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="Tech Stack"
          title="Technologies We Use"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon
            const isWide = i === 0
            return (
              <motion.div
                key={cat.title}
                variants={item}
                className={isWide ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div
                  className={`h-full p-5 rounded-2xl bg-slate-900/80 backdrop-blur-sm border ${cat.border} bg-gradient-to-br ${cat.accent} hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-300" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
