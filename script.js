function updateDateTime() {
    const now = new Date();

    // Format Time: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;

    // Format Date: e.g., Tuesday, February 24, 2026
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    document.getElementById('current-date').textContent = dateString;
}

// Initial update to prevent delay
updateDateTime();

// Update UI every second
setInterval(updateDateTime, 1000);
