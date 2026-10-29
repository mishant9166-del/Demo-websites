import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  AlertCircle,
  Phone,
  Clock,
  CheckCircle2,
  XCircle,
  Info,
  Calendar,
} from 'lucide-react';

export const EmergencyCarePage: React.FC = () => {
  const urgentSigns = [
    {
      title: 'Severe Respiratory Distress',
      desc: 'Rapid breathing, blue/purple tongue or gums, choking, or gasping with open mouth (especially in cats).',
    },
    {
      title: 'Suspected Toxin Ingestion',
      desc: 'Eating lilies, dark chocolate, rodenticides, human medications (ibuprofen/paracetamol), antifreeze, or xylitol.',
    },
    {
      title: 'Inability to Urinate (Especially Male Cats)',
      desc: 'Frequent trips to the litterbox, crying out, straining with no urine produced. This is life-threatening.',
    },
    {
      title: 'Trauma & Severe Bleeding',
      desc: 'Hit by vehicle, high falls, deep animal bite wounds, or blood loss that does not slow after pressure.',
    },
    {
      title: 'Acute Abdominal Swelling & Retching',
      desc: 'Unproductive retching in deep-chested dogs (suspected gastric torsion/bloat), extreme abdominal pain.',
    },
    {
      title: 'Seizures & Sudden Collapse',
      desc: 'Multiple seizures within 24 hours, active continuous seizure lasting >3 minutes, loss of consciousness.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Prominent Emergency Warning Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-red-600 text-white shadow-xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/20 text-white shrink-0">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold bg-white/20 px-3 py-1 rounded-full">
                Urgent Veterinary Triage Notice
              </span>
              <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Is your pet in immediate distress?
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                If your companion is in acute pain, unconscious, or having difficulty breathing, proceed immediately to the nearest 24/7 animal emergency hospital.
              </p>
            </div>
          </div>

          {/* Fictional Demo Phone Warning Notice */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-xs sm:text-sm text-white/95 space-y-1">
            <div className="font-bold flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-300" />
              <span>Demo Notice &amp; Protocol:</span>
            </div>
            <p>
              Paw &amp; Whisker is a daytime independent general practice and does not operate 24-hour trauma facilities. The phone number below is a fictional placeholder for demonstration purposes. If you have an active medical emergency, contact your local 24-hour emergency hospital directly.
            </p>
          </div>

          {/* Fictional Emergency Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white text-[#343D30] space-y-2">
              <div className="text-xs font-bold text-red-600 uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>Daytime Clinic Urgent Line</span>
              </div>
              <div className="font-fraunces text-2xl font-bold">
                (555) 729-9447
              </div>
              <div className="text-xs text-[#343D30]/80">
                Mon – Fri: 8:00 AM – 6:00 PM • Sat: 8:30 AM – 2:00 PM
              </div>
              <div className="text-[11px] text-[#82947A] font-medium pt-1">
                *Fictional demo contact — Call ahead so our doctors can prepare the triage area.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-red-900/40 border border-white/20 text-white space-y-2">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 Regional Emergency Center (Sample)</span>
              </div>
              <div className="font-fraunces text-xl font-bold">
                Metro Animal Emergency Hospital
              </div>
              <div className="text-xs text-white/80">
                1900 NW Emergency Parkway • Open 24/7/365
              </div>
              <div className="text-[11px] text-amber-200/90 font-medium pt-1">
                *Fictional reference. Please consult your local emergency directory.
              </div>
            </div>
          </div>
        </div>

        {/* Critical Red-Flag Warning Signs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
              Signs Requiring Immediate Care
            </span>
            <h2 className="font-fraunces text-3xl font-bold text-[#343D30]">
              General Critical Warning Signs
            </h2>
            <p className="text-sm text-[#343D30]/80">
              Never wait or adopt a &ldquo;watch-and-see&rdquo; attitude if you observe any of the following symptoms:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urgentSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#E8DFD1] shadow-xs space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-fraunces font-bold text-lg text-[#343D30]">
                  {sign.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#343D30]/80 leading-relaxed">
                  {sign.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgent vs Routine Decision Guide */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFD1] space-y-6">
          <div className="space-y-2">
            <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
              Urgent Situation vs. Routine Appointment Guide
            </h3>
            <p className="text-sm text-[#343D30]/80">
              Use this quick comparison table to determine the best path of care for your companion:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Urgent / Emergency */}
            <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200 space-y-4">
              <div className="flex items-center gap-2 text-red-800 font-bold text-base">
                <XCircle className="w-5 h-5 text-red-600" />
                <span>Go to Emergency Immediately</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-red-950/80">
                <li>• Repeated vomiting or dry retching within hours</li>
                <li>• Pale, grey, or yellow gums</li>
                <li>• Inability to stand or sudden weakness in hind legs</li>
                <li>• Eye injuries, bleeding, or sudden cloudiness</li>
                <li>• High fever or severe sub-normal temperature</li>
              </ul>
            </div>

            {/* Routine Schedule */}
            <div className="p-6 rounded-2xl bg-[#82947A]/15 border border-[#82947A]/30 space-y-4">
              <div className="flex items-center gap-2 text-[#343D30] font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-[#82947A]" />
                <span>Book a Routine Clinic Visit</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#343D30]/85">
                <li>• Annual wellness exams and vaccinations</li>
                <li>• Routine tartar removal and dental cleanings</li>
                <li>• Gradual weight management or diet changes</li>
                <li>• Mild itching or chronic dry skin</li>
                <li>• Minor limping that improves with rest</li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/paw-whisker/book-visit"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C76F52] hover:underline"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book routine consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Safety Tips */}
        <div className="p-8 rounded-3xl bg-[#F0D9CA]/40 border border-[#E8DFD1] space-y-4">
          <h3 className="font-fraunces text-xl font-bold text-[#343D30] flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#C76F52]" />
            Safely Transporting an Injured or Distressed Pet
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#343D30]/85">
            <li><strong>Muzzle with caution:</strong> Even the sweetest dog may bite when in severe pain. Wrap a soft gauze or towel around the muzzle unless they are vomiting or having difficulty breathing.</li>
            <li><strong>Keep spine neutral:</strong> If trauma or spinal injury is suspected, transport large dogs on a firm board or thick blanket held taut like a stretcher.</li>
            <li><strong>Cats in carriers:</strong> Wrap injured cats loosely in a towel and place them directly into a top-loading carrier so they feel sheltered.</li>
            <li><strong>Call ahead:</strong> Always call the emergency clinic en route so veterinary triage technicians can meet you at the curb with a stretcher.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
