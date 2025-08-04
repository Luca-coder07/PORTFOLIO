document.querySelectorAll("nav ul li a").forEach(link => 
{
	link.addEventListener("mouseover", () => 
		{
			link.style.color = "gold";
		});
	link.addEventListener("mouseout", () =>
		{
			link.style.color = "white";
		});
});

document.querySelectorAll('.animated-text').forEach(link =>
	{
		let letters = link.textContent.split(''); // Decoupe le mot en lettres
		link.innerHTML = ''; // Efface le texte

		letters.forEach((letter, index) => {
			let span = document.createElement('span'); // Création d'un element <span> pour chaque lettre 
			span.textContent = letter;

			span.style.transitionDelay = `${index * 50}ms`; // Décalage progressif
			link.appendChild(span);
		});
	});

const carousel = document.querySelector('.projects');
const cards = document.querySelectorAll('.card');
let current = 1;

function updateActiveCard() {
	cards.forEach((card, i) => {
		card.classList.toggle('active', i === current);
	});
}

function detectVisibleCard() {
    let maxVisibleWidth = 0;
    let visibleIndex = 0;

    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);

        if (visibleWidth > maxVisibleWidth) {
            maxVisibleWidth = visibleWidth;
            visibleIndex = index;
        }
    });

    current = visibleIndex;
    updateActiveCard();
}

document.querySelector('.arrow.left').onclick = () => {
	if (current > 0) {
		carousel.scrollBy({ left: -350, behavior: 'smooth'});
		current--;
		updateActiveCard();	
	}
};

document.querySelector('.arrow.right').onclick = () => {
	if (current < cards.length - 1) {
		carousel.scrollBy({ left: 350, behavior: 'smooth'});
		current++;
		updateActiveCard();
	}
};

updateActiveCard();

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") document.querySelector(".arrow.right").click();
    if (e.key === "ArrowLeft") document.querySelector(".arrow.left").click();
});

window.addEventListener("load", detectVisibleCard);
carousel.addEventListener("scroll", () => {
    detectVisibleCard();
});
