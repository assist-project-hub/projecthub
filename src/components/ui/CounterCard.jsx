import { useEffect, useRef } from "react"
import { CountUp } from "countup.js"
import { CheckCircle2, Clock, Users, Globe } from "lucide-react"

const ICONS = {
  completed: CheckCircle2,
  ongoing: Clock,
  students: Users,
  visitors: Globe,
}

const ICON_COLORS = {
  completed: "text-green-500",
  ongoing: "text-orange-500",
  students: "text-indigo-500",
  visitors: "text-blue-500",
}

export default function CounterCard({ value, label, suffix = "", type = "completed" }) {
  const countRef = useRef(null)
  const countUpRef = useRef(null)
  const Icon = ICONS[type] || CheckCircle2
  const colorClass = ICON_COLORS[type] || "text-indigo-500"

  useEffect(() => {
    if (!countRef.current) return
    countUpRef.current = new CountUp(countRef.current, value, {
      duration: 1.5,
      suffix,
    })
    if (!countUpRef.current.error) countUpRef.current.start()
    return () => {
      if (countUpRef.current?.reset) countUpRef.current.reset()
    }
  }, [])

  useEffect(() => {
    if (countUpRef.current && !countUpRef.current.error)
      countUpRef.current.update(value)
  }, [value])

  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner shrink-0">
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
      <div>
        <div
          ref={countRef}
          className="text-2xl font-bold text-white tabular-nums"
        >
          0
        </div>
        <div className="text-slate-500 text-sm uppercase tracking-wide">
          {label}
        </div>
      </div>
    </div>
  )
}
