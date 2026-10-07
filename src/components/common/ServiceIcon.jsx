import {
  Bug,
  Bird,
  Rat,
  Wind,
  ShieldCheck,
  Leaf,
  House,
  Moon,
} from "lucide-react";
const icons = { Bug, Bird, Rat, Wind, ShieldCheck, Leaf, House, Moon };
export default function ServiceIcon({ name = "Bug", ...props }) {
  const Icon = icons[name] || Bug;
  return <Icon {...props} />;
}
