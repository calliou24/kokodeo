import LogoIcon from "../../assets/images/componentIcons/logoIcon";
// import { ReactComponent as Logo } from "../../assets/images/only-title.svg";

export const NavBar = (props) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        // padding: "15px 0 ",
      }}
    >
      <LogoIcon />
    </nav>
  );
};
