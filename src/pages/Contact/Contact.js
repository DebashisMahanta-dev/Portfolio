import React, { useState } from 'react';
import styles from './Contact.module.css';
import Projects from './../Projects/Projects';

export default function Contact() {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const validate = () => {
    const err = {};
    if (!name.trim()) err.name = 'Name is required';
    if (!email.trim()) err.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = 'Enter a valid email';
    if (!message.trim()) err.message = 'Please enter a message';
    return err;
  };

  const CONTACT_ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT || 'https://formspree.io/f/your-form-id';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setStatus('sending');
    try {
      // Send as JSON. Formspree accepts JSON posts to its endpoint when configured.
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        // Try to parse error message
        let msg = 'Submission failed. Please try again.';
        try { const j = await res.json(); if (j && j.error) msg = j.error; } catch (_) {}
        setStatus('idle');
        setErrors({ submit: msg });
        return;
      }

      // success
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch (err) {
      setStatus('idle');
      setErrors({ submit: 'Submission failed. Please check your network and try again.' });
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Contact</h1>
      <p className={styles.lead}>Hey!! If you already reached here Feel free to msg me on my mail below this contact form isn't gonna work . This is only my practice Project..Have a Great day !!. </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          id="name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          required
        />
        {errors.name && <div id="name-error" className={styles.error}>{errors.name}</div>}

        <label className={styles.label} htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          required
        />
        {errors.email && <div id="email-error" className={styles.error}>{errors.email}</div>}

        <label className={styles.label} htmlFor="message">Message</label>
        <textarea
          id="message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message && <div id="message-error" className={styles.error}>{errors.message}</div>}

        {errors.submit && <div className={styles.error}>{errors.submit}</div>}

        <div className={styles.actions}>
          <button className={styles.button} type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
        </div>

        <div aria-live="polite" className={styles.visuallyHidden}>
          {status === 'success' && 'Message sent successfully.'}
        </div>
      </form>

      {status === 'success' && (
        <div className={styles.success} role="status">Thanks — your message has been sent.</div>
      )}
    </main>
  );
}
