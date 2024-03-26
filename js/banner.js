document.addEventListener('DOMContentLoaded', function() {
    const skillsBanner = document.getElementById('skillsbanner');   // funktionen vi vill komma åt
    const mainSection = document.querySelector('main'); // sektionen som vi vill använda

    function animateSkillsBanner() {
        // Beräknar avståndet för bannern att resa
        const travelDistance = mainSection.offsetWidth + skillsBanner.offsetWidth;

        // Sätter en initial position för bannern
        skillsBanner.style.transform = 'translateX(-' + skillsBanner.offsetWidth + 'px)';
        skillsBanner.style.transition = 'none';

        // Lägger till en liten fördröjning innan animationen startar för att säkerställa att positionen är återställd
        setTimeout(() => {
            skillsBanner.style.transition = 'transform 15s linear';
            skillsBanner.style.transform = 'translateX(' + travelDistance + 'px)';
        }, 100);

        // för att återskapa en loop inom 12 sek
        setTimeout(animateSkillsBanner, 12000);
    }

    animateSkillsBanner();
});
