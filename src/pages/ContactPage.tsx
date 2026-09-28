import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Building2,
  Navigation,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', query: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
  };

  return (
    <div className="py-8 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-blue-600" />
          <span>Campus Visit & Contact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1E36] font-heading tracking-tight">
          Connect with First Step School
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We welcome parents, guardians, and prospective students to visit our vibrant campus in Chhindwara.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-lg font-bold font-heading text-slate-900">
              Campus Headquarters
            </h3>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Campus Address</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                  {SCHOOL_INFO.address}
                </div>
                <div className="mt-2">
                  <a
                    href="https://maps.google.com/?q=Chhindwara+Madhya+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Telephone & WhatsApp</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  <a href={`tel:${SCHOOL_INFO.mobile}`} className="hover:text-blue-600 font-medium">
                    {SCHOOL_INFO.mobile}
                  </a>{' '}
                  •{' '}
                  <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-blue-600">
                    {SCHOOL_INFO.phone}
                  </a>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  WhatsApp Support Active (Mon-Sat 8am to 5pm)
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Email Enquiries</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-blue-600">
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Visiting & Office Timings</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {SCHOOL_INFO.officeHours}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Principal Visiting Hours: 10:00 AM - 1:00 PM (Prior Appointment Recommended)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
            Send a Quick Inquiry
          </h3>
          <p className="text-xs text-slate-500 mb-5">
            Leave a note and our front desk will respond right away.
          </p>

          {sent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-emerald-900">Message Delivered</h4>
              <p className="text-xs text-emerald-700">
                Thank you, {form.name}. Our staff will reach out to you shortly at {form.phone}.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-xs font-bold text-emerald-800 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Shrivastava"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Message or Question
                </label>
                <textarea
                  rows={4}
                  placeholder="Ask about school timings, syllabus, bus routes, or sports..."
                  value={form.query}
                  onChange={(e) => setForm({ ...form, query: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all min-h-[44px] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all min-h-[44px] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
