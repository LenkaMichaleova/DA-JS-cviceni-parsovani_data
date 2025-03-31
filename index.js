function parseData(string) {
    const date = {
        day: string.slice(0, 2),
        month: string.slice(3, 5),
        year: string.slice(6, 10),
    }
    return date
}

const dateInput = prompt("Zadej datum ve formátu ´DD-MM-YYY´: ")

// document.body.innerHTML += `${parseData(dateInput)}`     // --> vypíše do stránky blbost
console.log(parseData(dateInput))         // --> object je vidět rozepsaný v consoli (v Devtools dole)