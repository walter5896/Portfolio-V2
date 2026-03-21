import { Phone, MessageSquareText, Mail, Linkedin } from "lucide-react";

function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl mb-12">
          <p className="inline-block text-sm uppercase tracking-[0.2em] text-violet-300 border border-violet-400/20 bg-violet-500/10 px-4 py-2 rounded-full mb-6">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Let’s connect
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Whether it’s a project, collaboration, internship opportunity, or
            just a conversation about development, feel free to reach out.
          </p>
        </div>

        <div className="grid gap-6">
          <a
            href="tel:3854970940"
            className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl hover:bg-white/10 transition-colors"
          >
            <div className="rounded-2xl bg-violet-500/15 p-4 border border-violet-400/20">
              <Phone className="text-violet-300" size={26} />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Call</p>
              <p className="text-xl font-semibold text-white">(385) 497-0940</p>
            </div>
          </a>

          <a
            href="sms:3854970940"
            className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl hover:bg-white/10 transition-colors"
          >
            <div className="rounded-2xl bg-cyan-500/15 p-4 border border-cyan-400/20">
              <MessageSquareText className="text-cyan-300" size={26} />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Text</p>
              <p className="text-xl font-semibold text-white">(385) 497-0940</p>
            </div>
          </a>

          <a
            href="mailto:10952397@uvu.edu"
            className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl hover:bg-white/10 transition-colors"
          >
            <div className="rounded-2xl bg-emerald-500/15 p-4 border border-emerald-400/20">
              <Mail className="text-emerald-300" size={26} />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">UVU Email</p>
              <p className="text-xl font-semibold text-white break-all">
                10952397@uvu.edu
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/walter-blundell-82a0a81b9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl hover:bg-white/10 transition-colors"
          >
            <div className="rounded-2xl bg-sky-500/15 p-4 border border-sky-400/20">
              <Linkedin className="text-sky-300" size={26} />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
              <p className="text-xl font-semibold text-white">
                linkedin.com/in/walter-blundell-82a0a81b9
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;