
Game.rooms.frontDoor = () => {
  header(`Front Door`)

  msu()

  desc(`A dark oak slab of door hangs on wide iron hinges.
    Perched high above on the wall is a 
    gargoyle, making a goofy smirk.`)

  setExitsHeader(["up", "down"])

  cmd('l', [`Taste wall`, `The castle walls taste of old stone and spiders.`])
  cmd('f', ['feel wall', `It feels cold.`])
  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`Nothing happens.`)
  }])

  cmd('s', [`Smell castle`, `You can smell danger.`])

  cmd(
    ["left", "right"],
    [
      `plant nose firmly into wall`,
      `Your face smarts for a moment after walking straight into the stone wall.`,
    ]
  )

  cmd("down", [`follow path`, () => go("startRoom")])
}
