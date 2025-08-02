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

			span.style.transitionDelay = '${index * 50}ms'; // Décalage progressif
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

document.querySelector('.arrow.left').onclick = () => {
	carousel.scrollBy({ left: -350, behavior: 'smooth'});
	if (current > 0) current--;
	updateActiveCard();	
};

document.querySelector('.arrow.right').onclick = () => {
	carousel.scrollBy({ left: 350, behavior: 'smooth'});
	if (current < cards.length - 1) current++;
	updateActiveCard();
};

updateActiveCard();