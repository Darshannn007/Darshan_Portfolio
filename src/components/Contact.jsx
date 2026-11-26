import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_73rq5xl";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_fqa3cko";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "-08qB3KXILOSJvwRL";

const Contact = ({ content }) => {
  const formRef = useRef(null);
  const [formValues, setFormValues] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current || status.state === "sending") {
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        state: "error",
        message: "Email dispatch service unconfigured. Please connect via direct email.",
      });
      return;
    }

    setStatus({ state: "sending", message: "Inscribing and delivering dispatch..." });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({
        state: "success",
        message: "Dispatch received. Thank you — I shall reply within 24 hours.",
      });
      setFormValues({
        from_name: "",
        reply_to: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: "An interruption occurred. Please reach out via direct mail.",
      });
    }
  };

  return (
    <section id="contact" className="sketch-section sketch-contact">
      <div className="sketch-container">
        {/* Section Heading */}
        <div className="sketch-heading">
          <h2 className="sketch-heading__title">{content.title || "Let's Converse & Collaborate"}</h2>
          <p className="sketch-heading__subtitle">{content.subtitle}</p>
        </div>

        {/* Dispatch Paper Container */}
        <div className="sketch-dispatch-card">
          {/* Left Column: Direct Communication Channels */}
          <div className="sketch-dispatch-card__info">
            <h3 className="sketch-dispatch-card__header-title">Direct Inquiries</h3>
            <p className="sketch-paragraph">
              Always welcoming discussions regarding full-stack software development, 
              frontend UI innovations, or exploratory conversations.
            </p>

            <div className="sketch-dispatch-channels">
              {content.details.map((item) => (
                <div key={item.label} className="sketch-dispatch-channel">
                  <span className="sketch-dispatch-channel__label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="sketch-dispatch-channel__value sketch-dispatch-channel__link"
                      target={item.type === "location" ? "_blank" : undefined}
                      rel={item.type === "location" ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="sketch-dispatch-channel__value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {content.availability && (
              <div className="sketch-dispatch-availability">
                <span className="sketch-dispatch-availability__dot" />
                <span className="sketch-dispatch-availability__txt">{content.availability}</span>
              </div>
            )}
          </div>

          {/* Right Column: Correspondence Dispatch Form */}
          <form
            ref={formRef}
            className="sketch-dispatch-form"
            onSubmit={handleSubmit}
            aria-busy={status.state === "sending"}
          >
            <div className="sketch-form-row">
              <div className="sketch-form-group">
                <label htmlFor="contact-from-name" className="sketch-label">Your Name</label>
                <input
                  id="contact-from-name"
                  type="text"
                  name="from_name"
                  placeholder="Your full name"
                  value={formValues.from_name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className="sketch-input"
                />
              </div>

              <div className="sketch-form-group">
                <label htmlFor="contact-reply-to" className="sketch-label">Your Email Address</label>
                <input
                  id="contact-reply-to"
                  type="email"
                  name="reply_to"
                  placeholder="you@example.com"
                  value={formValues.reply_to}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="sketch-input"
                />
              </div>
            </div>

            <div className="sketch-form-group">
              <label htmlFor="contact-subject" className="sketch-label">Subject / Purpose</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="e.g. Opportunity or Technical Inquiry"
                value={formValues.subject}
                onChange={handleChange}
                required
                className="sketch-input"
              />
            </div>

            <div className="sketch-form-group">
              <label htmlFor="contact-message" className="sketch-label">Your Dispatch / Message</label>
              <textarea
                id="contact-message"
                rows="3"
                name="message"
                placeholder="Write your note here..."
                value={formValues.message}
                onChange={handleChange}
                required
                className="sketch-textarea"
              />
            </div>

            <button
              className="sketch-btn sketch-btn--primary sketch-btn--submit"
              type="submit"
              disabled={status.state === "sending"}
            >
              <span>{status.state === "sending" ? "Transmitting..." : "Send Correspondence"}</span>
              <span className="sketch-btn__arrow">&rarr;</span>
            </button>

            {status.message && (
              <p className={`sketch-form-status sketch-form-status--${status.state}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
