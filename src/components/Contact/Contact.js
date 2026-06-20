"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
} from "lucide-react";
import styles from "./Contact.module.scss";

import ContactBg from "@/assets/images/contact_bg.png";
import ServicesHero from "@/components/ServicesHero/ServicesHero";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "Office: +91 6232 1151 22",
  },
  {
    icon: MessageCircleMore,
    label: "WhatsApp",
    value: "WhatsApp: +91 6232 1151 22",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@neoheights.in",
  },
];

const locationDetails = [
  {
    icon: MapPin,
    value:
      "Achuth Square Complex, 1018/1, 1st Floor, 24th Main Rd, 13th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
  },
  {
    icon: Phone,
    value: "+91 91 64464 64732",
  },
  {
    icon: Mail,
    value: "neohights@gmail.com",
  },
];

const Contact = ({ showMap = true }) => {
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

  if (!showMap) {
    return <ServicesHero />;
  }

  return (
    <section className={styles.contactSection} id="contactUs">
      <Image
        src={ContactBg}
        className={styles.contactSectionBg}
        width={900}
        height={700}
        alt=""
      />

      <div className={`container ${styles.container}`}>
        <p className={styles.sectionEyebrow}>HAVE A PROJECT IN MIND</p>
        <div className={styles.topPanel}>
          <div className={styles.contentSide}>
            <h2 className={styles.sectionTitle}>
              We Build Spaces That Power Growth And Last For Generations.
            </h2>

            <p className={styles.sectionDescription}>
              From civil and PEB works to interiors and MEP solutions, Neo
              Heights delivers reliable, end-to-end construction services with
              precision, quality, and long-term value.
            </p>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.absoluteBgColor}></div>

            <div className={styles.formCard}>
              <h3 className={styles.formCardTitle}>Lets connect</h3>

              <p className={styles.formDesc}>
                You can reach us anytime via{" "}
                <span>frontdesk@neoheights.com</span>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
