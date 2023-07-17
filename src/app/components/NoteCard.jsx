"use client";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Grow from "@mui/material/Grow";
import Link from "next/link";

export default function NoteCard({ title, content, slug }) {
    return (
        <Grow in={true}>
            {/* <Link href={`/note/${slug}`}> */}
            <article className="w-3/4 sm:w-1/4 min-h-fit border shadow-xl shadow-blue-200 rounded-lg bg-brand-color p-5 m-5">
                <section className="text-sm sm:text-base flex flex-row items-end justify-end space-x-1">
                    <IconButton aria-label="edit" color="success">
                        <EditNoteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="error">
                        <DeleteForeverIcon />
                    </IconButton>
                </section>
                <h3 className="text-base sm:text-xl font-righteous font-semibold pb-2">
                    {title}
                </h3>
                <p className="text-xs sm:text-base font-poppins font-normal">
                    {content}
                </p>
            </article>
            {/* </Link> */}
        </Grow>
    );
}
