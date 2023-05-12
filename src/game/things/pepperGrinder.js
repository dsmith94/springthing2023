
Game.things.pepperGrinder = {
    desc: `Set on the cavern floor is a somewhat charred pepper grinder.`,
    location: 'dragonCave',
    inv: ['take the pepper grinder', () => {
        game.pepper = true
        game.things.pepperGrinder.location = ''
        msg(`You grab the pepper grinder off the floor.`)
        addScore(3)
        msg(`A very helpful-looking crab 🦀 scuttles up next to your keyboard. ⌨️ “Hey!” says the crab 🦀, “You can now 
        press ~g to grind clouds of pepper into the air!”`)
        refresh()
    }],
}


