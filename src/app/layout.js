import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
    title: "CloudNote",
    description:
        "Add your sticky notes oneline, Edit and Delete notes on cloud. Login securely in your exclusive account.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Favicon */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
