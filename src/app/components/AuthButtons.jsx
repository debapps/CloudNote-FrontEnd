"use client";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
    // Next router.
    const router = useRouter();

    // Get auth session.
    const { data, status } = useSession();

    return (
        <section className="flex flex-col md:flex-row md:justify-center items-center">
            {status === "authenticated" ? (
                <button
                    onClick={() => signOut()}
                    className="w-32 text-center font-righteous font-semibold text-base sm:text-xl px-5 py-1 rounded sm:rounded border-2 hover:border-black sm:m-2 bg-brand-color text-black hover:bg-white">
                    Sign Out
                </button>
            ) : (
                <div>
                    <button
                        onClick={() => router.push("/signup")}
                        className="w-32 text-center font-righteous font-semibold text-base sm:text-xl px-5 py-1 rounded sm:rounded border-2 hover:border-black sm:m-2 bg-brand-color text-black hover:bg-white mb-2 mr-2">
                        Sign Up
                    </button>
                    <button
                        onClick={() => router.push("/signin")}
                        className="w-32 text-center font-righteous font-semibold text-base sm:text-xl px-5 py-1 rounded sm:rounded border-2 border-black sm:m-2 bg-white text-brand-color hover:bg-brand-color hover:text-black">
                        Sign In
                    </button>
                </div>
            )}
        </section>
    );
}
