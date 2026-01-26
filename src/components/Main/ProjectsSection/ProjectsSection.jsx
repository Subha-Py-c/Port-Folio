import { ProjectsSection as Desk } from "./Desk";
import { ProjectsSection as Mob } from "./Mob";

export default function Exp() {
  return (
    <div>
      <div className="hidden md:block">
        <Desk />
      </div>
      <div className="md:hidden">
        <Mob />
      </div>
    </div>
  );
}
