import { useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const endpoint = siteConfig.contact.formspreeEndpoint;

    // If the user hasn't set up their Formspree endpoint yet, just simulate it.
    if (!endpoint) {
      setTimeout(() => {
        setStatus('success');
        form.reset();
      }, 1500);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        // Fallback to idle if there's an error (could add an error state later)
        setStatus('idle');
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <section id="contact" className="py-12 bg-[#F2F4EF] relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Decorative background blur */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Start a project
            </span>
            <h2 className="text-4xl lg:text-4xl font-extrabold mb-4 tracking-tight leading-[1.15]">
              Have a business in mind? <br/>
              Let's build it.
            </h2>
            <p className="text-base text-secondary mb-6 max-w-md leading-relaxed">
              Tell me a little about your business and the kind of website you need. We can discuss the design, features, timeline, and project scope.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/80 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden">
              {status === 'success' ? (
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-10">
                  <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6 shadow-inner border border-accent/30">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3 tracking-tight">Message Received</h3>
                  <p className="text-secondary text-sm font-medium mb-8 max-w-sm">
                    Thank you! In a full production build, this would silently send your information directly to a server or API.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-full text-background bg-primary hover:bg-black transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : null}

              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-primary">Project Inquiry Form</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold tracking-widest text-secondary uppercase mb-1.5">Business Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required 
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F4] border-2 border-transparent focus:outline-none focus:bg-white focus:border-primary transition-all text-sm font-medium"
                      placeholder="e.g. Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold tracking-widest text-secondary uppercase mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required 
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F4] border-2 border-transparent focus:outline-none focus:bg-white focus:border-primary transition-all text-sm font-medium"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-[11px] font-bold tracking-widest text-secondary uppercase mb-1.5">Website Type</label>
                  <div className="relative">
                    <select 
                      id="type"
                      name="type"
                      required 
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F4] border-2 border-transparent focus:outline-none focus:bg-white focus:border-primary transition-all text-sm font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select a category</option>
                      <option value="business">Business Website</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="landing">Landing Page</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-secondary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold tracking-widest text-secondary uppercase mb-1.5">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required 
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F4] border-2 border-transparent focus:outline-none focus:bg-white focus:border-primary transition-all text-sm font-medium resize-none"
                    placeholder="Tell me about your project goals, features, and timeline..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center px-6 py-3 text-sm font-extrabold rounded-xl text-primary bg-accent hover:bg-[#b5e05a] transition-all shadow-sm shadow-accent/20 group relative overflow-hidden mt-1"
                >
                  <span className={`relative z-10 flex items-center ${status === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                    Send Inquiry <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                  {status === 'submitting' && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    </span>
                  )}
                </button>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
