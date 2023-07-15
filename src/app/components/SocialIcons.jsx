"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function SocialIcons() {
    return (
        <section className="flex flex-row p-5 space-x-2">
            <FacebookIcon className="text-xl sm:text-5xl text-facebook-color" />
            <InstagramIcon className="text-xl sm:text-5xl text-insta-color" />
            <GitHubIcon className="text-xl sm:text-5xl text-github-color" />
            <TwitterIcon className="text-xl sm:text-5xl text-twitter-color" />
        </section>
    );
}
