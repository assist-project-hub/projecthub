import { motion } from "framer-motion"
import { Code2, Building2, Database, TestTube, LineChart, Wrench } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { content } from "../../data/content"

const SERVICE_ICONS = [Code2, Building2, Database, TestTube, LineChart, Wrench]

const { services } = content

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle={services.subtitle}
          title={services.title}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((s, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
            <motion.div
              key={s.title}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
