import { Link } from "react-router-dom";

import PublicLayout from "../components/shared/Layout/PublicLayout";
import MarketingCTA from "../components/marketing/MarketingCTA";
import { images } from "../components/marketing/marketingImages";

import { BiSolidDonateBlood } from "react-icons/bi";
import { MdOutlineBloodtype, MdLocalHospital } from "react-icons/md";
import { GoOrganization } from "react-icons/go";

const features = [
  {
    icon: BiSolidDonateBlood,
    title: "Donor-first experience",
    description:
      "Register as a donor, track your donations, and stay connected with organisations that need your blood group.",
    image: images.donate,
  },
  {
    icon: MdLocalHospital,
    title: "Hospital coordination",
    description:
      "Hospitals request and manage blood needs while viewing nearby organisations and available inventory.",
    image: images.hospital,
  },
  {
    icon: GoOrganization,
    title: "Organisation inventory",
    description:
      "Blood banks and NGOs maintain real-time stock levels, in/out records, and donor linkage in one dashboard.",
    image: images.inventory,
  },
];

const steps = [
  "Create an account as a donor, hospital, or organisation.",
  "Organisations log inventory; donors see where they can help.",
  "Hospitals coordinate requests when patients need blood urgently.",
];

export default function Landing() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative min-h-fit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Text + CTA */}
            <div className="order-1 lg:order-1">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-green mb-3">
                Blood donation, simplified
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight">
                Save lives with{" "}
                <span className="gradient-text">RaktSeva</span>
              </h1>
              <p className="mt-6 text-lg text-primary-dark/70 max-w-lg leading-relaxed">
                RaktSeva is a platform that connects donors, hospitals, and
                blood organisations—so the right blood reaches the right patient
                at the right time.
              </p>
              <MarketingCTA
                primaryLabel="Get started"
                primaryGuestTo="/register"
                secondaryLabel="Donate blood"
                secondaryTo="/blood"
                align="left"
                className="mt-6 sm:mt-8"
              />
            </div>

            {/* Right: Image + floating badge */}
            <div className="order-2 lg:order-2 relative pb-4 lg:pb-16">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-video sm:aspect-4/3">
                <img
                  src={images.hero}
                  alt="Blood donation and healthcare teamwork"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-4 lg:-left-4 xl:-bottom-6 xl:-left-6 bg-primary-light rounded-2xl shadow-lg p-3 sm:p-4 border border-primary-green/20 max-w-full">
                <div className="flex items-center gap-2 sm:gap-3">
                  <MdOutlineBloodtype
                    size={28}
                    className="text-primary-red shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-bold text-primary-dark">
                      One platform
                    </p>
                    <p className="text-xs sm:text-sm text-primary-dark/60">
                      Donors · Hospitals · Organisations
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-red text-primary-light py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: "24/7", label: "Inventory visibility" },
              { value: "4+", label: "User roles supported" },
              { value: "Real-time", label: "Stock tracking" },
              { value: "India", label: "Built for local needs" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lg sm:text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-xs sm:text-sm text-primary-light/80 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center">
            What you can do on RaktSeva
          </h2>
          <p className="text-center text-primary-dark/60 mt-3 max-w-2xl mx-auto">
            Whether you donate, run a blood bank, or manage a hospital, the
            platform is built around transparent blood availability.
          </p>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-primary-dark/10 overflow-hidden bg-primary-light hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={feature.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Icon size={28} className="text-primary-green mb-3" />
                    <h3 className="text-xl font-bold text-primary-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-primary-dark/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-primary-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 rounded-2xl overflow-hidden shadow-lg aspect-video sm:aspect-4/3">
              <img
                src={images.community}
                alt="Community and volunteers united for a cause"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark">
                How it works
              </h2>
              <ol className="mt-8 space-y-4">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-green text-primary-light text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-primary-dark/80 pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
              <Link
                to="/about"
                className="inline-block mt-8 text-primary-green font-semibold hover:underline"
              >
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="w-full flex flex-col justify-center items-center mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-dark">
            Ready to make a difference?
          </h2>
          <p className="mt-4 text-primary-dark/70">
            Join RaktSeva today—or reach out if you need urgent help locating
            blood.
          </p>
          <MarketingCTA
            primaryLabel="Sign up free"
            primaryGuestTo="/register"
            secondaryLabel="Need help now?"
            secondaryTo="/help"
            layout="row"
            className="mt-8 w-full"
          />
        </div>
      </section>
    </PublicLayout>
  );
}