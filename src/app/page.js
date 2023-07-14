import Image from "next/image";
import Logo from "../../public/images/CloudNote Logo.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-5xl font-russo text-brand-color bg-blue-900 p-5">
                Welcome to the Cloud Note Application
            </h1>
            <Image
                className="w-[100px] rounded-full"
                src={Logo}
                alt="CloudNote Logo"
            />
        </main>
    );
}
