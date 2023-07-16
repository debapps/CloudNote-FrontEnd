import Image from "next/image";
import SocialIcons from "../components/SocialIcons";

export const metadata = {
    title: "Contact | CloudNote",
    description:
        "Add your sticky notes oneline, Edit and Delete notes on cloud. Login securely in your exclusive account.",
};

export default function Contact() {
    return (
        <main>
            <section className="px-20 py-36 bg-gray-50 min-h-screen">
                <div className="flex flex-col items-center justify-center space-y-5 w-full">
                    {/* <!-- Heading Section --> */}
                    <h1 className="font-righteous text-xl sm:text-3xl font-semibold">
                        Contact us
                    </h1>
                    <h3 className="font-poppins font-medium text-lg sm:text-xl">
                        Suggestion? Feedback? Issues? Queries?
                    </h3>

                    <section className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-10 sm:space-x-20">
                        {/* <!--Image Section --> */}
                        <Image
                            className="block w-full sm:w-1/2 rounded-3xl shadow-lg shadow-gray-400"
                            src="/images/contact.jpg"
                            alt="contact-page-image"
                            width={3000}
                            height={2000}
                        />

                        {/* <!-- Text Section --> */}
                        <article className="font-poppins font-medium text-sm sm:text-lg w-full sm:w-2/3 flex flex-col justify-start items-start space-y-4">
                            <ul className="list-disc pl-10">
                                <li>Do you have any suggestion for us?</li>
                                <li>
                                    Do you want to share any feedback regarding
                                    the application?
                                </li>
                                <li>
                                    Do you face any issue and problem while
                                    using the application?
                                </li>
                                <li>
                                    Do you have any other queries for
                                    partnerships?
                                </li>
                            </ul>
                            <p>
                                Please feel free to write @
                                <span className="font-medium font-righteous underline">
                                    debaditya.bhar@gmail.com
                                </span>
                                .
                            </p>
                            <p>You can also reach me at social media.</p>
                            <div className="border-2 border-brand-color rounded-md">
                                <SocialIcons />
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        </main>
    );
}
