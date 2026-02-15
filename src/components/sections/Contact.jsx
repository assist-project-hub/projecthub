import { useState } from "react"
import axios from "axios"
import { Send, MessageSquare, CheckCircle2 } from "lucide-react"

const PROJECT_TYPES = [
  "Custom System Development",
  "Demo Project & Explanation",
  "Report & Documentation",
  "Bug Fixing / Debugging",
]

const INITIAL = {
  name: "",
  email: "",
  projectType: "Custom System Development",
  message: "",
}

// Set VITE_FORMSPREE_FORM_ID in .env: get it from https://formspree.io (create form, add your email e.g. bokhtiartoshar1@gmail.com)
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`
  : null

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSent(false)
    setError(false)

    if (!FORMSPREE_ENDPOINT) {
      setLoading(false)
      setError(true)
      return
    }

    try {
      await axios.post(FORMSPREE_ENDPOINT, formData, {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      })
      setSent(true)
      setFormData(INITIAL)
      setTimeout(() => setSent(false), 5000)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-slate-700/50 rounded-[40px] overflow-hidden p-10 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s discuss your <br />
                <span className="text-indigo-400">Project Goal</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-md">
                Ready to start? Fill out the form and our technical lead will
                reach out to you within 2 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-indigo-400">
                    <Send size={18} />
                  </div>
                  <span>assist.projecthub@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-indigo-400">
                    <MessageSquare size={18} />
                  </div>
                  <span>WhatsApp: +880 1959-540486</span>
                </div>
              </div> 
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-slate-950 border border-slate-800 text-white p-4 rounded-xl focus:outline-none focus:border-indigo-500 transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Your email (optional)"
                className="w-full bg-slate-950 border border-slate-800 text-white p-4 rounded-xl focus:outline-none focus:border-indigo-500 transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <select
                name="projectType"
                className="w-full bg-slate-950 border border-slate-800 text-slate-400 p-4 rounded-xl focus:outline-none focus:border-indigo-500 transition-all"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
              >
                {PROJECT_TYPES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your project idea..."
                rows={4}
                required
                className="w-full bg-slate-950 border border-slate-800 text-white p-4 rounded-xl focus:outline-none focus:border-indigo-500 transition-all resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              {error && (
                <p className="text-sm text-amber-400">
                  Something went wrong. Please try again later.
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {loading
                  ? "Sending..."
                  : sent
                    ? "Received! We'll get back to you soon."
                    : "Submit Request"}
                {!loading && !sent && <Send size={18} />}
                {sent && <CheckCircle2 size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
