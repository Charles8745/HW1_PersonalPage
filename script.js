document.addEventListener('DOMContentLoaded', () => {
    // 1. Clock and Date Logic with Loading State
    const card = document.getElementById('main-card');
    const timeDisplay = document.getElementById('current-time');
    const dateDisplay = document.getElementById('current-date');
    let isLoaded = false;

    function updateDateTime() {
        const now = new Date();

        // Format Time: HH:MM:SS
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

        // Format Date: e.g., Tuesday, February 24, 2026
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.textContent = now.toLocaleDateString('en-US', options);

        // Remove loading state once data is injected
        if (!isLoaded) {
            isLoaded = true;
            // Short delay to ensure text is rendered before fading in
            setTimeout(() => {
                card.classList.add('loaded');
            }, 100);
        }
    }

    // Initial update
    updateDateTime();
    // Update UI every second
    setInterval(updateDateTime, 1000);


    // 2. Interactive Parallax Background
    const orb1 = document.getElementById('orb-1');
    const orb2 = document.getElementById('orb-2');
    const orb3 = document.getElementById('orb-3');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        // Apply distinct translation factors to each orb for depth
        orb1.style.transform = `translate(${x * 60}px, ${y * 60}px) scale(1.1)`;
        orb2.style.transform = `translate(${x * -40}px, ${y * -40}px) scale(0.9)`;
        orb3.style.transform = `translate(${x * 90}px, ${y * 90}px) scale(1.05)`;
    });


    // 3. Click Ripple Effect on Card
    card.addEventListener('mousedown', function (e) {
        // Prevent ripple if clicking on a link
        if (e.target.closest('a')) return;

        const rect = card.getBoundingClientRect();

        // Calculate the position of the click inside the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const circle = document.createElement('span');
        circle.classList.add('ripple');
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        // Set size based on card dimensions to ensure it covers the card
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = `${size}px`;
        // Adjust for center of circle
        circle.style.marginLeft = circle.style.marginTop = `${-size / 2}px`;

        card.appendChild(circle);

        // Remove the ripple element after animation finishes
        setTimeout(() => {
            circle.remove();
        }, 600);
    });
});
