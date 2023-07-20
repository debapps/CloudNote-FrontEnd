"use client";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Grow from "@mui/material/Grow";
import Link from "next/link";
import { getHTML } from "@/utils/htmlMarkDownConverter";
import Tooltip from "@mui/material/Tooltip";

export default function NoteCard({ title, content, slug, deleteFunc }) {
    // Conver the first 150 character content into HTML.
    const htmlContent = getHTML(`${content.substring(0, 150)} ...`);

    return (
        <Grow in={true}>
            <article className="w-3/4 sm:w-1/4 min-h-fit border shadow-xl shadow-blue-200 rounded-lg bg-brand-color p-5 m-5">
                <section className="flex flex-row justify-between items-center">
                    <h3 className="text-md sm:text-2xl font-righteous font-semibold text-blue-900">
                        {title}
                    </h3>
                    <Tooltip title="Delete" arrow>
                        <IconButton
                            aria-label="delete"
                            color="error"
                            onClick={() => {
                                deleteFunc(slug);
                            }}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </Tooltip>
                </section>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
                <Link
                    className="font-semibold text-blue-900 font-poppins"
                    href={`/${slug}`}>
                    More
                </Link>
            </article>
        </Grow>
    );
}
