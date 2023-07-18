"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useRouter } from "next/navigation";
import { getDateFormatted } from "@/utils/FormatDate";

const theme = createTheme({
    palette: {
        primary: {
            // brand color
            main: "#FDE047",
        },
        secondary: {
            // bg-blue-950
            main: "#172554",
        },
    },
});

export default function NoteDetails({ title, content, updatedAt }) {
    // Get the next router.
    const router = useRouter();

    return (
        <main className="min-h-screen px-10 py-10 md:px-20 md:py-36 flex flex-col justify-center items-start space-y-8">
            <section>
                <h1 className="text-2xl md:text-5xl font-righteous pb-5 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-brand-color">
                    {title}
                </h1>
                <p className="text-xs md:text-sm font-poppins font-thin text-gray-500 italic">
                    Last Update On: {getDateFormatted(updatedAt)}
                </p>
            </section>
            <section className="text-lg md:text-xl font-poppins font-normal text-gray-800 flex flex-col justify-center items-center space-y-5">
                <p>{content}</p>
            </section>
            <section className="bg-blue-950 shadow-lg shadow-brand-color rounded-full">
                <ThemeProvider theme={theme}>
                    <IconButton
                        onClick={() => {
                            router.push("/");
                        }}
                        aria-label="back"
                        size="large"
                        color="primary">
                        <ArrowCircleLeftIcon />
                    </IconButton>
                </ThemeProvider>
            </section>
        </main>
    );
}
