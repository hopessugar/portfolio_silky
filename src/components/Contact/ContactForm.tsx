import { useState } from 'react';
import type { ContactFormData } from '../../types';
import { isValidEmail } from '../../utils';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    projectType: '',
    budget: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        projectType: '',
        budget: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-wider">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-6 py-4 border-2 rounded-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all duration-300 bg-white ${
            errors.name ? 'border-red-500' : 'border-slate-200 hover:border-slate-300'
          }`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-wider">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-6 py-4 border-2 rounded-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all duration-300 bg-white ${
            errors.email ? 'border-red-500' : 'border-slate-200 hover:border-slate-300'
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-wider">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-6 py-4 border-2 border-slate-200 hover:border-slate-300 rounded-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all duration-300 bg-white"
        >
          <option value="">Select a project type</option>
          <option value="website">Website Development</option>
          <option value="ecommerce">E-commerce Platform</option>
          <option value="webapp">Web Application</option>
          <option value="design">UI/UX Design</option>
          <option value="automation">AI Automation</option>
          <option value="seo">SEO Optimization</option>
          <option value="consulting">Technical Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-wider">
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-6 py-4 border-2 border-slate-200 hover:border-slate-300 rounded-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all duration-300 bg-white"
        >
          <option value="">Select budget range</option>
          <option value="under-50k">Under ₹50,000</option>
          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
          <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
          <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
          <option value="above-5l">Above ₹5,00,000</option>
          <option value="discuss">Let's discuss</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-wider">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-6 py-4 border-2 rounded-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all duration-300 resize-vertical bg-white ${
            errors.message ? 'border-red-500' : 'border-slate-200 hover:border-slate-300'
          }`}
          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-5 px-8 rounded-none font-medium transition-all duration-500 transform ${
          isSubmitting
            ? 'bg-slate-400 cursor-not-allowed'
            : 'btn-primary hover:-translate-y-0.5'
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-6 bg-green-50 border-2 border-green-200 rounded-none">
          <p className="text-green-800 font-medium flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Redirecting to WhatsApp!
          </p>
          <p className="text-green-600 text-sm mt-2">Your message has been prepared and WhatsApp should open shortly.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-6 bg-red-50 border-2 border-red-200 rounded-none">
          <p className="text-red-800 font-medium flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Failed to send message
          </p>
          <p className="text-red-600 text-sm mt-2">Please try again or contact me directly.</p>
        </div>
      )}
    </form>
  );
};