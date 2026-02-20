import SectionTitle from "../ui/SectionTitle"
import { content } from "../../data/content"

const { process } = content

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle={process.subtitle}
          title={process.title}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10" />
          {process.steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-slate-900 p-8 rounded-3xl border border-slate-800"
            >
              <div className="absolute -top-6 -left-4 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-xl shadow-indigo-600/20">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 mt-4">
                {step.title}
              </h4>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
