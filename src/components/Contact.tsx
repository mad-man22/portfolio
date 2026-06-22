import React, { useState } from 'react';

interface ContactProps {
  onToast: (message: string, type: 'success' | 'error') => void;
}

export default function Contact({ onToast }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const key = id.replace('form-', '');
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onToast('Message sent successfully! Keertan will review it shortly.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section-padding reveal-on-scroll">
      <div className="container">
        <h2 className="section-title">
          <span>05.</span> Get In Touch
        </h2>
        <div className="contact-grid">
          
          <div className="contact-info-area reveal-item reveal-delay-1">
            <h3>Let's collaborate</h3>
            <p>
              I am currently looking for new opportunities in AI orchestration, backend engineering, or full-stack software development. Whether you have a project idea, want to talk system architecture, or just want to connect — reach out!
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="contact-svg"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-text">
                  <span>Email</span>
                  <a href="mailto:keertan004@gmail.com">keertan004@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="contact-svg"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-text">
                  <span>Phone</span>
                  <a href="tel:+919632208332">+91 96322 08332</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="contact-svg"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-text">
                  <span>Location</span>
                  <span className="location-val">Mandya, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="social-links">
              <a
                href="https://github.com/mad-man22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="social-icon-svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/keertan-b-j-816aa1214"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="social-icon-svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/Keertan004"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="leetcode-social"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon-svg">
                  <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.713-.696L3.666 14.3c-.93-.902-.93-2.37 0-3.272L9.955 4.42c.466-.45 1.112-.696 1.746-.696.632 0 1.277.245 1.743.696l2.69 2.607a.36.36 0 0 1 0 .515l-1.345 1.303a.35.35 0 0 1-.5 0l-2.034-1.97a.918.918 0 0 0-1.21-.06l-5.6 5.43a.765.765 0 0 0 0 1.11l5.6 5.43a.918.918 0 0 0 1.21-.06l2.034-1.97a.35.35 0 0 1 .5 0l1.346 1.303a.36.36 0 0 1 0 .515zM22 10.978c0 1.836-1.448 3.321-3.235 3.321H14.89a.311.311 0 0 1-.311-.311v-1.365c0-.172.14-.311.311-.311h3.874c.732 0 1.326-.607 1.326-1.334 0-.727-.594-1.334-1.326-1.334H9.68a.312.312 0 0 1-.312-.311V7.967c0-.171.14-.311.312-.311h9.085C20.552 7.656 22 9.141 22 10.978z" />
                </svg>
              </a>
              <a
                href="https://www.hackerrank.com/profile/keertan004"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon-svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.115 17v-10h2.23v3.428h1.77v-3.428h2.23v10h-2.23v-4.143h-1.77v4.143h-2.23z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-area glass-card reveal-item reveal-delay-2">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name">Name</label>
                <input
                  type="text"
                  id="form-name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-email">Email</label>
                <input
                  type="email"
                  id="form-email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-subject">Subject</label>
                <input
                  type="text"
                  id="form-subject"
                  required
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-message">Message</label>
                <textarea
                  id="form-message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="send-svg"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
