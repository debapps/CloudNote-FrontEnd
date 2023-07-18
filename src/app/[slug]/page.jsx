"use client";

import { useSession } from "next-auth/react";
import { notFound, useRouter } from "next/navigation";
import ProgressCircle from "../components/ProgressCircle";
import useSWR from "swr";
import { fetcher } from "@/utils/callAPI";
import NoteDetails from "../components/NoteDetails";

export default function SlugNote({ params }) {
    // Get the next auth session.
    const session = useSession();

    // Get the next router.
    const router = useRouter();

    // API Endpoint
    const endPoint = `/api/note/${params.slug}`;

    // Access Token.
    const accessToken = session.data?.user.accessToken;

    // The swr hook.
    const { data, mutate, error, isLoading } = useSWR(
        [endPoint, accessToken],
        fetcher
    );

    // Get the output of the API call.
    if (isLoading) {
        return (
            <main className="min-h-screen px-10 py-20 md:py-36">
                <ProgressCircle active={true} />
            </main>
        );
    } else if (error) {
        return notFound();
    }

    if (session.status === "unauthenticated") {
        router.push("/");
    }

    if (session.status === "authenticated") {
        // Get the note data.
        const { title, content, updatedAt } = data.data;

        return (
            <NoteDetails
                title={title}
                content={content}
                updatedAt={updatedAt}
            />
        );
    }
}
