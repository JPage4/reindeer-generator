const reindeerElement = document.getElementById("reindeer-color") 

let whatever = function () {
    let coloredReindeer = coloredReindeerBuilder()
for (let i = 0; i < coloredReindeer.length; i++) {
    const currentReindeer = coloredReindeer[i];
 
    reindeerElement.innerHTML += `
            <section class="${currentReindeer.color}">${currentReindeer.name}</section>
          `
    }
}
whatever()