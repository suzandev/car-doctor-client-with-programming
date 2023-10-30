import { Button, Navbar as FNavbar } from "flowbite-react";
import Logo from "../../../Logo/Logo";
import { NavData } from "../../../Data/Data";
import { useMatch } from "react-router-dom";

const Navbar = () => {
  const activeMatch = useMatch;
  return (
    <FNavbar fluid rounded>
      <FNavbar.Brand href="https://flowbite-react.com">
        <Logo />
      </FNavbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
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
              {NavData.NavItem}
            </FNavbar.Link>
          );
        })}
      </FNavbar.Collapse>
    </FNavbar>
  );
};

export default Navbar;

// 58-2, 07.39
