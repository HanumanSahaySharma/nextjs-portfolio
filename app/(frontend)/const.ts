import {
  LuHome,
  LuUser,
  LuBriefcase,
  LuShapes,
  LuGripVertical,
  LuMessageSquare,
  LuMail,
} from "react-icons/lu";

export const MENUS = [
  { id: "home", label: "Home", url: "/", icon: LuHome },
  { id: "about", label: "About", url: "/about", icon: LuUser },
  {
    id: "experience",
    label: "Experience",
    url: "/experience",
    icon: LuBriefcase,
  },
  { id: "skills", label: "Sklls", url: "/skills", icon: LuShapes },
  {
    id: "portfolio",
    label: "Portfolio",
    url: "/portfolio",
    icon: LuGripVertical,
  },
  {
    id: "testimonials",
    label: "Testimonials",
    url: "/testimonials",
    icon: LuMessageSquare,
  },
  { id: "contact", label: "Contact", url: "/contact", icon: LuMail },
];
