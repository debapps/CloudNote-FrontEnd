"use client";
import HeroElement from "./components/HeroElement";
import { heroData } from "../../public/data/webStaticData";
import { useSession } from "next-auth/react";
import ProgressCircle from "./components/ProgressCircle";
import NoteDashboard from "./components/NoteDashboard";

export default function Home() {
    // Get the next auth session.
    const { data, status } = useSession();

    if (status === "loading") {
        return (
            <main className="min-h-screen px-10 py-10 md:py-36">
                <ProgressCircle active={true} />
            </main>
        );
    } else if (status === "authenticated") {
        return (
            <main className="min-h-screen px-10 py-10 md:py-36">
                <NoteDashboard userData={data} />
            </main>
        );
    } else {
        return <HeroElement heroData={heroData} />;
    }
}
