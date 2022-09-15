const wordInput = document.getElementById("wInput");
const wordAdded = document.getElementById("inputValidation");
const wordSearch = document.getElementById("wSearch");
const wordFound = document.getElementById("searchValidation")
wordInput.focus();
const wordsDictionary = new Set();

function saveWord() {
	wordFound.innerHTML = "";
	let currentWord = wordInput.value;
	wordsDictionary.add(currentWord);
	wordAdded.innerHTML = `The word "${currentWord}" was added in the dictionary`;
	addWordSetUp();
}

function searchWord() {
	wordAdded.innerHTML = "";
	let searchWord = wordSearch.value;
	if (wordsDictionary.has(searchWord)) {
		wordFound.innerHTML = `The word "${searchWord}" exists in the dictionary`;
	} else {
		wordFound.innerHTML = `The word "${searchWord}" is not exists in the dictionary`;
	}
	searchWordSetUp();
}

function addWordSetUp() {
	wordInput.value = "";
	wordInput.focus();
}

function searchWordSetUp() {
	wordSearch.value = "";
	wordSearch.focus();
}
