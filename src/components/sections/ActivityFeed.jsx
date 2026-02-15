import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activity } from "lucide-react"
import activitiesData from "../../data/activities"

export default function ActivityFeed() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % activitiesData.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs"
        >
          <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5 text-indigo-400 animate-pulse" />
          </div>
          <p className="text-slate-300 text-sm leading-snug">
            {activitiesData[index]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
