"use client";

import NoteCard from "./NoteCard";
import IconButton from "@mui/material/IconButton";
import Zoom from "@mui/material/Zoom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useSWR from "swr";
import { fetcher } from "@/utils/callAPI";
import { notFound } from "next/navigation";
import ProgressCircle from "./ProgressCircle";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";

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
    // Dialog hook.
    const [open, setOpen] = useState(false);

    //Dialoge open and close functions.
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Declare node list.
    let noteList = [];

    // API Endpoint
    const endPoint = "/api/note/notes";

    // Access token.
    const accessToken = userData.user.accessToken;

    // The swr hook.
    const { data, mutate, error, isLoading } = useSWR(
        [endPoint, accessToken],
        fetcher
    );

    // Get the note data.
    if (isLoading) {
        return <ProgressCircle active={true} />;
    } else if (error) {
        return notFound();
    } else {
        // Get the list of notes from the API.
        noteList = data.data;

        return (
            <>
                <Zoom in={true} style={{ transitionDelay: "200ms" }}>
                    <div className="bg-blue-950 rounded-full fixed top-48 md:top-auto right-10 shadow-lg shadow-brand-color">
                        <ThemeProvider theme={theme}>
                            <IconButton
                                onClick={handleClickOpen}
                                aria-label="add"
                                size="large"
                                color="primary">
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </ThemeProvider>
                    </div>
                </Zoom>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="add-note-dialog">
                    <DialogTitle className="text-xl md:text-2xl font-russo bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-brand-color text-center">
                        Add Note
                    </DialogTitle>
                    <form className="flex flex-col justify-center items-center p-10 space-y-5">
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                        />
                        <textarea
                            rows={10}
                            cols={50}
                            placeholder="Content"
                            className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                        />
                        <button className="w-full p-2 font-righteous text-sm sm:text-base font-semibold border-2 border-black rounded bg-brand-color">
                            Save
                        </button>
                    </form>
                </Dialog>

                <Slide in={true} direction="right">
                    <div className="bg-emerald-950 p-5 max-w-fit rounded-lg shadow-xl shadow-brand-color">
                        <h1 className="text-lg sm:text-2xl font-russo font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-brand-color">
                            Welcome, {userData.user.name} ! Find your notes..
                        </h1>
                    </div>
                </Slide>

                {noteList.length ? (
                    <section className="p-5 flex flex-wrap flex-col sm:flex-row items-center sm:items-start justify-center">
                        {noteList.map((note, idx) => {
                            return (
                                <NoteCard
                                    key={idx}
                                    title={note.title}
                                    content={note.content}
                                    slug={note.slug}
                                />
                            );
                        })}
                    </section>
                ) : (
                    <Zoom in={true} style={{ transitionDelay: "500ms" }}>
                        <section className="py-20 flex justify-center">
                            <p className="text-lg md:text-3xl font-righteous text-brand-color bg-blue-950 max-w-fit p-5 rounded-lg shadow-lg shadow-brand-color">
                                You have clean slate !
                            </p>
                        </section>
                    </Zoom>
                )}
            </>
        );
    }
}
