import { useState } from 'react';
import { soundFX } from '../utils/audio';

interface ContactProps {
  onToast?: (message: string, type: 'error' | 'success') => void;
}

export default function Contact({ onToast }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    soundFX.playWarp();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    if (onToast) {
      onToast(`Copied ${label} to clipboard!`, 'success');
    }
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playWarp();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onToast) {
        onToast('Message transmitted successfully!', 'success');
      }
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <div className="section-line"></div>
        </div>

        {/* Live Availability Banner */}
        <div className="contact-status-banner reveal-on-scroll">
          <span className="status-live-dot"></span>
          <span className="status-banner-text">
            Available for Software Engineering, AI Microservices & Full-Stack Roles
          </span>
        </div>

        <div className="contact-grid">
          {/* Direct Communication Channels */}
          <div className="contact-info-panel glass-panel reveal-on-scroll">
            <div className="contact-panel-header">
              <h3 className="contact-panel-title">Direct Reachout</h3>
              <p className="contact-panel-desc">
                Have an opening, AI microservice architecture to build, or project in mind? Connect via email, phone, or any channel below!
              </p>
            </div>

            <div className="contact-cards-stack">
              {/* Email Card */}
              <div className="contact-card-box">
                <div className="contact-card-top-row">
                  <div className="contact-card-header-left">
                    <span className="contact-card-emoji">📧</span>
                    <span className="contact-card-label">Primary Email</span>
                  </div>
                  <button
                    className="contact-copy-btn"
                    onClick={() => copyToClipboard('keertan004@gmail.com', 'Email')}
                    title="Copy Email Address"
                  >
                    {copiedField === 'Email' ? '✓ Copied' : '📋 Copy'}
                  </button>
                </div>
                <a href="mailto:keertan004@gmail.com" className="contact-card-value-link">
                  keertan004@gmail.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="contact-card-box">
                <div className="contact-card-top-row">
                  <div className="contact-card-header-left">
                    <span className="contact-card-emoji">📱</span>
                    <span className="contact-card-label">Phone / WhatsApp</span>
                  </div>
                  <button
                    className="contact-copy-btn"
                    onClick={() => copyToClipboard('+91 9353846678', 'Phone')}
                    title="Copy Phone Number"
                  >
                    {copiedField === 'Phone' ? '✓ Copied' : '📋 Copy'}
                  </button>
                </div>
                <a href="tel:+919353846678" className="contact-card-value-link">
                  +91 93538 46678
                </a>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/keertan-b-j-816aa1214"
                target="_blank"
                rel="noreferrer"
                className="contact-card-box contact-card-clickable"
                onClick={() => soundFX.playClick()}
              >
                <div className="contact-card-top-row">
                  <div className="contact-card-header-left">
                    <span className="contact-card-emoji">💼</span>
                    <span className="contact-card-label">LinkedIn Profile</span>
                  </div>
                  <span className="contact-arrow-icon">↗</span>
                </div>
                <span className="contact-card-value-link">
                  linkedin.com/in/keertan-b-j-816aa1214
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/mad-man22"
                target="_blank"
                rel="noreferrer"
                className="contact-card-box contact-card-clickable"
                onClick={() => soundFX.playClick()}
              >
                <div className="contact-card-top-row">
                  <div className="contact-card-header-left">
                    <span className="contact-card-emoji">🐙</span>
                    <span className="contact-card-label">GitHub Repositories</span>
                  </div>
                  <span className="contact-arrow-icon">↗</span>
                </div>
                <span className="contact-card-value-link">
                  github.com/mad-man22
                </span>
              </a>

              {/* Location Card */}
              <div className="contact-card-box">
                <div className="contact-card-top-row">
                  <div className="contact-card-header-left">
                    <span className="contact-card-emoji">📍</span>
                    <span className="contact-card-label">Current Location</span>
                  </div>
                </div>
                <span className="contact-card-value-text">
                  Bengaluru / Mandya, Karnataka, India
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="contact-form-panel glass-panel reveal-on-scroll">
            <h3 className="contact-panel-title">Send a Message</h3>
            <p className="contact-panel-desc">
              Send a quick note directly from here. I typically respond within a few hours!
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">
                  Your Full Name <span className="req-star">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="cyber-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email Address <span className="req-star">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="cyber-input"
                />
              </div>

              <div className="form-group">
                <div className="form-label-row">
                  <label className="form-label">
                    Message <span className="req-star">*</span>
                  </label>
                  <span className="char-count">{formData.message.length} chars</span>
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your requirement or project idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="cyber-input cyber-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-cyber-primary btn-block"
              >
                {isSubmitting ? (
                  <>⚡ Transmitting...</>
                ) : isSubmitted ? (
                  <>✓ Message Transmitted Successfully!</>
                ) : (
                  <>🚀 Send Direct Message</>
                )}
              </button>

              {isSubmitted && (
                <div className="form-success-banner">
                  ⚡ Message recorded! You can also email directly at{' '}
                  <a href="mailto:keertan004@gmail.com" className="term-cyan">
                    keertan004@gmail.com
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
