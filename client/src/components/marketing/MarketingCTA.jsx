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
  align = "center",
  className = "",
}) {
  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = useIsLoggedIn();
  const dashboardPath = getRoleHomePath(user?.role);

  const alignClass =
    align === "left"
      ? "sm:items-start sm:justify-start"
      : "sm:items-center sm:justify-center";

  const layoutClass =
    layout === "column"
      ? "flex flex-col items-center gap-3"
      : `flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 ${alignClass}`;

  const btnSolid =
    "w-full max-w-xs sm:w-auto sm:max-w-none text-center px-6 py-3 rounded-full font-semibold transition-opacity";

  if (isLoggedIn) {
    return (
      <div className={`${layoutClass} ${className}`}>
        <Link
          to="/blood"
          className={`${btnSolid} bg-primary-red text-primary-light hover:opacity-90`}
        >
          View blood availability
        </Link>
        <Link
          to={dashboardPath}
          className={`${btnSolid} bg-primary-green text-primary-light hover:opacity-90`}
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
        className={`${btnSolid} bg-primary-red text-primary-light hover:opacity-90`}
      >
        {primaryLabel}
      </Link>
      {secondaryLabel && secondaryTo && (
        <Link
          to={secondaryTo}
          className={`${btnSolid} bg-primary-green text-primary-light hover:bg-primary-green/90`}
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
}