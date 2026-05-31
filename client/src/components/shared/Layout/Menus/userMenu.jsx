import { MdOutlineInventory } from "react-icons/md";
import { PiHospitalFill } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";
import { SiGoogleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { TbChartLine } from "react-icons/tb";

const sharedItems = [
  { icon: SiGoogleanalytics, label: "Analytics", to: "/analytics" },
  { icon: IoSettingsOutline, label: "Settings", to: "/settings" },
];

export function getRoleHomePath(role) {
  switch (role) {
    case "admin":
      return "/admin";
    case "organisation":
      return "/inventory";
    case "donor":
      return "/organisation";
    case "hospital":
      return "/consumer";
    default:
      return "/blood";
  }
}

export function getProfileMenuItems(role) {
  switch (role) {
    case "organisation":
      return [
        { icon: MdOutlineInventory, label: "Inventory", to: "/inventory" },
        { icon: FiUser, label: "Donor", to: "/donor" },
        { icon: PiHospitalFill, label: "Hospital", to: "/hospital" },
        ...sharedItems,
      ];

    case "admin":
      return [
        { icon: MdOutlineInventory, label: "Donor List", to: "/donor-list" },
        { icon: FiUser, label: "Hospital List", to: "/hospital-list" },
        {
          icon: PiHospitalFill,
          label: "Organisation List",
          to: "/organisation-list",
        },
        { icon: TbChartLine, label: "Demand Forecast", to: "/forecast" },
        ...sharedItems,
      ];

    case "donor":
      return [
        { icon: GoOrganization, label: "Organisation", to: "/organisation" },
        { icon: MdHistory, label: "Donation History", to: "/donation" },
        ...sharedItems,
      ];

    case "hospital":
      return [
        { icon: GoOrganization, label: "Organisation", to: "/organisation" },
        { icon: FiUser, label: "Consumer", to: "/consumer" },
        ...sharedItems,
      ];

    default:
      return [];
  }
}
