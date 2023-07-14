import "./globals.css";

export const metadata = {
    title: "CloudNote",
    description:
        "Add your sticky notes oneline, Edit and Delete notes on cloud. Login securely in your exclusive account.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
