import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import AuthBtn from "../authBtn/AuthBtn";
import { HeaderWrapper } from "./HeaderStyles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavMenu />
      <AuthBtn isLoggedIn={false} />
    </HeaderWrapper>
  );
};

export default Header;
