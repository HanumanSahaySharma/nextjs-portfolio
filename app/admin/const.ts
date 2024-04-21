import {
  Home,
  User,
  Briefcase,
  Settings,
  Shapes,
  GripVertical,
  MessageSquareQuote,
  Mail,
} from "lucide";

export const MENUS = [
  { id: "home", label: "Home", url: "/admin", icon: Home },
  { id: "about", label: "About", url: "/admin/about", icon: User },
  {
    id: "experience",
    label: "Experience",
    url: "/admin/experience",
    icon: Briefcase,
  },
  { id: "skills", label: "Sklls", url: "/admin/skills", icon: Shapes },
  {
    id: "portfolio",
    label: "Portfolio",
    url: "/admin/portfolio",
    icon: GripVertical,
  },
  {
    id: "testimonials",
    label: "Testimonials",
    url: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  { id: "contact", label: "Contact", url: "/admin/contact", icon: Mail },
];
