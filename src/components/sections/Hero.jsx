import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

const TECH_BADGES = [
  "React",
  "Node.js",
  "Python",
  "PHP",
  "Laravel",
  "Flutter",
  "Next.js",
]

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 text-sm mb-8"
        >
          <Rocket className="w-4 h-4" />
          <span>Accelerate your CSE Final Year Project</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Final Year Software Projects <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            for CSE Students
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Expert technical support, source code, and defense preparation for
          your academic success. From MERN to AI, we&apos;ve got you covered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 text-center"
          >
            View Demo Projects
          </a>
          <a
            href="#contact"
            className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-all text-center"
          >
            Free Consultation
          </a>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-60">
          {TECH_BADGES.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-800 rounded-md text-slate-300 text-sm border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
