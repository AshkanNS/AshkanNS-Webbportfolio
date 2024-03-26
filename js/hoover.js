document.addEventListener('DOMContentLoaded', () => {
    // Välj alla navigations- och footer-länkar samt "Send Message"-knappen
    const navLinks = document.querySelectorAll('nav a');
    const footerLinks = document.querySelectorAll('footer a');
    const sendMessageButton = document.querySelector('button[type="submit"]');

    // Funktion för att lägga till hover-effekt
    const addHoverEffect = (links) => {
        links.forEach(link => {
            // När muspekaren är över länken
            link.addEventListener('mouseover', () => {
                link.style.color = 'hsl(280, 60%, 40%)';
                link.style.transition = 'color 0.3s ease-in-out';
            });

            // När muspekaren lämnar länken
            link.addEventListener('mouseout', () => {
                link.style.color = ''; // Återställer till ursprunglig stil
            });
        });
    };

    // Lägg till hover-effekter på länkar
    addHoverEffect(navLinks);
    addHoverEffect(footerLinks);

    // Lägg till hover-effekt på "Send Message"-knappen
    if (sendMessageButton) {
        sendMessageButton.addEventListener('mouseover', () => {
            sendMessageButton.style.backgroundColor = 'hsl(280, 60%, 40%)';
            sendMessageButton.style.transition = 'background-color 0.3s ease-in-out';
        });

        sendMessageButton.addEventListener('mouseout', () => {
            sendMessageButton.style.backgroundColor = ''; // Återställer till ursprunglig stil
        });
    }
});
