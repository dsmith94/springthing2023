
Game.rooms.sculptureGallery = () => {
    header(`Sculpture Gallery`)
    
    if (!game.things.blueprint.turned) {
        desc(`Several beautiful masterpieces of marble stand here, pointing at a blank space of wall.
        You can't help but feel that they're pointing at a door that isn't there. Opposite the blank 
        wall is a doorway leading into a bottomless pit.`)
        setExitsHeader(["up", "down", "right"])
        cmd(["right", 'i'], [
            `jump into bottomless pit`,
            () => kill(`You leap into the bottomless pit, with predictable results. It occurs to you as you fall (forever) that if 
            the whole room was somehow turned around, you would have gone deeper into the castle instead of into this pit.`,
            `You have fallen and you can't get up`, 'sculptureGallery')
        ])
    } else {
        desc(`Several beautiful masterpieces of marble stand here, pointing to a door on an otherwise blank wall.`)
        setExitsHeader(["up", "down", "right"])
        cmd(["right", 'i'], [`enter door`, () => go("secretGallery")])
    }
    
    cmd('h', ['give me a hint will you', `If only there was a way to turn this whole castle around, so the door was facing the other way...`])
    
    cmd('l', [`Taste sculptures`, `You prefer the flavor of limestone.`])
    cmd('f', ['feel statues', `The statues are indifferent.`])
    
    cmd('s', [`Smell sculptures`, `It smells of old statues.`])
    
    cmd("left", [
        `plant nose firmly into wall`,
        `Your face smarts for a moment after walking straight into the stone wall. Still, you can't help but feel a door should be here.`,
    ])
    
    
    cmd("down", [`leave gallery`, () => go("griffinRoom")])
    cmd("up", [`leave gallery`, () => go("mazeEntrance")])
}
