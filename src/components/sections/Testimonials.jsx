import { MessageSquare } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import testimonialsData from "../../data/testimonials"

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="Success Stories"
          title="What Students Say"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-slate-900 rounded-3xl border border-slate-800 relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MessageSquare size={60} />
              </div>
              <p className="italic text-slate-400 mb-6">&ldquo;{t.text}&rdquo;</p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-indigo-400 text-sm font-semibold">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
