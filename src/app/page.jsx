"use client";
import HeroElement from "./components/HeroElement";
import { heroData } from "../../public/data/webStaticData";
import { useSession } from "next-auth/react";

export default function Home() {
    // Get the next auth session.
    const { data, status } = useSession();

    if (status === "authenticated") {
        return (
            <main className="min-h-screen px-10 py-36">
                <p className="text-3xl text-brand-color font-righteous text-center">
                    Hello, {data.user.name}
                </p>
            </main>
        );
    } else {
        return <HeroElement heroData={heroData} />;
    }
}
