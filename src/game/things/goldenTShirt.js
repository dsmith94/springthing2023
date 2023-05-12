
Game.things.goldenShirt = {
    desc: `Lying on a pedestal is an ordinary T-shirt, made of solid gold. I guess it's not ordinary after all.`,
    location: 'mazeEnd',
    'r x': ['read golden shirt', `It says: “I solved the maze twisty passages, all alike, and all I got was this stupid T-shirt.”`],
    inv: ['take golden shirt', () => {
        msg(`Taken.`)
        addScore(5)
        msg(`A cheerful little teddy bear 🧸 with an enormous satchel appears and grabs the golden T-shirt. 
        “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        game.things.goldenShirt.location = ""
        refresh()
        depositTreasure('goldenShirt')
    }]
}

