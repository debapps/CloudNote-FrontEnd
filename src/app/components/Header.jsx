import Logo from "./Logo";
import NavBar from "./NavBar";
import AuthButtons from "./AuthButtons";
import VerticalMenu from "./VerticalMenu";
import { navData } from "../../../public/data/navData";

// Header Element.
export default function Header() {
    return (
        <header className="p-10 bg-gray-50 shadow-lg shadow-blue-100 opacity-90 flex flex-row justify-between items-center">
            <span className="order-1 md:hidden">
                <VerticalMenu links={navData} />
            </span>
            <span className="order-2 md:order-1">
                <Logo text="CloudNote" />
            </span>
            <span className="hidden md:order-2 md:block">
                <NavBar links={navData} />
            </span>
            <span className="order-3">
                <AuthButtons />
            </span>
        </header>
    );
}
