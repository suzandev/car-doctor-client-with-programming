import { Navbar as FNavbar } from "flowbite-react";
import Logo from "../../../Logo/Logo";
import { NavData } from "../../../Data/Data";
import { useMatch } from "react-router-dom";

const Navbar = () => {
  const activeMatch = useMatch;
  return (
    <FNavbar fluid rounded>
      <FNavbar.Brand href="/">
        <Logo />
      </FNavbar.Brand>
      <div className="flex md:order-2">
        <button className="btn btn-outline btn-secondary">Appointment</button>
        <FNavbar.Toggle />
      </div>
      <FNavbar.Collapse>
        {NavData.map((NavData) => {
          return (
            <FNavbar.Link
              href={NavData.path}
              active={activeMatch(NavData.path)}
              key={NavData.NavItem}
            >
              <div className="md:text-base lg:text-xl">{NavData.NavItem}</div>
            </FNavbar.Link>
          );
        })}
      </FNavbar.Collapse>
    </FNavbar>
  );
};

export default Navbar;
