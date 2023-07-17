"use client";

import NoteCard from "./NoteCard";
import IconButton from "@mui/material/IconButton";
import Zoom from "@mui/material/Zoom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function NoteDashboard({ userData }) {
    return (
        <>
            <Zoom in={true} style={{ transitionDelay: "500ms" }}>
                <div className="bg-blue-950 rounded-full fixed top-48 md:top-auto right-10 shadow-lg shadow-brand-color">
                    <ThemeProvider theme={theme}>
                        <IconButton
                            aria-label="add"
                            size="large"
                            color="primary">
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </ThemeProvider>
                </div>
            </Zoom>

            <div className="bg-emerald-950 p-5 max-w-fit rounded-lg shadow-xl shadow-brand-color">
                <h1 className="text-lg sm:text-2xl font-russo font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-brand-color">
                    Welcome, {userData?.user.name}! Find your notes..
                </h1>
            </div>

            <section className="p-5 flex flex-wrap flex-col sm:flex-row items-center sm:items-start justify-center">
                <NoteCard
                    title="Heading 1"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet hic provident dolor debitis omnis soluta porro
                perspiciatis cupiditate? Ex, tempore. Inventore ex
                suscipit laudantium incidunt odio numquam repellendus
                accusamus est!"
                    slug={1}
                />
                <NoteCard
                    title="Heading 1"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet hic provident dolor debitis omnis soluta porro
                perspiciatis cupiditate? Ex, tempore. Inventore ex
                suscipit laudantium incidunt odio numquam repellendus
                accusamus est!"
                    slug={1}
                />
                <NoteCard
                    title="Heading 1"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet hic provident dolor debitis omnis soluta porro
                perspiciatis cupiditate? Ex, tempore. Inventore ex
                suscipit laudantium incidunt odio numquam repellendus
                accusamus est!"
                    slug={1}
                />
                <NoteCard
                    title="Heading 1"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet hic provident dolor debitis omnis soluta porro
                perspiciatis cupiditate? Ex, tempore. Inventore ex
                suscipit laudantium incidunt odio numquam repellendus
                accusamus est!"
                    slug={1}
                />
            </section>
        </>
    );
}
