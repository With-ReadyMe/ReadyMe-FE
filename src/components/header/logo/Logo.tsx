import { LogoLink, LogoImage } from "./LogoStyles";

const Logo: React.FC = () => {
  return (
    <LogoLink to="/">
      <LogoImage src="/logo.svg" alt="ReadyMe logo" />
    </LogoLink>
  );
};

export default Logo;
