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
