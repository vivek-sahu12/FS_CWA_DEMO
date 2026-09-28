import React, { useState } from 'react';
import { ADMISSION_CRITERIA, SCHOOL_INFO } from '../data/schoolData';
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  FileCheck,
  Send,
  MessageSquare,
  Phone,
  HelpCircle,
  Clock,
  AlertCircle,
  FileText,
  UserCheck,
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    classApplying: 'Nursery',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Documents checklist state
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const requiredDocuments = [
    'Original Birth Certificate (for Nursery to 1st) with municipal verification',
    'Previous School Transfer Certificate (TC) counter-signed by competent authority',
    'Report Card / Marksheet of the qualifying previous academic year',
    'Passport-size photographs of Student (6 copies) and Parents (2 copies each)',
    'Aadhar Card copy of Student and both Parents',
    'Caste / Category Certificate (if applicable for state scholarship records)',
    'Immunization & Blood Group Medical Fitness Certificate',
  ];

  const admissionSteps = [
    {
      step: '01',
      title: 'Registration & Inquiry',
      desc: 'Submit the digital enquiry form below or collect the admission kit from our Chhindwara campus reception.',
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      step: '02',
      title: 'Interaction & Assessment',
      desc: 'Informal student-parent interaction for pre-primary; basic diagnostic aptitude test for classes 1st to 12th.',
      icon: <UserCheck className="w-5 h-5 text-indigo-600" />,
    },
    {
      step: '03',
      title: 'Document Verification',
      desc: 'Submission and verification of birth certificate/TC, previous marksheet, and student identity documents.',
      icon: <FileCheck className="w-5 h-5 text-amber-600" />,
    },
    {
      step: '04',
      title: 'Admission Confirmation',
      desc: 'Fee deposit, issuance of scholar roll number, syllabus kit, school uniform details, and bus allotment.',
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
    },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent / Guardian name is required';
    }
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppSend = () => {
    if (!validate()) return;

    const text = `*New Admission Enquiry - First Step School*\n\n` +
      `*Parent Name:* ${formData.parentName}\n` +
      `*Student Name:* ${formData.studentName}\n` +
      `*Class Applying For:* ${formData.classApplying}\n` +
      `*Phone:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      (formData.message ? `*Notes:* ${formData.message}\n` : '') +
      `\nSent via First Step School Website`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${SCHOOL_INFO.whatsapp.replace('+', '')}?text=${encoded}`;
    window.open(waUrl, '_blank');
  };

  const toggleDoc = (index: number) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="py-8 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto space-y-14 animate-in fade-in duration-300">
      {/* Page Title & Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
          <span>Academic Session 2026-27</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1E36] font-heading tracking-tight">
          Admissions Open: Nursery to 12th Grade
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Take the first step toward a bright future. Join First Step Higher Secondary School in Chhindwara. Transparent process, merit-based entry, and supportive counseling.
        </p>
      </div>

      {/* Class Eligibility & Age Criteria Matrix */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              Classes Open & Age Eligibility Criteria
            </h2>
            <p className="text-xs text-slate-500">
              Age reference as on 31st March of the admission academic year
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full font-semibold self-start sm:self-auto">
            <Clock className="w-3.5 h-3.5" />
            <span>Registration Open</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADMISSION_CRITERIA.map((crit, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {crit.stage}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-1">
                  {crit.classes}
                </h3>
                <div className="text-xs font-bold text-amber-700 mb-2">
                  Age: {crit.ageRange}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {crit.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step by Step Admission Process */}
      <section className="bg-slate-50/70 p-6 sm:p-10 rounded-3xl border border-slate-100 space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Simple 4-Step Journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E36] font-heading">
            How The Admission Process Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            We ensure an empathetic, hassle-free admission experience for students and parents alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {admissionSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm relative group hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-2xl font-black font-heading text-slate-200 group-hover:text-blue-200 transition-colors">
                  {step.step}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-heading mb-1">
                {step.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Two Column Section: Documents Checklist & Enquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Documents Checklist Column */}
        <section className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-slate-900">
                Documents Required
              </h3>
              <p className="text-xs text-slate-500">
                Tap items to mark off your checklist
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            {requiredDocuments.map((doc, idx) => {
              const isChecked = !!checkedDocs[idx];
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() => toggleDoc(idx)}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all min-h-[44px] ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                      : 'bg-slate-50/50 border-slate-100 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span
                    className={`text-xs leading-snug ${
                      isChecked ? 'font-medium' : ''
                    }`}
                  >
                    {doc}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-[11px] text-amber-900 leading-relaxed">
            <strong>Note:</strong> Incomplete documents do not stop initial provisional registration. Parents have 15 days from session commencement to submit verified copies.
          </div>
        </section>

        {/* Admission Enquiry Form Column */}
        <section className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Send className="w-3.5 h-3.5" />
              <span>Direct Campus Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              Online Admission Enquiry Form
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Submit your inquiry and our Chhindwara admissions officer will call you back within 2 business hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-heading text-emerald-950">
                Enquiry Successfully Received!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.parentName}</strong>. We have logged your application for <strong>{formData.studentName}</strong> ({formData.classApplying}). Our coordinator will connect with you at <strong>{formData.phone}</strong> shortly.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all min-h-[44px] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Copy on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      parentName: '',
                      studentName: '',
                      classApplying: 'Nursery',
                      phone: '',
                      email: '',
                      message: '',
                    });
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold hover:bg-emerald-100/50 transition-all min-h-[44px]"
                >
                  Submit Another Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parent Name */}
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Parent / Guardian Name *
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    placeholder="e.g. Ramesh Verma"
                    value={formData.parentName}
                    onChange={(e) =>
                      setFormData({ ...formData, parentName: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 min-h-[44px] ${
                      errors.parentName
                        ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                        : 'border-slate-200 focus:ring-blue-500'
                    }`}
                  />
                  {errors.parentName && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.parentName}
                    </span>
                  )}
                </div>

                {/* Student Name */}
                <div>
                  <label
                    htmlFor="studentName"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Student Name *
                  </label>
                  <input
                    id="studentName"
                    type="text"
                    placeholder="e.g. Aarav Verma"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 min-h-[44px] ${
                      errors.studentName
                        ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                        : 'border-slate-200 focus:ring-blue-500'
                    }`}
                  />
                  {errors.studentName && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.studentName}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Class Applying For */}
                <div>
                  <label
                    htmlFor="classApplying"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Class Applying For *
                  </label>
                  <select
                    id="classApplying"
                    value={formData.classApplying}
                    onChange={(e) =>
                      setFormData({ ...formData, classApplying: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] bg-white"
                  >
                    <option value="Nursery">Nursery (2.5+ Years)</option>
                    <option value="LKG">LKG (3.5+ Years)</option>
                    <option value="UKG">UKG (4.5+ Years)</option>
                    <option value="Class 1st">Class 1st</option>
                    <option value="Class 2nd">Class 2nd</option>
                    <option value="Class 3rd">Class 3rd</option>
                    <option value="Class 4th">Class 4th</option>
                    <option value="Class 5th">Class 5th</option>
                    <option value="Class 6th">Class 6th</option>
                    <option value="Class 7th">Class 7th</option>
                    <option value="Class 8th">Class 8th</option>
                    <option value="Class 9th">Class 9th</option>
                    <option value="Class 10th">Class 10th</option>
                    <option value="Class 11th (Science - PCM/PCB)">
                      Class 11th (Science - PCM/PCB)
                    </option>
                    <option value="Class 11th (Commerce)">
                      Class 11th (Commerce)
                    </option>
                    <option value="Class 11th (Humanities)">
                      Class 11th (Humanities)
                    </option>
                    <option value="Class 12th">Class 12th (Transfer Case)</option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 min-h-[44px] ${
                      errors.phone
                        ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                        : 'border-slate-200 focus:ring-blue-500'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Email Address (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="parent@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 min-h-[44px] ${
                    errors.email
                      ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                      : 'border-slate-200 focus:ring-blue-500'
                  }`}
                />
                {errors.email && (
                  <span className="text-[11px] text-red-600 mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Any Specific Question or Bus Route Requirement?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about the student's current school, bus stop required, or queries..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md transition-all min-h-[46px] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Admission Enquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all min-h-[46px] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-2">
                🔒 Your contact details remain confidential. No unsolicited promotional spam.
              </p>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
