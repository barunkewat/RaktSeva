import { Link } from "react-router-dom";
import PublicLayout from "../components/shared/Layout/PublicLayout";
import PageHero from "../components/marketing/PageHero";
import MarketingCTA from "../components/marketing/MarketingCTA";
import { images } from "../components/marketing/marketingImages";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";
import { getRoleHomePath } from "../components/shared/Layout/Menus/userMenu";
import { useSelector } from "react-redux";

const eligibility = [
  "Age 18–65 (varies by centre; check local guidelines)",
  "Minimum weight around 50 kg",
  "Good general health on the day of donation",
  "At least 3 months since your last whole blood donation",
  "Not currently ill, on certain medications, or at risk per screening",
];

const tips = [
  "Sleep well and eat a healthy meal before donating.",
  "Stay hydrated—drink extra water before and after.",
  "Bring a valid ID and any donor card if you have one.",
  "Rest for a few minutes after donation and avoid heavy exercise that day.",
];

export default function DonateBlood() {
  const isLoggedIn = useIsLoggedIn();
  const { user } = useSelector((state) => state.auth);

  return (
    <PublicLayout>
      <PageHero
        title="Donate blood"
        subtitle="One donation can save up to three lives. Learn what to expect, check basic eligibility, and register on RaktSeva to connect with organisations near you."
        image={images.donate}
        imageAlt="Blood donation process"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="md:flex md:flex-col md:justify-center md:items-start">
            <h2 className="text-2xl font-bold text-primary-dark">
              Why donate through RaktSeva?
            </h2>
            <p className="mt-4 text-primary-dark/70 leading-relaxed">
              When you register as a donor, your profile—including blood
              group—helps organisations plan drives and reach out when stock is
              low. You can track your donation history and stay connected to the
              hospitals and blood banks in our network.
            </p>
            <MarketingCTA
              primaryLabel="Register as a donor"
              primaryGuestTo="/register"
              className="mt-6"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg aspect-4/3">
            <img
              src={images.hero}
              alt="Donor giving blood"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-green/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-xl font-bold text-primary-dark">
              Basic eligibility
            </h2>
            <p className="text-sm text-primary-dark/60 mt-1">
              Final eligibility is determined by the blood bank at screening.
            </p>
            <ul className="mt-6 space-y-3">
              {eligibility.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-primary-dark/80"
                >
                  <span className="text-primary-green font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary-dark">
              Before you donate
            </h2>
            <ul className="mt-6 space-y-3">
              {tips.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-primary-dark/80"
                >
                  <span className="text-primary-red font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {!isLoggedIn && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="text-primary-dark/70">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-primary-green font-semibold hover:underline"
            >
              Sign in
            </Link>{" "}
            to view your dashboard and donation history.
          </p>
        </section>
      )}

      {isLoggedIn && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="text-primary-dark/70 mb-4">
            You are signed in. View available blood stock or go to your
            dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/blood"
              className="px-6 py-3 rounded-full bg-primary-red text-primary-light font-semibold"
            >
              View blood availability
            </Link>
            <Link
              to={getRoleHomePath(user?.role)}
              className="px-6 py-3 rounded-full bg-primary-green text-primary-light font-semibold"
            >
              Go to dashboard
            </Link>
          </div>
        </section>
      )}
    </PublicLayout>
  );
}
