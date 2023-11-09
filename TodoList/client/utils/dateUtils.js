export function formatIsoDate(isoString) {
    // Parse ISO string to Date object
    const isoDate = new Date(isoString);

    // Define options for formatting
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    // Format the date
    const formattedDate = isoDate.toLocaleString('en-US', options);

    // Return the result
    return formattedDate;
}