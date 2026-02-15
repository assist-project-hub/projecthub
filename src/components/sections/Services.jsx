import { motion } from "framer-motion"
import { Layout, Database, Shield, MessageSquare, BookOpen, Lightbulb } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"

const SERVICES = [
  {
    icon: Layout,
    title: "Full System Development",
    desc: "End-to-end software development including frontend, backend, and database.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    desc: "Relational (MySQL/PostgreSQL) and NoSQL (MongoDB) schema design.",
  },
  {
    icon: Shield,
    title: "Bug Fixing & Security",
    desc: "Identifying vulnerabilities and fixing logical errors in existing systems.",
  },
  {
    icon: MessageSquare,
    title: "Defense Preparation",
    desc: "Mock presentations and technical explanation sessions for project viva.",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "SRS, user manual, and technical documentation tailored to university requirements.",
  },
  {
    icon: Lightbulb,
    title: "Idea & Planning",
    desc: "From topic selection to system design and timeline—we help you plan a feasible project.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="Our Expertise"
          title="Tailored Support for Your Project"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
