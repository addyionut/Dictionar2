const wordInput = document.getElementById("wInput");
const wordAdded = document.getElementById("inputValidation");
const wordSearch = document.getElementById("wSearch");
const wordFound = document.getElementById("searchValidation")
const wordDictionary = new Set();

function saveWord() {
	let currentWord = wordInput.value;
	wordDictionary.add(currentWord);
	console.log(wordDictionary);
	wordAdded.innerHTML = `The word "${currentWord}" was added in the dictionary`;
	wordInput.value = "";
	wordInput.focus();
}

function searchWord() {
	let searchWord = wordSearch.value;
	if (wordDictionary.has(searchWord)) {
		wordFound.innerHTML = `The word "${searchWord}" exists in the dictionary`;
	} else {
		wordFound.innerHTML = `The word "${searchWord}" is not exists in the dictionary`;
	}
}

