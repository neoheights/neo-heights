"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Journey from "@/components/Journey/Journey";
import styles from "./page.module.scss";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircleMore, ArrowRight } from "lucide-react";
import ContactBg from "@/assets/images/contact_bg.png";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({
    sending: false,
    ok: null,
    error: null,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, error: null });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ sending: false, ok: true, error: null });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.error || "Request failed");
      }
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        error: err.message || "Failed to send",
      });
    }
  };

  return (
    <main>
      <Header />

      <section className={styles.contactPageSection} id="contactUs">
        <Image
          src={ContactBg}
          className={styles.contactPageBg}
          width={900}
          height={700}
          alt=""
        />

        <div className={`container ${styles.contactPageContainer}`}>
          <p className={styles.eyebrow}>HAVE A PROJECT IN MIND</p>
          <h2 className={styles.title}>
            We Build Spaces That Power Growth And Last For Generations.
          </h2>

          <div className={styles.gridContent}>
            <div className={styles.formWrapper}>
              <div className={styles.absoluteBgColor}></div>

              <div className={styles.formCard}>
                <h3 className={styles.formCardTitle}>Let&apos;s connect</h3>

                <p className={styles.formDesc}>
                  You can reach us anytime via{" "}
                  <span>support@neoheigths.in</span>
                </p>

                <form className={styles.contactForm} onSubmit={onSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="First & Last name"
                    className={styles.input}
                    value={form.name}
                    onChange={onChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className={styles.input}
                    value={form.email}
                    onChange={onChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className={styles.input}
                    value={form.phone}
                    onChange={onChange}
                  />

                  <textarea
                    name="message"
                    placeholder="Write your message"
                    rows="5"
                    className={styles.textarea}
                    value={form.message}
                    onChange={onChange}
                    required
                  />

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status.sending}
                  >
                    {status.sending ? "Sending..." : "Send Enquiry"}
                    <ArrowRight size={16} />
                  </button>
                </form>

                {status.ok && (
                  <p className={styles.successMsg}>
                    Thanks! We will reach out shortly.
                  </p>
                )}

                {status.error && (
                  <p className={styles.errorMsg}>Error: {status.error}</p>
                )}
              </div>
            </div>

            <div className={styles.methodsList}>
              <div className={styles.methodItem}>
                <div className={styles.iconCircle}>
                  <Phone size={20} />
                </div>
                <div className={styles.methodText}>
                  <span className={styles.methodLabel}>Phone</span>
                  <span className={styles.methodValue}>Office: +91 6232 1151 22</span>
                </div>
              </div>

              <div className={styles.methodItem}>
                <div className={styles.iconCircle}>
                  <MessageCircleMore size={20} />
                </div>
                <div className={styles.methodText}>
                  <span className={styles.methodLabel}>WhatsApp</span>
                  <span className={styles.methodValue}>Whatapp: +91 6232 1151 22</span>
                </div>
              </div>

              <div className={styles.methodItem}>
                <div className={styles.iconCircle}>
                  <Mail size={20} />
                </div>
                <div className={styles.methodText}>
                  <span className={styles.methodLabel}>Email</span>
                  <span className={styles.methodValue}>Info@neoheights.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.officeSection}>
        <div className={`container ${styles.officeInner}`}>
          <div className={styles.officeInfo}>
            <h2 className={styles.officeTitle}>Neo Heights builders and promoters pvt ltd</h2>
            <div className={styles.officeDetails}>
              <div className={styles.officeRow}>
                <span className={styles.officeIcon}>
                  <MapPin />
                </span>
                <p className={styles.officeAddress}>
                  First floor, Vaishnavi nagar, No: 1, Bangalore Road, near
                  Airtel Office, beside Vasan Eye Care Hospital, SBM Colony,
                  Anthivadi, Hosur, Tamil Nadu 635109
                </p>
              </div>
              <div className={styles.officeRow}>
                <span className={styles.officeIcon}>
                  <Phone />
                </span>
                <p className={styles.officePhone}>91 64464 64732</p>
              </div>
              <div className={styles.officeRow}>
                <span className={styles.officeIcon}>
                  <Mail />
                </span>
                <p className={styles.officeEmail}>neoheights@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.officeMapWrap}>
            <iframe
              className={styles.officeMap}
              src="https://maps.google.com/maps?q=First%20floor%2C%20Vaishnavi%20nagar%2C%20No%3A%201%2C%20Bangalore%20Road%2C%20near%20Airtel%20Office%2C%20beside%20Vasan%20Eye%20Care%20Hospital%2C%20SBM%20Colony%2C%20Anthivadi%2C%20Hosur%2C%20Tamil%20Nadu%20635109&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <div className={styles.contactIntroSection} />
      <section className={styles.officeSection}>
        <div className={`container ${styles.officeInner}`}>
          <div className={styles.officeInfo}>
            <h2 className={styles.officeTitle}>Neo Heights builders and promoters pvt ltd</h2>
            <div className={styles.officeDetails}>
              <div className={styles.officeRow}>
                <span className={styles.officeIcon}>
                  <MapPin />
                </span>
                <p className={styles.officeAddress}>
                  Achuth Square Complex, 1018/1, 1st Floor, 24th Main Rd, 13th
                  Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                </p>
              </div>
              <div className={styles.officeRow}>
                <span className={styles.officeIcon}>
                  <Phone />
                </span>
                <p className={styles.officePhone}>91 64464 64732</p>
              </div>
              <div className={styles.officeRow}>
                <span className={styles.officeIcon}>
                  <Mail />
                </span>
                <p className={styles.officeEmail}>neoheights@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.officeMapWrap}>
            <iframe
              className={styles.officeMap}
              src="https://maps.google.com/maps?q=Achuth%20Square%20Complex%2C%201018%2F1%2C%201st%20Floor%2C%2024th%20Main%20Rd%2C%2013th%20Cross%20Rd%2C%201st%20Sector%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Journey />
      <Footer showTopStrip />
    </main>
  );
}
