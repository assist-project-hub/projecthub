import SectionTitle from "../ui/SectionTitle"
import { content } from "../../data/content"

const { about } = content

export default function About() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle={about.subtitle} title={about.title} />
        <div className="text-slate-400 text-lg max-w-3xl mx-auto text-center leading-relaxed space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
