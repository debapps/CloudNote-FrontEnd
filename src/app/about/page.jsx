import Image from "next/image";
import { aboutData } from "../../../public/data/webStaticData";

export const metadata = {
    title: "About | CloudNote",
    description:
        "Add your sticky notes oneline, Edit and Delete notes on cloud. Login securely in your exclusive account.",
};

export default function About() {
    return (
        <main>
            <section className="min-h-screen flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-8 sm:space-x-16 px-20 py-10 bg-gray-100">
                {/* <!--Image Section --> */}

                <Image
                    className="block w-full sm:w-1/2 rounded-3xl shadow-lg shadow-gray-400"
                    src={aboutData.image}
                    alt="about-page-image"
                    width={8000}
                    height={5000}
                />

                {/* <!-- Text Section --> */}
                <article className="flex flex-col items-start justify-start space-y-2 w-full sm:w-1/2">
                    <h1 className="font-righteous text-xl sm:text-3xl font-semibold pb-4">
                        {aboutData.heading}
                    </h1>
                    <p className="font-poppins font-medium text-sm sm:text-lg">
                        <span className="font-bold font-russo">Cloud Note</span>{" "}
                        is the open source note taking application to store your
                        memos, articles, sticky notes securely on cloud. You can
                        join the app securely using your email and password. You
                        can add, edit and delete your content securely on your
                        account dashboard.
                    </p>
                    <p className="font-poppins font-medium text-sm sm:text-lg">
                        <span className="font-bold font-russo">Cloud Note</span>{" "}
                        is developed using NextJS, designed using Tailwind CSS.
                        All the data is securely stored in MongoDB Atlas Cloud.
                        It uses{" "}
                        <strong className="font-bold">hash-encryption</strong>{" "}
                        to protect your password,{" "}
                        <strong className="font-bold">
                            JWT (Json Web Token)
                        </strong>{" "}
                        for user authentication, and RESTfull API build using
                        Next JS API for data handling.
                    </p>
                    <p className="font-poppins font-medium text-sm sm:text-lg">
                        So, start taking all your notes, memos on{" "}
                        <span className="font-bold font-russo">Cloud Note</span>{" "}
                        securely, on-cloud and wherever you go!
                    </p>
                </article>
            </section>
        </main>
    );
}
