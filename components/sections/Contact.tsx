"use client";
import { useState, type FormEvent } from "react";
import { Mail, Globe, MessageCircle, Send, CheckCircle } from "lucide-react";

interface FormData { name: string; phone: string; email: string; message: string; }
type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm]   = useState<FormData>({ name: "", phone: "", email: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim())     e.name    = "Name is required";
    if (!form.phone.trim())    e.phone   = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
                               e.phone   = "Enter a valid 10-digit Indian mobile number";
    if (!form.email.trim())    e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                               e.email   = "Enter a valid email address";
    if (!form.message.trim())  e.message = "Message is required";
    else if (form.message.trim().length < 10)
                               e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(k: keyof FormData, v: string) {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: undefined }));
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setState("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xjgdezda", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const CONTACT_INFO = [
    {
      icon: Mail,
      label: "Email",
      value: "support@dailygroundcrew.com",
      href: "mailto:support@dailygroundcrew.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "dailygroundcrew.com",
      href: "https://dailygroundcrew.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Support",
      value: "+91 90147 •••••",
      href: "https://wa.me/919014704750?text=Hi%2C%20I%20need%20help%20with%20DailyGroundCrew",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50" aria-labelledby="contact-heading">
      <div className="container-xl">
        <div className="text-center animate-on-scroll visible">
          <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary text-sm font-semibold rounded-full mb-3">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="section-heading">Contact & Support</h2>
          <p className="section-sub">
            Have a question or need help? Our team is here for you.
            Usually responds within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">How to Reach Us</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map(info => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100
                               hover:border-primary-200 hover:shadow-card transition-all duration-200 group"
                    aria-label={`${info.label}: ${info.value}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center
                                   group-hover:bg-primary transition-colors">
                      <info.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div id="about" className="bg-gradient-brand rounded-2xl p-6 text-white space-y-3">
              <h3 className="font-bold text-xl">About DailyGroundCrew</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                DailyGroundCrew is India&apos;s trusted construction workforce platform,
                connecting contractors, builders and site managers with skilled workers
                across 50+ cities. Our mission is to make construction work faster,
                fairer and more transparent for everyone.
              </p>
              <p className="text-white/60 text-xs">
                Hyderabad, Telangana, India · © 2026 DailyGroundCrew
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>

            {state === "success" ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Message Sent!</h4>
                <p className="text-gray-500">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="btn-primary mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={e => handleChange("name", e.target.value)}
                    placeholder="Ramesh Kumar"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm
                               focus:outline-none focus:ring-2 focus:ring-secondary transition-colors
                               ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-secondary"}`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Mobile Number <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={e => handleChange("phone", e.target.value)}
                    placeholder="9876543210"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm
                               focus:outline-none focus:ring-2 focus:ring-secondary transition-colors
                               ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-secondary"}`}
                  />
                  {errors.phone && (
                    <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={e => handleChange("email", e.target.value)}
                    placeholder="ramesh@email.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm
                               focus:outline-none focus:ring-2 focus:ring-secondary transition-colors
                               ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-secondary"}`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={e => handleChange("message", e.target.value)}
                    placeholder="Tell us how we can help you..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm resize-none
                               focus:outline-none focus:ring-2 focus:ring-secondary transition-colors
                               ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-secondary"}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-busy={state === "submitting"}
                >
                  {state === "submitting" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
