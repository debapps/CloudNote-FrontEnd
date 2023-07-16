"use client";
import HeroElement from "./components/HeroElement";
import { heroData } from "../../public/data/webStaticData";
import { useSession } from "next-auth/react";

export default function Home() {
    // Get the next auth session.
    const { data, status } = useSession();

    if (status === "authenticated") {
        return (
            <p className="min-h-screen text-3xl text-brand-color font-righteous text-center pt-5">
                Hello, {data.user.name}
            </p>
        );
    } else {
        return <HeroElement heroData={heroData} />;
    }
}
