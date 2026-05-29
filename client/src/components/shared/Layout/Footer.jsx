import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/about", label: "About Us" },
  { to: "/help", label: "Need Help" },
  { to: "/contact", label: "Contact" },
  { to: "/blood", label: "Donate Blood" },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary-dark/10 bg-primary-dark text-primary-light mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-2xl sm:text-3xl font-bold">RaktSeva</p>
            <p className="text-sm text-primary-light/60 mt-1 max-w-md">
              Connecting donors, hospitals, and blood banks to save lives
              through smarter inventory and coordination.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-primary-light/70 hover:text-primary-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="text-xs text-primary-light/40 mt-8 pt-6 border-t border-primary-light/10">
          © {new Date().getFullYear()} RaktSeva. Every drop counts.
        </p>
      </div>
    </footer>
  );
}
