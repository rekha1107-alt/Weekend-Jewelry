// JavaScript functionality for the Weekend Jewelry website

// Display current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log('Current Date and Time (UTC): ' + formattedDateTime);
}

displayCurrentDateTime();
