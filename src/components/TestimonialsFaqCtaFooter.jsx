import { useState } from 'react';

const testimonials = [
  {
    name: 'Dr. Elena Park',
    role: 'Owner, Urban Dental',
    quote:
      'Our no-shows dropped dramatically and our hygienists are fully booked. It feels like we hired two rockstar coordinators overnight.'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director, 3-location DSO',
    quote:
      'Insurance verification time shrank to seconds. The team focuses on patients, not portals. The ROI was immediate.'
  },
  {
    name: 'Dr. Sara Patel',
    role: 'Pediatric Specialist',
    quote:
      'Parents can book anytime, and the AI follows up politely. Our patient satisfaction scores are the highest ever.'
  },
  {
    name: 'Jasmine Liu',
    role: 'Front Desk Lead',
    quote:
      'Calls are triaged beautifully. The system hands off tricky cases and keeps our calendar perfectly organized.'
  },
  {
    name: 'Daniel Ramirez',
    role: 'Practice Manager',
    quote:
      'We revived hundreds of inactive patients. The automation is respectful and compliant—very impressed.'
  },
  {
    name: 'Dr. Noah Williams',
    role: 'Orthodontist',
    quote:
      'Reminders and follow-ups run like clockwork. We finally have an audit trail that legal actually loves.'
  }
];

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most clinics go live in 7–14 days. We handle integrations, training, and compliance checks end-to-end.'
  },
  {
    q: "What’s included in my subscription?",
    a: 'Full access to the AI receptionist, appointment & recall engine, insurance verification workflows, analytics dashboard, and priority support.'
  },
  {
    q: 'Is Velodent HIPAA-compliant?',
    a: 'Yes. We maintain HIPAA-compliant infrastructure, sign BAAs, and provide audit logs for all PHI interactions.'
  },
  {
    q: 'How does AI handle patient data securely?',
    a: 'Data is encrypted in transit and at rest. Access is role-based with strict logging, and only minimum necessary data is processed.'
  },
  {
    q: 'What if my team needs training?',
    a: 'We include live onboarding, recorded sessions, and an adoption checklist so staff is confident from day one.'
  },
  {
    q: 'Can we customize the workflows to our practice?',
    a: 'Absolutely. We tailor intake, scheduling rules, messaging tone, and escalation paths to your preferences.'
  }
];

export default function TestimonialsFaqCtaFooter() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">What Our Clients Say</h2>
          <p className="mt-3 text-black/70 md:text-lg">Authentic feedback from practices we power every day.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/10 p-6 transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs">
                Verified Client
              </div>
              <p className="text-sm leading-relaxed text-black/80">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium">{t.name}</div>
              <div className="text-xs text-black/60">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-black/10 rounded-2xl border border-black/10">
          {faqs.map((f, i) => (
            <div key={f.q} className="p-5">
              <button
                onClick={() => setOpen((prev) => (prev === i ? -1 : i))}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={open === i}
              >
                <span className="text-base font-medium">{f.q}</span>
                <span className="ml-4 text-xl">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="mt-3 text-sm text-black/70">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="rounded-3xl border border-black/10 p-8 text-center md:p-12">
          <h3 className="text-2xl font-semibold md:text-4xl">Schedule a Private Demo or Strategy Call</h3>
          <p className="mx-auto mt-3 max-w-2xl text-black/70 md:text-lg">
            Pick a time that fits your day. We’ll map your automation blueprint.
          </p>
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90"
          >
            Open Booking →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:text-left">
          <div className="text-sm text-black/60">© 2025 Velodent. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:Velodent.ia@gmail.com" className="hover:underline">Velodent.ia@gmail.com</a>
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 px-4 py-2 font-medium hover:bg-black/5"
            >
              Book Now
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
