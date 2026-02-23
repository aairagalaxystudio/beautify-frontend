import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <div className="container" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)', maxWidth: '700px' }}>
        <h1>Contact</h1>
        <p style={{ marginBottom: 'var(--space-lg)' }}>We'd love to hear from you. Reach out with any inquiries or just to say hello.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '1rem', border: 'var(--border-thin)', borderRadius: 0, background: 'transparent' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '1rem', border: 'var(--border-thin)', borderRadius: 0, background: 'transparent' }}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ padding: '1rem', border: 'var(--border-thin)', borderRadius: 0, background: 'transparent' }}
          ></textarea>
          <Button type="submit" variant="primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>
          {status === 'success' && <p style={{ color: 'var(--champagne-gold)' }}>Thank you. We'll be in touch soon.</p>}
          {status === 'error' && <p style={{ color: 'var(--black)' }}>Something went wrong. Please try again.</p>}
        </form>
      </div>
    </Layout>
  );
}
