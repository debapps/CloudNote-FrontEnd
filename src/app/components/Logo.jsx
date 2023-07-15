import Image from "next/image";
import logo from "../../../public/images/CloudNote_Logo.png";
import Link from "next/link";

export default function Logo({ text }) {
    return (
        <section className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-2 md:space-x-2">
            <Image
                className="rounded-full"
                src={logo}
                alt="Logo Image"
                width={80}
                height={80}
            />
            <Link
                href="/"
                className="text-xl md:text-4xl font-russo tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-brand-color to-red-700 px-2 py-1">
                {text}
            </Link>
        </section>
    );
}
