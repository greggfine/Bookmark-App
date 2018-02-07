const form = document.querySelector("form");
const siteName = document.querySelector("#site-name");
const siteUrl = document.querySelector("#site-url");
const ul = document.querySelector("ul");

form.addEventListener("submit", function(e){
	e.preventDefault();
	let li = document.createElement("li");
	li.innerHTML = "<h3>" + siteName.value + "</h3>";
	ul.appendChild(li);
	siteName.value = "";

	let visitBtn = document.createElement("a");
	visitBtn.href = siteUrl.value;
	visitBtn.target = "_blank";
	visitBtn.textContent = "Visit";
	li.appendChild(visitBtn);
	siteUrl.value = "";

	deleteBtn = document.createElement("button");
	deleteBtn.id = "delete-btn";
	deleteBtn.textContent = "Delete";
	li.appendChild(deleteBtn);

	deleteBtn.addEventListener("click", function(){
		ul.removeChild(li);
	})
})


