import SectionTitle from "../ui/SectionTitle"

export default function About() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="About Us"
          title="We Help CSE Students Succeed"
        />
        <p className="text-slate-400 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          We help CSE and Software Engineering students turn their final year
          project ideas into working software. From full-stack web and mobile
          apps to databases and APIs, we provide development support, debugging,
          documentation, and defense preparation—so you can submit on time and
          present with confidence. Our focus is on clean code, clear
          explanations, and university-ready deliverables.
        </p>
      </div>
    </section>
  )
}
