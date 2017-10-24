// Outputs: "Definition hoisted!"
definitionHoisted();

// TypeError: undefined is not a function
definitionNotHoisted();

function definitionHoisted() {
    console.log("Definition hoisted!");
}

var definitionNotHoisted = function () {
    console.log("Definition not hoisted!");
};
