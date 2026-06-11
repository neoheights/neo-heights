"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesHero.module.scss";
import ContactBg from "@/assets/images/contact_bg.png";

const ServicesHero = () => {
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

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ sending: true, ok: null, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus({ sending: false, ok: true, error: null });
        setForm({ name: "", email: "", phone: "", message: "" });
        return;
      }

      throw new Error(data.error || "Request failed");
    } catch (error) {
      setStatus({
        sending: false,
        ok: false,
        error: error.message || "Failed to send",
      });
    }
  };

  return (
    <section className={styles.servicesHero}>
      <Image
        src={ContactBg}
        className={styles.heroBackground}
        width={900}
        height={700}
        alt=""
      />

      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>HAVE A PROJECT IN MIND</p>
          <h1 className={styles.heading}>
            We Build Spaces That Power Growth And Last For Generations.
          </h1>
          <p className={styles.description}>
            From civil and PEB works to interiors and MEP solutions, Neo Heights
            delivers reliable, end-to-end construction services with precision,
            quality, and long-term value.
          </p>
        </div>

        <div className={styles.formShell}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Let&apos;s connect</h2>
            <p className={styles.formDesc}>
              You can reach us anytime via <span>frontdesk@neoheights.com</span>
            </p>

            <form className={styles.form} onSubmit={onSubmit}>
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
                {status.sending ? "Sending..." : "Send Enquiry"}{" "}
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
    </section>
  );
};
 //Separate Pages


export default ServicesHero;
