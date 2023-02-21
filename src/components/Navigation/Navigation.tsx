import NavStyles from "./Navigation.module.css";

interface Props {
    children: React.ReactNode;
}

const Navigation: React.FC<Props> = ({ children }) => {
    return <nav className={NavStyles.nav}>{children}</nav>;
};

export default Navigation;
