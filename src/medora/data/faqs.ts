import type { FAQItem } from '../types/medora';

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Departments',
    question: 'How do I know which medical department to visit for my symptoms?',
    answer: 'If you are experiencing non-emergency symptoms and are uncertain of the underlying cause, we recommend booking a consultation with our General Medicine & Family Health department. Our senior physicians conduct thorough evaluations and coordinate seamless referrals to specialized departments like Cardiology, Neurology, or Gastroenterology when needed.'
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'How does this online appointment request system work?',
    answer: 'This website is a frontend interactive preview. When you submit the appointment form on this site, it validates your requested department, preferred date, and contact details, and displays a successful demo confirmation message. Because this is a portfolio demonstration, no real hospital booking is made and no medical data is sent to a server.'
  },
  {
    id: 'faq-3',
    category: 'Preparation',
    question: 'What documentation should I bring to an outpatient consultation?',
    answer: 'For a comprehensive clinical visit, patients are typically advised to bring government photo identification, current medical insurance cards, a list of all current prescription and over-the-counter medications, previous laboratory test reports, recent diagnostic imaging (X-rays, CT, MRI scans on disk or film), and any relevant referral letters from your primary doctor.'
  },
  {
    id: 'faq-4',
    category: 'Facilities',
    question: 'What accessibility features are available for patients with reduced mobility?',
    answer: 'Medora Hospital features barrier-free architecture throughout the campus. This includes covered ground-level drop-off ramps, wide automated sliding doors, oversized elevators accommodating hospital beds and power wheelchairs, ADA-compliant restrooms on every clinical floor, complimentary transit wheelchairs at the main entrance, and tactile wayfinding strips.'
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'Where can I find information about a doctor’s specialty and focus areas?',
    answer: 'You can explore our Doctors Directory page, where each specialist profile lists their clinical areas of practice, associated department, consultation days, and room location. You can filter specialists by medical department or search directly by physician name.'
  },
  {
    id: 'faq-6',
    category: 'Appointments',
    question: 'Can I change or reschedule an appointment once requested?',
    answer: 'In this frontend preview, appointment submissions simulate an instant confirmation card. In an active healthcare facility, patients can reschedule or cancel appointments by contacting the hospital reception helpline or using their online patient portal at least 24 hours in advance.'
  },
  {
    id: 'faq-7',
    category: 'Preparation',
    question: 'Do I need to fast before laboratory blood tests or ultrasound scans?',
    answer: 'Certain tests—such as fasting blood glucose, lipid profiles, and upper abdominal ultrasounds—require 8 to 10 hours of overnight fasting (water is usually permitted). For routine checkups without fasting requirements, regular light meals are acceptable. Specific instructions are always provided upon appointment confirmation.'
  },
  {
    id: 'faq-8',
    category: 'Facilities',
    question: 'What amenities are provided for accompanying family members and visitors?',
    answer: 'Visitors have access to comfortable, naturally lit waiting lounges on each floor equipped with high-speed Wi-Fi, mobile device charging kiosks, filtered water stations, quiet reflection spaces, an on-site healthy cafeteria, and a round-the-clock outpatient pharmacy.'
  },
  {
    id: 'faq-9',
    category: 'General',
    question: 'How do you handle 24/7 medical emergencies?',
    answer: 'The hospital maintains a fully equipped Level-1 Emergency & Trauma Care center accessible 24 hours a day, 7 days a week, 365 days a year. The emergency department features dedicated ambulance bays, immediate physician triage, point-of-care diagnostics, and direct access to critical care surgical suites.'
  },
  {
    id: 'faq-10',
    category: 'General',
    question: 'Is my personal health information collected on this website?',
    answer: 'No. As a demonstrative frontend prototype, this application operates entirely within your browser. No sensitive personal data, clinical records, or contact submissions are transmitted, stored in remote databases, or shared with third parties.'
  }
];
