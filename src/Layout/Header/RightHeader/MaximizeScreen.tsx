import { useState } from "react";
import { Maximize } from "react-feather";
import { NavLink } from "reactstrap";
import { Href } from "@/Constant";

const MaximizeScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenHandler = (isFullScreen: boolean) => {
    setFullScreen(isFullScreen);
    if (isFullScreen) document.documentElement.requestFullscreen();
    else document?.exitFullscreen();
  };

  return (
    <li onClick={() => fullScreenHandler(!fullScreen)}>
      <NavLink href={Href}>
        <Maximize />
      </NavLink>
    </li>
  );
};

export default MaximizeScreen;
