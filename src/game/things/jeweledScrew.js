

Game.things.jeweledScrew = {
    desc: `Set into the wall is a platinum jeweled screw, on which likely hung a priceless work of art.`,
    location: 'artGallery',
    x: ['examine jeweled screw', () => {
        msg(`If you had a Phillips head screwdriver 🪛 on you, you could pretty easily get it out of the wall.`)
    }],
    't inv': ['remove jeweled screw from wall', () => {
        if (game.screwdriver) {
            msg(`The screwdriver 🪛 easily gets the platinum jeweled screw out of the wall,
            though the screwdriver 🪛 itself breaks in the process. You discard the broken tool.`)
            game.screwdriver = false
            addScore(5)
            msg(`A cheerful little teddy bear 🧸 with an enormous satchel appears and grabs the platinum jeweled screw. 
            “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
            game.things.jeweledScrew.location = ''
            game.item = ''
            refresh()
            depositTreasure('jeweledScrew')
        } else {
            msg(`You attempt to remove the jeweled screw with no success. If you had a Phillips head screwdriver 🪛 on you,
            you could pretty easily get it out of the wall.`)
        }
    }],
    h: ['give me a hint will you', `If you could find a screwdriver somewhere 🪛, you could just take that jeweled screw.`],
    p: ['push jeweled screw', `The platinum jeweled screw is in the wall too tight.`],
    y: ['pull jeweled screw', `The platinum jeweled screw is in the wall too tight.`],
}

