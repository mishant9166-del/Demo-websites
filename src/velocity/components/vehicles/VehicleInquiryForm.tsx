import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Info, Mail } from 'lucide-react';
import type { Vehicle } from '../../types/vehicle';
import { velocityConfig } from '../../config/site';

interface VehicleInquiryFormProps {
  vehicle: Vehicle;
}

type InquiryIntent = 'Enquiry' | 'Test Drive' | 'Question';

export function VehicleInquiryForm({ vehicle }: VehicleInquiryFormProps) {
  const [intent, setIntent] = useState<InquiryIntent>('Enquiry');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email format';
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
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="bg-[#101315] border border-white/10 rounded-lg p-6 sm:p-7 text-[#F5F7F7] shadow-2xl relative">
      <div className="mb-5">
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8FF45] block mb-1">
          Direct Concierge Desk
        </span>
        <h3 className="text-xl font-bold tracking-tight">Interested in this vehicle?</h3>
        <p className="text-xs text-[#A0A7AC] mt-1">
          Reserve private viewing or request bespoke telemetry data for the {vehicle.year} {vehicle.model}.
        </p>
      </div>

      {/* Intent Selector Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#171B1E] rounded-sm mb-6 border border-white/5">
        <button
          type="button"
          onClick={() => setIntent('Enquiry')}
          className={`py-2 text-[11px] font-semibold tracking-wider rounded-sm transition-all cursor-pointer ${
            intent === 'Enquiry'
              ? 'bg-[#C8FF45] text-[#080A0B] shadow-sm'
              : 'text-[#A0A7AC] hover:text-white'
          }`}
        >
          Enquire
        </button>
        <button
          type="button"
          onClick={() => setIntent('Test Drive')}
          className={`py-2 text-[11px] font-semibold tracking-wider rounded-sm transition-all cursor-pointer ${
            intent === 'Test Drive'
              ? 'bg-[#C8FF45] text-[#080A0B] shadow-sm'
              : 'text-[#A0A7AC] hover:text-white'
          }`}
        >
          Test Drive
        </button>
        <button
          type="button"
          onClick={() => setIntent('Question')}
          className={`py-2 text-[11px] font-semibold tracking-wider rounded-sm transition-all cursor-pointer ${
            intent === 'Question'
              ? 'bg-[#C8FF45] text-[#080A0B] shadow-sm'
              : 'text-[#A0A7AC] hover:text-white'
          }`}
        >
          Question
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-6 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#C8FF45]/15 border border-[#C8FF45]/30 text-[#C8FF45] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h4 className="text-base font-bold text-[#F5F7F7]">Inquiry Simulated Successfully</h4>
              <p className="text-xs text-[#A0A7AC] mt-1 max-w-xs mx-auto leading-relaxed">
                Thank you, {fullName}. Your request regarding the <strong className="text-white">{vehicle.make} {vehicle.model}</strong> has been logged in frontend state.
              </p>
            </div>

            {/* Portfolio Disclaimer Alert */}
            <div className="p-3 bg-[#171B1E] border border-white/10 rounded text-[11px] text-[#A0A7AC] text-left space-y-1">
              <div className="flex items-center gap-1.5 text-[#C8FF45] font-semibold">
                <Info className="w-3.5 h-3.5" />
                <span>Frontend Demo Notice</span>
              </div>
              <p>
                As this is a portfolio frontend demonstration, no network request was sent to a backend server.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2.5 rounded bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                Your Name <span className="text-[#C8FF45]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Arjun Mehra"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full bg-[#171B1E] border rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none transition-colors ${
                  errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-[#C8FF45]'
                }`}
              />
              {errors.fullName && (
                <span className="text-[10px] text-rose-400 mt-1 block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                Email Address <span className="text-[#C8FF45]">*</span>
              </label>
              <input
                type="email"
                placeholder="arjun@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-[#171B1E] border rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none transition-colors ${
                  errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#C8FF45]'
                }`}
              />
              {errors.email && (
                <span className="text-[10px] text-rose-400 mt-1 block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                Contact Number <span className="text-[#A0A7AC]/60">(Optional)</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#171B1E] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none focus:border-[#C8FF45] transition-colors"
              />
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                Notes or Specific Questions
              </label>
              <textarea
                rows={3}
                placeholder={
                  intent === 'Test Drive'
                    ? 'Please specify your preferred date and time for the private test drive...'
                    : 'I would like more details regarding delivery timelines and warranty coverage...'
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#171B1E] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none focus:border-[#C8FF45] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-widest hover:bg-[#b5eb3b] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-[#080A0B]/30 border-t-[#080A0B] rounded-full animate-spin" />
              ) : (
                <>
                  <span>
                    {intent === 'Test Drive'
                      ? 'Request Private Test Drive'
                      : intent === 'Question'
                      ? 'Send Question'
                      : 'Register Interest'}
                  </span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {/* Direct Email Link Option */}
            <div className="text-center pt-2">
              <a
                href={`mailto:${velocityConfig.showroom.conciergeEmail}?subject=Inquiry: ${vehicle.make} ${vehicle.model}&body=Hi Velocity Concierge,%0D%0A%0D%0AI am inquiring about the ${vehicle.year} ${vehicle.model} (Offer: ₹${vehicle.price}).`}
                className="text-[11px] text-[#A0A7AC] hover:text-[#C8FF45] transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3 h-3 text-[#C8FF45]" />
                <span>Or open direct email client</span>
              </a>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
