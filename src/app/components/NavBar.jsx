import Link from "next/link";

export default function NavBar({ links }) {
    return (
        <nav className="flex flex-row justify-between items-center space-x-4">
            {links.map((link, idx) => {
                return (
                    <Link
                        className="p-2 font-righteous text-xl text-black hover:bg-brand-color rounded-md"
                        key={idx}
                        href={link.href}>
                        {link.title}
                    </Link>
                );
            })}
        </nav>
    );
}
