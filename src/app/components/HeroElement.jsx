import Image from "next/image";
import AuthButtons from "./AuthButtons";

export default function HeroElement({ data }) {
    return (
        <main>
            <section className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-8 sm:space-x-10 px-20 py-28 bg-gray-50">
                {/* <!-- Welcome Text --> */}
                <article className="flex flex-col items-start justify-start w-full sm:w-1/2">
                    <h1 className="font-righteous text-3xl sm:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-brand-color to-red-700">
                        {data[0].heading}
                    </h1>
                    <p className="font-poppins font-medium text-sm sm:text-lg pt-8">
                        {data[0].desc}
                    </p>
                    <section className="pt-4">
                        <AuthButtons />
                    </section>
                </article>

                {/* <!-- Hero Image Section --> */}
                <Image
                    className="block w-full sm:w-1/3 rounded-3xl shadow-lg shadow-gray-400"
                    src={data[0].image}
                    alt="hero-image"
                    width={500}
                    height={500}
                />
            </section>
            <section className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-8 sm:space-x-10 px-20 py-28 bg-brand-color">
                {/* <!--Image Section --> */}

                <Image
                    className="block w-full sm:w-1/3 rounded-3xl shadow-lg shadow-gray-400"
                    src={data[1].image}
                    alt="secure-image"
                    width={500}
                    height={500}
                />

                {/* <!-- Text Section --> */}
                <article className="flex flex-col items-start justify-start space-y-2 w-full sm:w-1/2">
                    <h1 className="font-righteous text-base sm:text-2xl font-semibold">
                        {data[1].heading}
                    </h1>
                    <p className="font-poppins font-medium text-sm sm:text-lg">
                        {data[1].desc}
                    </p>
                </article>
            </section>
            <section className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-8 sm:space-x-10 px-20 py-28 bg-gray-50">
                {/* <!-- Text Section --> */}
                <article className="flex flex-col items-start justify-start space-y-2 w-full sm:w-1/2">
                    <h1 className="font-righteous text-base sm:text-2xl font-semibold">
                        {data[2].heading}
                    </h1>
                    <p className="font-poppins font-medium text-sm sm:text-lg">
                        {data[2].desc}
                    </p>
                </article>

                {/* <!--Image Section --> */}
                <Image
                    className="block w-full sm:w-1/3 rounded-3xl shadow-lg shadow-gray-400"
                    src={data[2].image}
                    alt="notes-image"
                    width={500}
                    height={500}
                />
            </section>
        </main>
    );
}
