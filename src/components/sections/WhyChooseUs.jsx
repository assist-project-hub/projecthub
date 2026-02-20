import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { content } from "../../data/content"

const { whyChooseUs } = content

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle={whyChooseUs.subtitle}
          title={whyChooseUs.title}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChooseUs.points.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 bg-slate-900 border border-slate-800 rounded-2xl"
            >
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
