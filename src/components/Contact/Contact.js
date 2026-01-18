"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Contact.module.scss';

import ContactBg from '@/assets/images/contact_bg.png';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState({ sending: false, ok: null, error: null });

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus({ sending: true, ok: null, error: null });
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok && data.ok) {
                setStatus({ sending: false, ok: true, error: null });
                setForm({ name: '', email: '', phone: '', message: '' });
            } else {
                throw new Error(data.error || 'Request failed');
            }
        } catch (err) {
            setStatus({ sending: false, ok: false, error: err.message || 'Failed to send' });
        }
    };

    return (
        <section className={styles.contactSection} id="contactUs">
            <Image
                src={ContactBg}
                className={styles.contactSectionBg}
                width={500}
                height={500}
                alt=""
            />
            <div className={`container ${styles.container}`}>
                <div className={styles.textWrapper}>
                    <span className={styles.preTitle}>HAVE A PROJECT IN MIND</span>
                    <div>
                        <h2 className={styles.title}>
                            We Build Spaces That Power Growth And Last For Generations.
                        </h2>
                        <p className={styles.description}>
                            From industrial PEB works to intricate civil and MEP solutions, Neo Heights delivers reliable, end-to-end construction services with precision, quality and long-term value.
                        </p>
                    </div>
                </div>

                <div className={styles.formWrapper}>
                    <div className={styles.absoluteBgColor}></div>
                    <div className={styles.formCard}>
                        <h3 className={styles.formCardTitle}>Let's connect</h3>
                        <p className={styles.formDesc}>You can reach us anytime via <span>frontdesk@neoheights.com</span></p>

                        <form className={styles.contactForm} onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your full Name"
                                className={styles.input}
                                value={form.name}
                                onChange={onChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className={styles.input}
                                value={form.email}
                                onChange={onChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className={styles.input}
                                value={form.phone}
                                onChange={onChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Write Your message"
                                rows="4"
                                className={styles.textarea}
                                aria-expanded={false}
                                value={form.message}
                                onChange={onChange}
                                required
                            ></textarea>

                            <button type="submit" className={styles.submitBtn} disabled={status.sending}>
                                {status.sending ? 'Sending...' : 'Send Enquiry'} <ArrowRight size={16} />
                            </button>
                        </form>
                        {status.ok && <p className={styles.successMsg}>Thanks! We will reach out shortly.</p>}
                        {status.error && <p className={styles.errorMsg}>Error: {status.error}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
