import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRoleHomePath } from "../shared/Layout/Menus/userMenu";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";

export default function MarketingCTA({
  primaryLabel = "Get started",
  primaryGuestTo = "/register",
  secondaryLabel,
  secondaryTo,
  layout = "row",
  className = "",
}) {
  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = useIsLoggedIn();
  const dashboardPath = getRoleHomePath(user?.role);

  const layoutClass =
    layout === "column"
      ? "flex flex-col gap-3"
      : "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4";

  if (isLoggedIn) {
    return (
      <div className={`${layoutClass} ${className}`}>
        <Link
          to="/blood"
          className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-primary-red text-primary-light font-semibold hover:opacity-90 transition-opacity"
        >
          View blood availability
        </Link>
        <Link
          to={dashboardPath}
          className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-primary-green text-primary-light font-semibold hover:opacity-90 transition-opacity"
        >
          Go to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className={`${layoutClass} ${className}`}>
      <Link
        to={primaryGuestTo}
        className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-primary-red text-primary-light font-semibold hover:opacity-90 transition-opacity"
      >
        {primaryLabel}
      </Link>
      {secondaryLabel && secondaryTo && (
        <Link
          to={secondaryTo}
          className="w-full sm:w-auto text-center px-6 py-3 rounded-full border-2 border-primary-green text-primary-green font-semibold hover:bg-primary-green/10 transition-colors"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
}

