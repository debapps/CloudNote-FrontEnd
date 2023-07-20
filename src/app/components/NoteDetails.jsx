"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useRouter } from "next/navigation";
import { getDateFormatted } from "@/utils/FormatDate";
import { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import { AlertContext } from "../context/alert/AlertProvider";
import { getHTML, getMarkDown } from "@/utils/htmlMarkDownConverter";
import { remoteAPICall } from "@/utils/callAPI";

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

export default function NoteDetails({ title, content, slug, updatedAt }) {
    // Get the alert context.
    const { showAlert } = useContext(AlertContext);

    // Get the user seesion.
    const session = useSession();

    // Get the next router.
    const router = useRouter();

    // Dialog hook.
    const [open, setOpen] = useState(false);
    const [heading, setHeading] = useState("");
    const [details, setDetails] = useState("");

    //Dialoge open and close functions.
    const handleClickOpen = () => {
        // Set the existing values
        setHeading(title);
        setDetails(getMarkDown(content));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // This function edits the notes.
    async function editNote(event) {
        // Prevent default form behaviour.
        event.preventDefault();

        // Get API body.
        const editBody = {
            title: heading,
            content: getHTML(details),
        };

        // Creates the authorization header.
        const authHeader = new Headers({
            "Content-Type": "application/json",
            authorization: `Bearer ${session.data.user.accessToken}`,
        });

        // Call the note API.
        const { status, data } = await remoteAPICall(
            `/api/note/${slug}`,
            "PUT",
            editBody,
            authHeader
        );

        if (status === 200) {
            // Show the success message.
            showAlert("success", data);

            // Redirect to the home page.
            router.push("/");
        } else {
            // Show the error.
            showAlert("error", data);
        }
    }

    return (
        <>
            <main className="min-h-screen px-10 py-10 md:px-20 md:py-36 flex flex-col justify-center items-start space-y-8">
                <section>
                    <div className="flex flex-row justify-between items-start space-x-5">
                        <h1 className="text-2xl md:text-5xl font-righteous pb-5 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-brand-color">
                            {title}
                        </h1>
                        <ThemeProvider theme={theme}>
                            <IconButton
                                onClick={handleClickOpen}
                                aria-label="edit"
                                color="secondary"
                                size="large">
                                <EditNoteIcon />
                            </IconButton>
                        </ThemeProvider>
                    </div>
                    <p className="text-xs md:text-sm font-poppins font-thin text-gray-500 italic">
                        Last Update On: {getDateFormatted(updatedAt)}
                    </p>
                </section>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
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

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="add-note-dialog">
                <DialogTitle className="text-xl md:text-2xl font-russo bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-brand-color text-center">
                    Update Note
                </DialogTitle>
                <form
                    onSubmit={editNote}
                    className="flex flex-col justify-center items-center p-10 space-y-5">
                    <input
                        type="text"
                        placeholder="Title"
                        value={heading}
                        onChange={(event) => {
                            setHeading(event.target.value);
                        }}
                        className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded"
                    />
                    <textarea
                        rows={10}
                        cols={50}
                        value={details}
                        onChange={(event) => {
                            setDetails(event.target.value);
                        }}
                        placeholder="Content"
                        className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded"
                    />
                    <button className="w-full p-2 font-righteous text-sm sm:text-base font-semibold border-2 border-black rounded bg-brand-color">
                        Update
                    </button>
                </form>
            </Dialog>
        </>
    );
}
