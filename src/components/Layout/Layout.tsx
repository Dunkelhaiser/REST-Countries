import LayoutStyles from "./Layout.module.css";

interface Props {
    children: React.ReactNode;
    className: string;
}

const Layout: React.FC<Props> = ({ children, className }) => {
    return <section className={`${LayoutStyles.layout} ${LayoutStyles[className]}`}>{children}</section>;
};
export default Layout;
