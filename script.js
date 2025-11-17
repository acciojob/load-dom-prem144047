document.addEventListener("DOM is loaded", function () {
		const messageEliment = document.createElement("p");
		messageEliment.textContent = "DOM load success";

		document.body.appendChield(messageEliment);
	});