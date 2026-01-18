'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import styles from './ContactPopup.module.scss';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // show only first time
    const alreadyShown = localStorage.getItem('contact_popup_shown');

    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      localStorage.setItem('contact_popup_shown', 'true');
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
        >
          <X size={16}/>
        </button>

         <div className={styles.formWrapper}>
                    <div className={styles.absoluteBgColor}></div>
                    <div className={styles.formCard}>
                        <h3 className={styles.formCardTitle}>Let's connect</h3>
                        <p className={styles.formDesc}>You can reach us anytime via <span>frontdesk@neoheights.com</span></p>

                        <form className={styles.contactForm}>
                            <input type="text" placeholder="Your full Name" className={styles.input} />
                            <input type="email" placeholder="Email Address" className={styles.input} />
                            <input type="tel" placeholder="Phone Number" className={styles.input} />
                            <textarea placeholder="Write Your message" rows="4" className={styles.textarea} aria-expanded={false}></textarea>

                            <button type="submit" className={styles.submitBtn}>
                                Send Enqiry <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>
      </div>
    </div>
  );
}
