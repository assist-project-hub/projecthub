import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { content } from "../../data/content"

const { commitment, mission, vision } = content

export default function CommitmentMissionVision() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        {/* Our Commitment */}
        <div className="mb-16">
          <SectionTitle
            subtitle={commitment.subtitle}
            title={commitment.intro}
          />
          <ul className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {commitment.bullets.map((bullet, i) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-slate-300"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Our Mission */}
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <SectionTitle
            subtitle=""
            title={mission.subtitle}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            {mission.text}
          </motion.p>
        </div>

        {/* Our Vision */}
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            subtitle=""
            title={vision.subtitle}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            {vision.text}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
