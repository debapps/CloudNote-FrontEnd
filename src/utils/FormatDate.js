// List of months.
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// List of days.
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

// This function formats date into Mon DD, YYYY format.
export function getDateFormatted(date) {
    // Get the date object.
    const d = new Date(date);

    // Date formatting.
    const formatDate = `${days[d.getDay()]}, ${
        months[d.getMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`;

    return formatDate;
}
