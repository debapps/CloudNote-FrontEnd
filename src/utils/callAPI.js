// API host from environment.
const apiHost = process.env.NEXT_PUBLIC_API_HOST;

// default header value.
const defaultHeader = new Headers({
    "Content-Type": "application/json",
});

// Generic API Call
export async function remoteAPICall(
    endPoint,
    method,
    data = {},
    headers = defaultHeader,
    mode = "cors"
) {
    // API URL.
    const url = apiHost + endPoint;

    // API call options.
    const options = {
        method,
        headers,
        mode,
        body: JSON.stringify(data),
    };

    try {
        // Call the API.
        let response = await fetch(url, options);

        // Returns the response.
        const status = response.status;
        const message = await response.json();
        const reply = {
            status,
            ...message,
        };

        return reply;
    } catch (error) {
        return error;
    }
}

// The data fercher function with bearer token.
export const fetcher = async ([endPoint, accessToken]) => {
    // API URL.
    const url = apiHost + endPoint;

    // Get the Header with bearer access token.
    const tokenHeader = new Headers({
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
    });

    // API call options.
    const options = {
        method: "GET",
        headers: tokenHeader,
        mode: "cors",
    };

    try {
        // Call the API.
        let response = await fetch(url, options);

        // Returns the response.
        const status = response.status;
        const message = await response.json();
        const reply = {
            status,
            ...message,
        };

        return reply;
    } catch (error) {
        return error;
    }
};
