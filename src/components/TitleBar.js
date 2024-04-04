import { Typography } from "react-windows-xp";
import logo from "../assets/logo.png";

export default function TitleBar() {
  return (
    <div className="title-bar2 h-12 flex flex-row items-center">
      <img src={logo} alt="deadbeads logo" className="h-5/6 ml-2 mr-4" />
      <Typography pixelated variant="heading" className="text-white">
        deadbeads
      </Typography>
    </div>
  );
}
