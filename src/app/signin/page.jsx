"use client";
import Image from "next/image";
import signInImage from "../../../public/images/login-image.jpg";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AlertContext } from "../context/alert/AlertProvider";

export default function SignIn() {
    // Get the alert context.
    const { showAlert } = useContext(AlertContext);

    // Get the next auth session.
    const { data, status } = useSession();

    // Next Router.
    const router = useRouter();

    // This function handles the sign-in process.
    async function handleSignIn(event) {
        // prevent default behaviour of the form.
        event.preventDefault();

        // Get the form inputs from the event.
        const email = event.target[0].value;
        const password = event.target[1].value;

        // Sign in the user.
        const { error } = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (error) {
            // Reset the form values.
            event.target.reset();

            // Show the error message.
            showAlert("error", error);
        }
    }

    if (status === "authenticated") {
        router.push("/");
    }

    if (status === "unauthenticated") {
        return (
            <section className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-500 w-full min-h-screen flex justify-center items-center px-10 py-36">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-x-8 w-full sm:w-4/5 rounded-md sm:rounded-lg shadow-lg bg-gray-50">
                    <Image
                        className="block w-full sm:w-1/2 rounded-md"
                        src={signInImage}
                        alt="login-image"
                        width={2000}
                        height={2000}
                    />
                    <form
                        onSubmit={handleSignIn}
                        className="flex flex-col justify-center items-center space-y-2 p-8 sm:w-1/2">
                        <div className="w-full pb-5 text-center">
                            <h1 className="text-xl sm:text-3xl font-semibold font-russo capitalize bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-brand-color to-red-700">
                                Log in
                            </h1>
                        </div>
                        <div className="flex flex-col items-center space-y-4 pb-5 w-full">
                            <input
                                className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                                type="email"
                                name="email"
                                placeholder="Your email"
                            />
                            <input
                                className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="w-full">
                            <button className="w-full p-2 font-righteous text-sm sm:text-base font-semibold border-2 border-black rounded bg-yellow-300">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
