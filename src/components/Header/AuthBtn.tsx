import { Button } from "../../styled/Header/AuthBtnStyles";

interface AuthBtnProps {
    isLoggedIn: boolean;
}

const UserIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" />
        <circle cx="10" cy="8" r="3" fill="white" />
        <path
            d="M5 16.5C5 14 7 12.5 10 12.5C13 12.5 15 14 15 16.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

const AuthBtn: React.FC<AuthBtnProps> = ({ isLoggedIn }) => {
    return (
        <Button>
            <UserIcon />
            {isLoggedIn ? "MY PROFILE" : "LOGIN"}
        </Button>
    );
};

export default AuthBtn;
