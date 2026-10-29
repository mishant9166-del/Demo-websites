export interface FAQItem {
  id: string;
  category: 'Orders' | 'Shipping' | 'Returns' | 'Materials' | 'Payments';
  question: string;
  answer: string;
}

export const STORE_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Orders',
    question: 'How do I place an order and track its status?',
    answer:
      'Browse our catalog, select your preferred product variant and quantity, and click "Add to Cart" or "Buy Now". During checkout, enter your shipping address and select a simulated payment option. Once submitted, your simulated demo order ID will be generated and saved to your browser session.',
  },
  {
    id: 'faq-2',
    category: 'Orders',
    question: 'Can I cancel or modify my demonstration order?',
    answer:
      'Because OBJECT & FORM operates as a frontend portfolio demonstration, no real inventory is held and no payment is charged. You can review your simulated orders or clear your shopping cart at any time.',
  },
  {
    id: 'faq-3',
    category: 'Shipping',
    question: 'What are the shipping charges and delivery timeframes?',
    answer:
      'We offer complimentary standard delivery across India on orders over ₹2,499. For orders under this threshold, a flat delivery fee of ₹199 applies. In a production scenario, transit typically takes 2–5 business days depending on your postal code.',
  },
  {
    id: 'faq-4',
    category: 'Shipping',
    question: 'Do you offer international shipping?',
    answer:
      'Our current demonstration store model is localized for domestic deliveries across all Indian pin codes. International shipping can be activated via express global logistics partners in production.',
  },
  {
    id: 'faq-5',
    category: 'Returns',
    question: 'What is your return and exchange policy?',
    answer:
      'We believe in lasting satisfaction. For demonstration purposes, our return window simulates a 30-day hassle-free exchange on unused items in original packaging with intact protective seals.',
  },
  {
    id: 'faq-6',
    category: 'Materials',
    question: 'How are your materials sourced and tested?',
    answer:
      'We prioritize natural, circular, and durable materials: 18oz unbleached duck canvas, vegetable-tanned full-grain leather, French flax linen, high-density German wool felt, and recyclable 6061 aerospace-grade aluminum.',
  },
  {
    id: 'faq-7',
    category: 'Payments',
    question: 'What payment methods and discount codes are available in this demo?',
    answer:
      'You can test checkout using Demo UPI or Simulated Cash on Delivery. Try using demo promotional codes such as WELCOME10 (10% off your order) or OBJECT200 (₹200 off on orders over ₹2,000).',
  },
];
