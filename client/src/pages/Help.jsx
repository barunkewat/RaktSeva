import { Link } from "react-router-dom";
import PublicLayout from "../components/shared/Layout/PublicLayout";
import PageHero from "../components/marketing/PageHero";
import { images } from "../components/marketing/marketingImages";

const faqs = [
  {
    q: "I need blood urgently. What should I do?",
    a: "Contact your hospital or treating doctor first. They can coordinate with registered organisations on RaktSeva. You can also use our Contact page to reach our team—we will guide you to next steps.",
  },
  {
    q: "How do I register as a donor?",
    a: "Click Get started or Sign up, choose the donor role, and complete your profile including blood group. Once registered, you can view organisations and track donations from your dashboard.",
  },
  {
    q: "Who can see blood inventory?",
    a: "Inventory visibility depends on your role. Organisations manage stock; authorised hospital and admin users can view records relevant to their access level.",
  },
  {
    q: "Is donating blood safe?",
    a: "Yes, when done at licensed blood banks with proper screening. Always donate through verified centres. RaktSeva helps you find and coordinate with registered organisations—it does not replace medical professionals.",
  },
  {
    q: "I forgot my password. How do I sign in?",
    a: "Use the login page with your registered email. If you still cannot access your account, contact us with the email you used to register and we will assist you.",
  },
];

const urgentSteps = [
  "Call your hospital emergency desk or treating physician.",
  "Note the required blood group and units if known.",
  "Ask if they use RaktSeva or a partner blood bank.",
  "Reach us via Contact if you need platform support.",
];

export default function Help() {
  return (
    <PublicLayout>
      <PageHero
        title="Need help?"
        subtitle="Find answers to common questions, steps for urgent blood needs, and ways to get in touch with our team."
        image={images.help}
        imageAlt="Medical support and assistance"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl border-2 border-primary-red/30 bg-primary-red/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-primary-red">
            Urgent blood requirement
          </h2>
          <p className="mt-2 text-primary-dark/70 text-sm">
            In a medical emergency, always follow your doctor and hospital first.
            Use this checklist while they coordinate care:
          </p>
          <ol className="mt-4 space-y-2">
            {urgentSteps.map((step, i) => (
              <li
                key={step}
                className="flex gap-3 text-primary-dark/80 text-sm"
              >
                <span className="font-bold text-primary-red">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <Link
            to="/contact"
            className="inline-block mt-6 px-5 py-2.5 rounded-full bg-primary-red text-primary-light text-sm font-semibold"
          >
            Contact support
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold text-primary-dark mb-8">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-primary-dark/10 bg-primary-light overflow-hidden"
            >
              <summary className="cursor-pointer px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-semibold text-primary-dark list-none flex justify-between items-start sm:items-center gap-3 sm:gap-4">
                <span className="pr-2">{faq.q}</span>
                <span className="text-primary-green text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="px-5 pb-4 text-sm text-primary-dark/70 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
