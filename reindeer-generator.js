// Create an instance of the generator
const colorGenerator = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let counter = 0

    while (counter < colors.length) {
        yield currentColor = colors[counter]
        counter += 1  // Increment the counter
    }
}

const colorFactory = colorGenerator()


// Invoke factory function to create reindeer object
const reindeerFactory = function (name) {
    return Object.create(null, {
        "name": { 
            value: name, 
            enumerable: true 
        },
        "color": { 
            value: colorFactory.next().value, 
            enumerable: true 
        },
    })
}

// Put new reindeer object in coloredReindeer array
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = []

    // Write a for loop that looks at each reindeer
    for(let i = 0; i < reindeer.length; i++){
        let processedReindeer = reindeerFactory(reindeer[i])
        coloredReindeer.push(processedReindeer)
    }
    // Return coloredReindeer array
    return coloredReindeer
}


