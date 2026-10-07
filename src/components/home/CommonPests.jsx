import PestServices from "./PestServices";
import { pestServices } from "../../data/pestServices";
export default function CommonPests() {
  return (
    <PestServices
      items={pestServices.slice(0, 6)}
      compact
      title="Common household pests"
    />
  );
}
