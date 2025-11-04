import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const BookingButton = ({ className = '' }) => (
  <a
    href="https://cal.com/velodent-ogbkfv/20min"
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/20 ${className}`}
  >
    Book Now
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
);

export default function HeaderHero() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="relative">
      {/* Nav */}
      <div className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:py-7">
          {/* Brand */}
          <div className="flex items-center">
            <a href="#home" className="block select-none leading-none" aria-label="Velodent Home">
              <span className="text-2xl font-semibold tracking-tight md:text-3xl">Velodent</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-[15px] font-medium hover:opacity-70">Home</a>
            <a href="#about" className="text-[15px] font-medium hover:opacity-70">About</a>
            <a href="#services" className="text-[15px] font-medium hover:opacity-70">Services</a>
            <a href="#cases" className="text-[15px] font-medium hover:opacity-70">Case Studies</a>
            <a href="#testimonials" className="text-[15px] font-medium hover:opacity-70">Testimonials</a>
            <a href="#faq" className="text-[15px] font-medium hover:opacity-70">FAQ</a>
            <a href="#dashboard" className="text-[15px] font-medium hover:opacity-70">Dashboard</a>
          </nav>

          {/* CTA (Desktop) */}
          <div className="hidden md:block">
            <BookingButton />
          </div>

          {/* Mobile Toggle */}
          <button
            className="inline-flex items-center justify-center rounded-md border border-black/10 px-3 py-2 md:hidden"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="text-sm font-medium">Menu</span>
          </button>
        </div>
        {navOpen && (
          <div className="mx-auto block max-w-7xl px-4 pb-5 md:hidden">
            <div className="flex flex-col gap-2">
              <a href="#home" className="rounded-md px-3 py-2 hover:bg-black/5" onClick={() => setNavOpen(false)}>Home</a>
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-black/5" onClick={() => setNavOpen(false)}>About</a>
              <a href="#services" className="rounded-md px-3 py-2 hover:bg-black/5" onClick={() => setNavOpen(false)}>Services</a>
              <a href="#cases" className="rounded-md px-3 py-2 hover:bg-black/5" onClick={() => setNavOpen(false)}>Case Studies</a>
              <a href="#testimonials" className="rounded-md px-3 py-2 hover:bg-black/5" onClick={() => setNavOpen(false)}>Testimonials</a>
              <a href="#faq" className="rounded-md px-3 py-2 hover:bg-black/5" onClick={() => setNavOpen(false)}>FAQ</a>
              <a href="#dashboard" className="rounded-md px-3 py-2 hover:bg-black/5" onClick={() => setNavOpen(false)}>Dashboard</a>
              <BookingButton className="mt-2 w-full justify-center" />
            </div>
          </div>
        )}
      </div>

      {/* Hero */}
      <section id="home" className="relative mx-auto max-w-7xl px-4 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              AI Automation for Modern Dental Clinics
            </h1>
            <p className="mt-4 text-base text-black/70 md:text-lg">
              Velodent streamlines front-desk ops, patient onboarding, and recall systems using safe, compliant AI.
            </p>

            {/* Video and booking copy */}
            <div className="mt-8 space-y-4">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-black/10">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Nw478YoO3og?si=Tlq4mQe0x2RlSpPJ&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=Nw478YoO3og"
                  title="Velodent Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-sm text-black/70">
                  Book a 20-Minute Discovery Call — Choose a Time That Works for You
                </p>
                <BookingButton className="mt-3" />
              </div>
            </div>

            {/* Short blurb */}
            <div className="mt-10 rounded-xl border border-black/10 p-6">
              <h3 className="text-lg font-medium">Built for high-performing dental teams</h3>
              <p className="mt-2 text-black/70">
                We automate front desk workflows end-to-end — from first contact to post-visit follow-ups. Our AI receptionist answers, schedules, verifies insurance, and keeps your calendar fully optimized. Privacy-first by design.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg border border-black/10 p-4">
                  <div className="text-2xl font-semibold">2×</div>
                  <div className="text-xs text-black/60">Efficiency ROI</div>
                </div>
                <div className="rounded-lg border border-black/10 p-4">
                  <div className="text-2xl font-semibold">24/7</div>
                  <div className="text-xs text-black/60">Coverage</div>
                </div>
                <div className="rounded-lg border border-black/10 p-4">
                  <div className="text-2xl font-semibold">99.9%</div>
                  <div className="text-xs text-black/60">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Spline animation */}
          <div className="order-1 h-[440px] w-full md:order-2 md:h-[620px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-black/10">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_70%,rgba(255,255,255,0.7)_100%)]" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
