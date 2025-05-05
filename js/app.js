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
