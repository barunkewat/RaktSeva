import PublicLayout from "../components/shared/Layout/PublicLayout";
import PageHero from "../components/marketing/PageHero";
import { images } from "../components/marketing/marketingImages";

const values = [
  {
    title: "Transparency",
    text: "Inventory and donation records are visible to authorised users so decisions are based on facts, not guesswork.",
  },
  {
    title: "Speed",
    text: "When minutes matter, hospitals and organisations can coordinate faster through a single shared system.",
  },
  {
    title: "Community",
    text: "Donors are at the heart of the network—we celebrate every contribution and make it easy to stay involved.",
  },
];

export default function About() {
  return (
    <PublicLayout>
      <PageHero
        title="About RaktSeva"
        subtitle="RaktSeva (रक्त सेवा — service of blood) was built to bridge the gap between those who can give blood and those who need it, with tools tailored for Indian hospitals and blood banks."
        image={images.about}
        imageAlt="Healthcare professionals working together"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark">Our mission</h2>
            <p className="mt-4 text-primary-dark/70 leading-relaxed">
              Every year, countless patients depend on timely blood availability.
              Fragmented records, phone chains, and outdated stock lists delay
              care. RaktSeva centralises inventory management, donor engagement,
              and hospital requests so life-saving blood moves with less friction.
            </p>
            <p className="mt-4 text-primary-dark/70 leading-relaxed">
              We support donors who want to give regularly, organisations that
              maintain stock, hospitals that serve patients, and administrators
              who oversee the ecosystem—with role-based dashboards for each.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src={images.community}
              alt="Volunteers and community support"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-green/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-primary-dark text-center">
            What we stand for
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-primary-light rounded-2xl p-6 border border-primary-green/10"
              >
                <h3 className="text-lg font-bold text-primary-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-primary-dark/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
