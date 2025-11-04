import { useState } from 'react';

const cases = [
  {
    title: 'Urban Dental | 3-location DSO',
    summary: '+41% completed hygiene visits, −28% no-show rate, 2.3× productivity',
    details:
      'Scaled inbound handling with AI receptionist, automated 6-month recalls, and smart overbooking to reduce empty chair time. Integrated eligibility checks reduced front-desk load.'
  },
  {
    title: 'BrightSmile Pediatrics',
    summary:
      'Insurance checks cut from 7 min → 90 sec, 24/7 call capture (96% CSAT), +$38k production',
    details:
      'Automated eligibility verification and pre-auth workflows. After-hours intake captured 24/7 with high satisfaction scores and improved scheduling density.'
  },
  {
    title: 'OrthoPlus Aligners',
    summary:
      '+52% lead-to-start conversion, automated braces tighten reminders, full HIPAA audit trail',
    details:
      'Lead nurturing sequences increased booked consults. Automated reminders reduced late reschedules. Audit logs ensured compliance across all interactions.'
  }
];

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="cases" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold md:text-4xl">Case Studies</h2>
        <p className="mt-3 text-black/70 md:text-lg">
          Measurable outcomes from real clinics powered by Velodent.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cases.map((cs, idx) => (
          <div key={cs.title} className="rounded-2xl border border-black/10 p-6">
            <h3 className="text-lg font-medium">{cs.title}</h3>
            <p className="mt-2 text-sm text-black/70">{cs.summary}</p>
            <button
              onClick={() => setOpenIndex(idx)}
              className="mt-4 inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-sm font-medium hover:bg-black/5"
            >
              Read More →
            </button>

            {openIndex === idx && (
              <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4" onClick={() => setOpenIndex(null)}>
                <div className="max-w-lg rounded-2xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h4 className="text-lg font-semibold">{cs.title}</h4>
                      <p className="mt-2 text-sm text-black/70">{cs.summary}</p>
                    </div>
                    <button className="text-sm underline" onClick={() => setOpenIndex(null)}>
                      Close
                    </button>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-black/80">{cs.details}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
