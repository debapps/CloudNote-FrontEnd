import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <footer className="px-5 py-10 border-t-[0.5px] border-gray-300 bg-gray-50 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-4 sm:space-x-5">
                <Logo text="CloudNote" />
                {/* Virtical Divider */}
                <span className="hidden sm:block sm:border-l-2 sm:border-l-gray-500 sm:h-10"></span>
                {/* Copyright Text */}
                <p className="font-poppins font-light text-xs">
                    © {new Date().getFullYear()} - Debaditya Bhar
                </p>
            </div>
            <SocialIcons />
        </footer>
    );
}
