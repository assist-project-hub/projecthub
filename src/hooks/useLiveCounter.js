import { useState, useEffect } from "react"

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function useLiveCounter() {
  const [completed, setCompleted] = useState(120)
  const [ongoing, setOngoing] = useState(() => randomBetween(50, 60))
  const [students, setStudents] = useState(80)
  const [todayVisitors, setTodayVisitors] = useState(() => randomBetween(10, 50))

  useEffect(() => {
    const completedInterval = setInterval(() => {
      setCompleted((c) => c + 1)
    }, randomBetween(30000, 60000))

    const studentsInterval = setInterval(() => {
      setStudents((s) => s + randomBetween(1, 2))
    }, randomBetween(45000, 90000))

    const ongoingInterval = setInterval(() => {
      setOngoing(randomBetween(50, 60))
    }, 20000)

    return () => {
      clearInterval(completedInterval)
      clearInterval(studentsInterval)
      clearInterval(ongoingInterval)
    }
  }, [])

  return { completed, ongoing, students, todayVisitors }
}
