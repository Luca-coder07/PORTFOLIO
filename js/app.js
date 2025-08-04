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
let current = 0;

function updateActiveCard() {
	cards.forEach((card, i) => {
		card.classList.toggle('active', i === current);
	});
}

document.querySelector('.arrow.left').onclick = () => {
	if (current > 0) {
		carousel.scrollBy({ left: -350, behavior: 'smooth'});
		current--;
	}
	if (current = 0) {
		carousel.scrollBy({ left: 350*(cards.length - 1), behavior: 'smooth'});
		current = cards.length - 1;
	}
	updateActiveCard();	
};

document.querySelector('.arrow.right').onclick = () => {
	if (current < cards.length - 1) {
		carousel.scrollBy({ left: 350, behavior: 'smooth'});
		current++;
	}
	if (current == cards.length - 1) {
		carousel.scrollBy({left: -350*(cards.length-1), behavior: 'smooth'});
		current = 0;
	}
	updateActiveCard();
};

updateActiveCard();

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") document.querySelector(".arrow.right").click();
    if (e.key === "ArrowLeft") document.querySelector(".arrow.left").click();
});

