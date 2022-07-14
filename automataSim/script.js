const fields = {
	description: document.getElementById("description"),
	hideDescription: document.getElementById("hideDescription"),
	states: document.getElementById("states"),
	statesInput: document.getElementById("statesInput"),
	symbols: document.getElementById("symbols"),
	symbolsInput: document.getElementById("symbolsInput"),
};

const automata = {
	states: [],
	symbols: [],
	initialState: '',
	finalStates: [],
	transitionFunction: [[]],
};

let initialStateDiv = {};
let finalStatesDiv = {};
let checkbox;
let option;
let item;

function removeDuplicates(array) {
	return array.filter((item, index) => array.indexOf(item) === index);
}

function getInitialState(element) {
	if (element) {
		automata.initialState = element.value;
		element.addEventListener('change', function() {
			automata.initialState = this.value;
		});
	}
}

function getFinalState(check) {
	console.log(this.checked);
}

fields.statesInput.addEventListener("click", function() {
	if (fields.states.value.length) {
		automata.states = removeDuplicates(fields.states.value.split(';'));
		fields.states.value = automata.states.join(';');

		// Initial State
		initialStateDiv = document.createElement("div");
		initialStateDiv.p = document.createElement("p");
		initialStateDiv.p.innerHTML = "Select the initial state";
		initialStateDiv.appendChild(initialStateDiv.p);
		initialStateDiv.label = document.createElement("label");
		initialStateDiv.id = "initial-state-div";
		initialStateDiv.label.innerHTML = "q₀: ";
		initialStateDiv.appendChild(initialStateDiv.label);
		initialStateDiv.select = document.createElement("select");
		initialStateDiv.select.id = "initial-state";
		initialStateDiv.appendChild(initialStateDiv.select);

		// Final states
		finalStatesDiv = document.createElement("div");
		finalStatesDiv.p = document.createElement("p");
		finalStatesDiv.p.innerHTML = "Select the final states";
		finalStatesDiv.appendChild(finalStatesDiv.p);
		finalStatesDiv.label = document.createElement("label");
		finalStatesDiv.id = "final-state-div";
		finalStatesDiv.label.innerHTML = "F: ";
		finalStatesDiv.appendChild(finalStatesDiv.label);
		finalStatesDiv.ul = document.createElement("ul");
		finalStatesDiv.ul.id = "final-states";
		finalStatesDiv.appendChild(finalStatesDiv.ul);

		automata.states.forEach((state, index) => {
			// Options for initial state
			option = document.createElement("option");
			option.value = option.innerHTML = state;
			initialStateDiv.select.appendChild(option);

			// Itens list for final state(s)
			item = document.createElement("li");
			item.textContent = state;
			checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.id = "finalState" + index;
			item.appendChild(checkbox);
			finalStatesDiv.ul.appendChild(item);
			console.log(document.getElementById(checkbox));
			document.getElementById(checkbox.id).addEventListener("change", getFinalState());
		});

		fields.initialState = initialStateDiv.select;
		getInitialState(fields.initialState);

		if(document.getElementById("initial-state-div")) {
			document.body.removeChild(document.getElementById("initial-state-div"));
		}
		if(document.getElementById("final-state-div")) {
			document.body.removeChild(document.getElementById("final-state-div"));
		}
		document.body.appendChild(initialStateDiv);
		document.body.appendChild(finalStatesDiv);
	} else {
		automata.states = automata.finalStates = [];
		automata.initialState = '';
		automata.transitionFunction = [[]];
		initialStateDiv = fields.initialState = null;

		if (!(document.getElementById("initial-state-div") || document.getElementById("final-state-div"))) {
			window.alert("Please insert the states as told.");
		}

		if(document.getElementById("initial-state-div")) {
			document.body.removeChild(document.getElementById("initial-state-div"));
		}
		if (document.getElementById("final-state-div")) {
			document.body.removeChild(document.getElementById("final-state-div"));
		}
	}
});


fields.symbolsInput.addEventListener("click", () => {
	if (fields.symbols.value.length) {
		automata.symbols = removeDuplicates(fields.symbols.value.split(';'));
		fields.symbols.value = automata.symbols.join(';');
	} else {
		window.alert("Please insert the symbols as told.");
	}
});


if (fields.description.hidden) {
	fields.hideDescription.innerHTML = "Show";
} else {
	fields.hideDescription.innerHTML = "Hide";
}

fields.hideDescription.addEventListener("click", () => {
	if (fields.description.hidden) {
		fields.description.hidden = false;
		fields.hideDescription.innerHTML = "Hide";
	} else {
		fields.description.hidden = true;
		fields.hideDescription.innerHTML = "Show";
	}
});
