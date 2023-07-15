"use client";
import Image from "next/image";
import signInImage from "../../../public/images/login-image.jpg";

export default function SignIn() {
    return (
        <section className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-500 w-full min-h-screen flex justify-center items-center p-10">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-x-8 w-full sm:w-4/5 rounded-md sm:rounded-lg shadow-lg bg-gray-50">
                <Image
                    className="block w-full sm:w-1/2 rounded-md"
                    src={signInImage}
                    alt="login-image"
                    width={2000}
                    height={2000}
                />
                <section className="flex flex-col justify-center items-center space-y-2 p-8 sm:w-1/2">
                    <div className="w-full pb-5 text-center">
                        <h1 className="text-xl sm:text-3xl font-semibold font-russo capitalize">
                            Log in
                        </h1>
                    </div>
                    <div className="flex flex-col items-center space-y-4 pb-5 w-full">
                        <input
                            className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                            type="email"
                            name="email"
                            // value={loginInfo.email}
                            // onChange={handleChangeInput}
                            placeholder="Your email"
                        />
                        <input
                            className="w-full p-2 font-poppins text-xs sm:text-base font-normal border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 rounded text-center"
                            type="password"
                            name="password"
                            // value={loginInfo.password}
                            // onChange={handleChangeInput}
                            placeholder="Password"
                        />
                    </div>
                    <div className="w-full">
                        <button
                            // onClick={handleLogin}
                            className="w-full p-2 font-righteous text-sm sm:text-base font-semibold border-2 border-black rounded bg-yellow-300">
                            Log In
                        </button>
                        {/* <button
                            onClick={() => {
                                signIn("google", {
                                    callbackUrl: "/dashboard",
                                });
                            }}
                            className="w-full p-2 font-righteous text-sm sm:text-base font-semibold border-2 border-black rounded bg-blue-400 text-white m-1">
                            Log in with Google
                        </button> */}
                    </div>
                </section>
            </div>
        </section>
    );
}
