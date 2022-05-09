export default function formatNoteItemText(text) {
    const textOneLineBreak = text.replace(/\n\s*\n/g, '\n');
    const newText = textOneLineBreak.replace(/\n/, " - ")
    let truncatedText = newText.trim();
    
    if (truncatedText.length > 200) {
        truncatedText =truncatedText.substring(0, 201) + "...";
    } else if (truncatedText === ""){
        truncatedText = "No Note Text";
    }

    return truncatedText;
}
