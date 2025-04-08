// Create a function that tests the post route handler [2 pts]
async function newPotion(){
try {
    // fill in the path
    const response = await fetch("/create-potion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
           label:"pearlywhite",
           effect: "Drowsiness",
           ingredients: "Vampires Blood",
    color: "Red",
    isExplosive: false,
        })

    });
    const json = await response.json();
    console.log(json);
} catch (error) {
    console.error(error.message);
}
}
newPotion()



// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

