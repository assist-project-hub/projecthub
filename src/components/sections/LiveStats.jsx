import { useLiveCounter } from "../../hooks/useLiveCounter"
import CounterCard from "../ui/CounterCard"

export default function LiveStats() {
  const { completed, ongoing, students, todayVisitors } = useLiveCounter()

  return (
    <section
      id="livestats"
      className="py-12 bg-slate-900/50 border-y border-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterCard
            value={completed}
            label="Completed Projects"
            type="completed"
          />
          <CounterCard
            value={ongoing}
            label="Ongoing Projects"
            type="ongoing"
          />
          <CounterCard
            value={students}
            label="Students Guided"
            type="students"
          />
          <CounterCard
            value={todayVisitors}
            label="Today's Visitors"
            type="visitors"
          />
        </div>
      </div>
    </section>
  )
}
