import { MdOutlineInventory } from "react-icons/md";
import { PiHospitalFill } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";

export const userMenu = [
  { name: "Inventory", path: "/", icon: MdOutlineInventory },
  { name: "Donor", path: "/donor", icon: FiUser },
  { name: "Hospital", path: "/hospital", icon: PiHospitalFill },
  { name: "Organisation", path: "/organisation", icon: GoOrganization },
];
