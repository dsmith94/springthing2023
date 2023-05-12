

Game.things.clamPearl = {
    desc: `Sitting unattended here is an perfect pearl, the kind made inside of giant killer clams.`,
    location: '',
    x: ['examine clam pearl', `Anyone who says that clams don't make pearls should see this thing—it is exquisite!`],
    inv: ['take clam pearl', () => {
        msg(`Taken.`)
        addScore(5)
        msg(`A cheerful little teddy bear 🧸 with an enormous satchel appears and grabs the clam pearl. 
        “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        game.things.clamPearl.location = ""
        refresh()
        depositTreasure('clamPearl')
    }]
}
