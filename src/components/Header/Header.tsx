import Logo from "./Logo";
import NavMenu from "./NavMenu";
import AuthBtn from "./AuthBtn";
import { HeaderWrapper } from "../../styled/Header/HeaderStyles";

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
