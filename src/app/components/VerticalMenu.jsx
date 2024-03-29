"use client";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useState } from "react";

export default function VerticalMenu({ links }) {
    // DOM element hook.
    const [anchorEl, setAnchorEl] = useState(null);

    // Open indicatior.
    const open = Boolean(anchorEl);

    // Handle menu click.
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle menu close.
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                <svg
                    className={`${
                        open ? "hidden" : "block"
                    } h-6 w-6 text-brand-bg-color`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <svg
                    className={`${
                        open ? "block" : "hidden"
                    } h-6 w-6 text-brand-bg-color`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}>
                {links.map((link, idx) => {
                    return (
                        <MenuItem
                            className="text-gray-800 text-lg font-righteous hover:bg-brand-color"
                            key={idx}
                            onClick={handleClose}>
                            <Link className="text-center w-32" href={link.href}>
                                {link.title}
                            </Link>
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
}
