import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { remoteAPICall } from "../../../../utils/callAPI";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                const { status, data } = await remoteAPICall(
                    "/api/auth/login",
                    "POST",
                    credentials
                );

                if (status === 200) {
                    return data;
                } else {
                    throw new Error(data);
                }
            },
        }),
    ],
    pages: {
        error: "/signin",
    },
});

export { handler as GET, handler as POST };
