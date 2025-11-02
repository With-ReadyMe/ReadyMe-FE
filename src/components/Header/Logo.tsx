import { LogoLink, LogoImage } from "../../styled/Header/LogoStyles";

const Logo: React.FC = () => {
    return (
        <LogoLink to="/">
            <LogoImage src="/logo.svg" alt="ReadyMe logo" />
        </LogoLink>
    );
};

export default Logo;
