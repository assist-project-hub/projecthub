import { motion } from "framer-motion"
import { ChevronRight, ExternalLink, Play } from "lucide-react"

const MotionDiv = motion.div
import SectionTitle from "../ui/SectionTitle"
import projectsData from "../../data/projects"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  const [featured, ...rest] = projectsData

  return (
    <section id="projects" className="py-24 relative">
      {/* Distinct background – darker with soft radial glow */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Demo Software"
        />

        {/* Featured project – hero card */}
        {featured && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 group"
          >
            <a
              href={featured.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-indigo-500/50 transition-colors duration-300"
            >
              <div className="relative aspect-[21/9] overflow-hidden">
                <img
                  src={featured.imageUrl}
                  alt={featured.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/20 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {featured.name}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base max-w-2xl">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-indigo-400 font-semibold group-hover:gap-3 transition-all">
                    View demo <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-indigo-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
            </a>
          </MotionDiv>
        )}

        {/* Rest of projects – bento-style grid */}
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {rest.map((p) => (
            <MotionDiv
              key={p.id}
              variants={card}
              className="group"
            >
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {p.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] uppercase font-bold text-indigo-300/90 bg-slate-800/80 px-1.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white line-clamp-1">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <div className="p-3 border-t border-slate-800/50">
                  <span className="text-xs text-slate-500 group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                    Explore <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            </MotionDiv>
          ))}
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all font-medium"
          >
            50+ Projects, let's contact us for more details
            <ExternalLink className="w-4 h-4" />
          </a>
        </MotionDiv>
      </div>
    </section>
  )
}
