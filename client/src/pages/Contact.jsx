import { useState } from "react";
import { toast } from "react-toastify";
import PublicLayout from "../components/shared/Layout/PublicLayout";
import PageHero from "../components/marketing/PageHero";
import { images } from "../components/marketing/marketingImages";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    toast.success("Thank you! We will get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PublicLayout>
      <PageHero
        title="Contact us"
        subtitle="Questions about the platform, partnerships, or urgent coordination? Send us a message and we will respond as soon as possible."
        image={images.contact}
        imageAlt="Communication and support"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-primary-dark">Get in touch</h2>
            <p className="text-sm text-primary-dark/70 leading-relaxed">
              For medical emergencies, contact your hospital directly. This form
              is for platform support, feedback, and non-emergency enquiries.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-primary-dark/80">
                <MdEmail size={20} className="text-primary-green shrink-0 mt-0.5" />
                <span>support@raktseva.org</span>
              </li>
              <li className="flex items-start gap-3 text-primary-dark/80">
                <MdPhone size={20} className="text-primary-green shrink-0 mt-0.5" />
                <span>+91 1800-000-0000 (placeholder)</span>
              </li>
              <li className="flex items-start gap-3 text-primary-dark/80">
                <MdLocationOn
                  size={20}
                  className="text-primary-green shrink-0 mt-0.5"
                />
                <span>India — serving hospitals and blood banks nationwide</span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-primary-dark/10 p-6 sm:p-8 bg-primary-light shadow-sm space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-primary-dark">
                  Name *
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2.5 rounded-xl border border-primary-dark/15 focus:outline-none focus:ring-2 focus:ring-primary-green/40"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-primary-dark">
                  Email *
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2.5 rounded-xl border border-primary-dark/15 focus:outline-none focus:ring-2 focus:ring-primary-green/40"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-primary-dark">
                Subject
              </span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-primary-dark/15 focus:outline-none focus:ring-2 focus:ring-primary-green/40"
                placeholder="How can we help?"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-primary-dark">
                Message *
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-primary-dark/15 focus:outline-none focus:ring-2 focus:ring-primary-green/40 resize-y"
                placeholder="Tell us more..."
              />
            </label>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary-green text-primary-light font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
}
