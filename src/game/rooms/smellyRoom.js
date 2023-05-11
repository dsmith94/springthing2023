
Game.rooms.smellyRoom = () => {
  header(`Smelly Room`)

  desc(`It's unclear as to why, but this room smells AWFUL. A dark stair descends into the dungeon.`)

  setExitsHeader(["down", "left", "right"])

  cmd('h', [`hint`, `This room could use a sign.`])

  cmd(
    ["up"],
    [
      `walk into wall`,
      `The wall resists your efforts to move through it.`,
    ]
  )

  cmd('s', [`Smell smelly room`, `You're already holding your nose as it is!`])
  cmd('l', ['lick smelly room', `Just... WHY??`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
  cmd(["down", "c"], [`descend dark stairs`, () => go("clamRoom")])
  cmd("left", [`enter the art gallery`, () => go("artGallery")])
  cmd("right", [`enter long hallway`, () => go("hallOne")])

}
