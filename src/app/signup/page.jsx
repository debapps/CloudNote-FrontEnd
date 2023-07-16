"use client";
import Image from "next/image";
import SignUpImage from "../../../public/images/sign-up-image.jpg";
import { useContext, useRef, useState } from "react";
import ProgressCircle from "../components/ProgressCircle";
import { AlertContext } from "../context/alert/AlertProvider";
import { useRouter } from "next/navigation";
import { remoteAPICall } from "@/utils/callAPI";

export default function SignUp() {
    // Get the Next JS router.
    const router = useRouter();

    // Gender hook.
    const [gender, setGender] = useState("O");

    // Progress circle hook.
    const [progress, setProgress] = useState(false);

    // Get the alert context function.
    const { showAlert } = useContext(AlertContext);

    // Form Input hooks.
    const firstName = useRef(null);
    const lastName = useRef(null);
    const dateOfBirth = useRef(null);
    const sex = useRef(true);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPass = useRef(null);

    // This function handles sign up process when Join button is clicked.
    async function handleSignUp(event) {
        // Prevents the default properties of the form.
        event.preventDefault();

        // Set the progress to true.
        setProgress(true);

        // Check if the password and confirm password values are matching.
        if (
            password.current.value &&
            password.current.value &&
            password.current.value === confirmPass.current.value
        ) {
            // Build the sign up information.
            const signUPInfo = {
                name: `${firstName.current.value} ${lastName.current.value}`,
                gender,
                birthDate: dateOfBirth.current.value,
                email: email.current.value,
                password: password.current.value,
            };

            // Call the API to POST the sign up information.
            const { status, data } = await remoteAPICall(
                "/api/auth/signup",
                "POST",
                signUPInfo
            );

            // Set the progress to false.
            setProgress(false);

            // Clears all the form element.
            clearForm();

            if (status === 200) {
                // Show the success message.
                showAlert("success", data);

                // Navigate to the login page.
                router.push("/signin");
            } else {
                // Show the error message.
                showAlert("error", data);
            }
        } else {
            // Clears the password fields.
            password.current.value = "";
            confirmPass.current.value = "";

            // Set the progress to false.
            setProgress(false);

            // Show the warning message.
            showAlert("warning", "Confirm your password correctly!");
        }
    }

    // This function clears the form.
    function clearForm() {
        firstName.current.value = "";
        lastName.current.value = "";
        dateOfBirth.current.value = "";
        email.current.value = "";
        password.current.value = "";
        confirmPass.current.value = "";
        setGender("O");
        sex.current.valueOf(true);
    }

    return (
        <section className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-500 w-full min-h-screen flex justify-center items-center px-10 py-36">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-x-8 w-full sm:w-4/5 rounded-md sm:rounded-lg shadow-lg bg-gray-50">
                <Image
                    className="block w-full sm:w-1/2 rounded-md"
                    src={SignUpImage}
                    alt="sign-up-image"
                    width={500}
                    height={500}
                    priority={false}
                />
                <form className="flex flex-col justify-center items-center space-y-2 p-8 sm:w-1/2">
                    <div className="w-full pb-5 text-center">
                        <ProgressCircle active={progress} />
                        <h1 className="text-xl sm:text-3xl font-semibold font-russo bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-brand-color to-red-700">
                            Join FREE!
                        </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pb-2 w-full">
                        <input
                            className="w-full sm:w-1/2 p-2 font-poppins text-xs md:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                            type="text"
                            name="firstName"
                            ref={firstName}
                            placeholder="First name"
                            required
                        />
                        <input
                            className="w-full sm:w-1/2 p-2 font-poppins text-xs md:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                            type="text"
                            name="lastName"
                            ref={lastName}
                            placeholder="Last name"
                            required
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between space-x-4">
                        <span className="inline-block font-poppins text-sm sm:text-base font-medium pr-4">
                            Gender
                        </span>
                        <span className="inline-block">
                            <input
                                className="checked:bg-yellow-500"
                                type="radio"
                                id="male"
                                name="sex"
                                value={gender}
                                onClick={() => {
                                    setGender("M");
                                }}
                            />
                            <label
                                className="font-poppins text-sm sm:text-base font-extralight mx-2"
                                htmlFor="male">
                                Male
                            </label>
                        </span>
                        <span className="inline-block">
                            <input
                                type="radio"
                                id="female"
                                name="sex"
                                value={gender}
                                onClick={() => {
                                    setGender("F");
                                }}
                            />
                            <label
                                className="font-poppins text-sm sm:text-base font-extralight mx-2"
                                htmlFor="female">
                                Female
                            </label>
                        </span>
                        <span className="inline-block">
                            <input
                                type="radio"
                                id="other"
                                name="sex"
                                value={gender}
                                onClick={() => {
                                    setGender("O");
                                }}
                                checked={sex}
                                onChange={() => {
                                    sex.current.valueOf(false);
                                }}
                            />
                            <label
                                className="font-poppins text-sm sm:text-base font-extralight mx-2"
                                htmlFor="other">
                                Other
                            </label>
                        </span>
                    </div>
                    <div className="flex flex-row items-center justify-between space-x-4">
                        <label
                            className="font-poppins text-sm sm:text-base font-medium"
                            htmlFor="dob">
                            Date of Birth
                        </label>
                        <input
                            className="w-1/2 p-2 font-poppins text-xs md:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                            type="date"
                            id="dob"
                            name="birthDate"
                            ref={dateOfBirth}
                        />
                    </div>
                    <div className="flex flex-col items-center space-y-4 pb-5 w-full">
                        <input
                            className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                            type="email"
                            name="email"
                            ref={email}
                            placeholder="Your email"
                            required
                        />
                        <input
                            className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                            type="password"
                            name="password"
                            ref={password}
                            placeholder="Password"
                            required
                        />
                        <input
                            className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                            type="password"
                            name="confirmPass"
                            ref={confirmPass}
                            placeholder="Confirm password"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <button
                            onClick={handleSignUp}
                            className="w-full p-2 font-righteous text-sm sm:text-base font-semibold border-2 border-black rounded bg-yellow-300">
                            Join
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
