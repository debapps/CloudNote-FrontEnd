import ShowDown from "showdown";

// Showdown converter configurations.
const converter = new ShowDown.Converter();
converter.setOption("noHeaderId", true);

// This function converts the input markdown text to html text.
export function getHTML(inputText) {
    // Convert to HTML text.
    const convertText = converter.makeHtml(inputText);

    // Remove extra spaces and newline.
    const htmlText = convertText
        .replace(/[\r\n]+/gm, "")
        .split(/[ ]+/)
        .join(" ");

    // Return HTML text.
    return htmlText;
}

// This function converts the input html text to markdown text.
export function getMarkDown(inputText) {
    // Convert to markdown text.
    const markDownText = converter.makeMarkdown(inputText);

    // Return the MarkDown text.
    return markDownText;
}
