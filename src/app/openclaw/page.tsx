import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Calendar, Database, BarChart3, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "OpenClaw GTM Skills - Research. Write. Send. Book. Track.",
  description:
    "Complete GTM toolkit for OpenClaw. Enrich prospects, generate emails, send, book meetings, log to CRM — all from one command.",
  openGraph: {
    title: "OpenClaw GTM Skills",
    description: "Research. Write. Send. Book. Track.",
    url: "https://gtm-skills.com/openclaw",
  },
};

export default function OpenClawPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-4xl">🦞</div>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Research. Write. Send. Book. Track.
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg text-zinc-400">
              Complete GTM toolkit for OpenClaw.
            </p>

            <div className="mx-auto max-w-md rounded-xl border border-orange-500/30 bg-zinc-900 p-5">
              <code className="block text-lg text-orange-400 font-mono">
                npx clawdhub install gtm-skills/gtm
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* The Full Flow */}
      <section className="py-12 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-white text-center">The Full Flow</h2>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="border-b border-zinc-800 bg-zinc-900 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-zinc-500 ml-2">OpenClaw</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-4">
              <div>
                <span className="text-zinc-500">You:</span>{" "}
                <span className="text-white">gtm prospect Sarah Chen at Acme Corp</span>
              </div>

              <div className="border-l-2 border-orange-500/50 pl-4 space-y-3">
                <div className="text-orange-400 text-xs">🔍 ENRICHING...</div>
                <div className="text-zinc-300">
                  <div className="font-semibold">Sarah Chen | VP of Sales | Acme Corp</div>
                  <div className="text-zinc-500 text-xs mt-1">
                    📧 sarah.chen@acme.com • 🔗 linkedin.com/in/sarachen
                  </div>
                  <div className="text-zinc-400 text-xs mt-2">
                    • Series B, $25M raised, 80 employees<br />
                    • Hiring: 5 SDRs this week<br />
                    • Tech: Salesforce, Outreach, Gong
                  </div>
                </div>

                <div className="text-orange-400 text-xs mt-4">📧 DRAFT READY:</div>
                <div className="text-zinc-300 bg-black/50 rounded p-3">
                  <div className="text-zinc-400 text-xs mb-2">Subject: SDR ramp time</div>
                  Sarah - saw you&apos;re hiring 5 SDRs.<br /><br />
                  Question: how are you thinking about ramp time as you scale?<br /><br />
                  We helped Datadog cut theirs from 6 months to 3.<br /><br />
                  15 min to see if relevant?<br />
                  <span className="text-orange-400">→ calendly.com/you/15min</span>
                </div>

                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded">Send Now</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded border border-zinc-700">Edit</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded border border-zinc-700">Schedule</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded border border-zinc-700">Log to CRM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 border-b border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Database, title: "Enrich", desc: "Apollo, Clay, Clearbit", cmd: "gtm enrich [person]" },
              { icon: Mail, title: "Generate", desc: "Emails, LinkedIn, calls", cmd: "gtm email [person]" },
              { icon: Send, title: "Send", desc: "Gmail, Outlook", cmd: "gtm send" },
              { icon: Calendar, title: "Book", desc: "Calendly, Cal.com", cmd: "gtm book" },
              { icon: BarChart3, title: "Track", desc: "HubSpot, Salesforce", cmd: "gtm log [activity]" },
              { icon: Clock, title: "Remind", desc: "Follow-up reminders", cmd: "gtm remind in 3 days" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-zinc-800 bg-black p-4">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="h-5 w-5 text-orange-400" />
                  <span className="font-semibold text-white">{item.title}</span>
                  <span className="text-xs text-zinc-500">{item.desc}</span>
                </div>
                <code className="text-xs text-orange-400 font-mono">{item.cmd}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands */}
      <section className="py-12 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-white text-center">Commands</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 mb-3">Generate</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-orange-400">gtm email</div>
                <div className="text-orange-400">gtm reply</div>
                <div className="text-orange-400">gtm questions</div>
                <div className="text-orange-400">gtm linkedin</div>
                <div className="text-orange-400">gtm prep</div>
                <div className="text-orange-400">gtm call</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-400 mb-3">Research</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-orange-400">gtm enrich</div>
                <div className="text-orange-400">gtm research</div>
                <div className="text-orange-400">gtm signals</div>
                <div className="text-orange-400">gtm battlecard</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-400 mb-3">Execute</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-orange-400">gtm send</div>
                <div className="text-orange-400">gtm book</div>
                <div className="text-orange-400">gtm log</div>
                <div className="text-orange-400">gtm remind</div>
                <div className="text-orange-400">gtm track</div>
                <div className="text-orange-400">gtm pipeline</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h3 className="text-sm font-semibold text-white mb-3">Combo Commands</h3>
            <div className="space-y-2 font-mono text-sm">
              <div>
                <span className="text-orange-400">gtm prospect [person] at [company]</span>
                <span className="text-zinc-500 ml-3"># Enrich → Draft → Ready to send</span>
              </div>
              <div>
                <span className="text-orange-400">gtm followup [person]</span>
                <span className="text-zinc-500 ml-3"># Check history → Draft → Send</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="py-12 border-b border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-white text-center">Setup</h2>

          <div className="rounded-lg border border-zinc-800 bg-black p-4 font-mono text-sm space-y-4">
            <div>
              <div className="text-zinc-500"># Enrichment (pick one)</div>
              <div className="text-orange-400">export APOLLO_API_KEY=your_key</div>
              <div className="text-orange-400">export CLAY_API_KEY=your_key</div>
            </div>

            <div>
              <div className="text-zinc-500"># Booking</div>
              <div className="text-orange-400">export CALENDLY_URL=calendly.com/you/15min</div>
            </div>

            <div>
              <div className="text-zinc-500"># CRM</div>
              <div className="text-orange-400">export HUBSPOT_API_KEY=your_key</div>
            </div>

            <div>
              <div className="text-zinc-500"># Email sending</div>
              <div className="text-orange-400">export GMAIL_ENABLED=true</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tonalities */}
      <section className="py-12 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-white text-center">Tonalities</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { flag: "--direct", desc: "No fluff (default)" },
              { flag: "--blunt", desc: "Shortest possible" },
              { flag: "--challenger", desc: "Push back, teach" },
              { flag: "--exec", desc: "C-suite brevity" },
              { flag: "--friendly", desc: "Add warmth" },
            ].map((t) => (
              <div key={t.flag} className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm">
                <code className="text-orange-400">{t.flag}</code>
                <span className="text-zinc-500 ml-2">{t.desc}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800 bg-black overflow-hidden">
              <div className="border-b border-zinc-800 bg-zinc-900 px-4 py-2">
                <span className="text-white font-semibold">Direct</span>
                <span className="text-zinc-500 text-xs ml-2">(default)</span>
              </div>
              <pre className="p-4 text-sm text-zinc-300 font-mono whitespace-pre-wrap">
{`Subject: Sales cycles

Sarah - saw the Series B.

How are you handling longer sales cycles as you scale?

We helped Datadog cut theirs by 30%.

15 min to see if relevant?`}
              </pre>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-black overflow-hidden">
              <div className="border-b border-zinc-800 bg-zinc-900 px-4 py-2">
                <span className="text-white font-semibold">Blunt</span>
              </div>
              <pre className="p-4 text-sm text-zinc-300 font-mono whitespace-pre-wrap">
{`Subject: Quick question

Sarah - are slow sales cycles costing you deals?

If yes, let's talk. If no, ignore this.`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-xl border border-orange-500/30 bg-zinc-900 p-6 mb-6">
            <code className="block text-lg text-orange-400 font-mono">
              npx clawdhub install gtm-skills/gtm
            </code>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Prospeda/gtm-skills/tree/main/openclaw-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 border border-zinc-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Browse prompts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
