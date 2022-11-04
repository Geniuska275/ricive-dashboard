import {
  ChatAltIcons,
  CogIcon,
  HomeIcon,
  LogoutIcon,
  PencilIcon,
  ShoppingCartIcon,
  TemplateIcon,
  UserIcon,
} from "@heroicons/react/outline";
import ChartSquareBarIcon from "@heroicons/react/outline/ChartSquareBarIcon";
import { FaUsers } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon className="Nav-icon" />,
  },
  { id: 2, title: "Dashboard", icon: <MdDashboard className="Nav-icon" /> },
  {
    id: 3,
    title: "Projects",
    icon: <ChartSquareBarIcon className="Nav-icon" />,
  },
  { id: 4, title: "Tasks", icon: <FaTasks className="Nav-icon" /> },
  { id: 5, title: "Reporting", icon: <LogoutIcon className="Nav-icon" /> },
  { id: 6, title: "Users", icon: <FaUsers className="Nav-icon" /> },
  { id: 7, title: "Support", icon: <LogoutIcon className="Nav-icon" /> },
  { id: 8, title: "Settings", icon: <CogIcon className="Nav-icon" /> },
];
