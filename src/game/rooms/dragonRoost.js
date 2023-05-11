

Game.rooms.dragonRoost = () => {
  header(`Dragon Roost`)

  desc(`A vast underground cavern is lit by the gentle orange breath of a massive dragon, big as a football field.
  She seems mostly uninterested in you. A long chain descends from the chamber above.`)

  setExitsHeader(["up"])
  cmd('h', [`hint`, `If you want to get the dragon to breath some fire, this is not the room to be in when it happens.`])

  cmd(
    ["left", "right", "down"],
    [
      `walk into cave wall`,
      `You resist the urge to smack straight into a cave wall.`,
    ]
  )

  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`“Nice lungs,” says the dragon.`)
  }])

  cmd('l', ['lick dragon', `Even if that were possible, why?`])
  cmd('s', ['sniff air', `The air smells of sulfur and dragon-breath.`])
  cmd('f', ['feel dragon', `It's like petting a ginormous gecko.`])
  cmd('c', ['climb up the chain', () => go('draftyRoom')])

  cmd(["up", "o"], [`exit the roost`, () => go("dragonCave")])
  cmd('x', [`examine the enormous dragon`, `It appears as though she's on the verge of taking a nap.`])
  if (game.pepper) {
    cmd('g', [`grind pepper`, () => {
        msg(`The smell of pepper mingles with the smoke.`)
        msg(`“Ahhh!” cries the dragon, “I'm allergic to pepper!” She holds her long snout. “Ah... AHHHH...”`)
        kill(`The cavern is instantly engulfed in flames!`, `You have been incinerated`, 'dragonRoost')
    }])
  }
  cmd('a', [`attack the enormous dragon`, () => kill(`Well, you can guess how that worked out.`, `You have been smooshed`, 'dragonCave')])

}

