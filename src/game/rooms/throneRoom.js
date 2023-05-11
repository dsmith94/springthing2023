
Game.rooms.throneRoom = () => {
  header(`Throne Room`)

  desc(`Once, this was a magnificent throne room, but has been long abandoned.`)

  setExitsHeader(["right", "up"])
  cmd('s', [`Smell throne room`, `It smells of old royalty.`])
  cmd('l', ['lick throne room', `You're a strange one, aren't you?`])

  cmd(["down", "left"], [
      `plant nose firmly into wall`,
      `Your face smarts for a moment after walking straight into the stone wall.`,
    ])

  cmd("right", [`exit throne room`, () => go("entryHall")])
  cmd("up", [`exit throne room`, () => go("artGallery")])
}
