
Game.rooms.mirrorsHall = () => {
  if (game.things.barbershopQuartet.location === 'mirrorsHall') {
    header(`Hall of Mirrors`)
    desc(`You're in a room full of warpy mirrors, like in a funhouse.`)
    cmd(
        ["left", "right"],
        [
        `I want to walk into a mirror`,
        `You have successfully smudged a mirror.`,
        ]
    )
    cmd("up", [`enter the rose garden`, () => {
        kill(`“FOOL!” cries a well-harmonized set of voices. As the word hangs in the air, the walls made of mirror-glass shudder treacherously.
        “Now you will experience SHAVE-AND-A-HAIRCUT... FOR DEATH!”`, `You have been cut short`, 'mirrorsHall')
    }])
    cmd("down", [`enter the room of 10000 spikes`, () => {
        msg(`A fragment of a sinister harmony carries on the air as you leave.`)
        go("sharpRoom")
    }])
  } else {
    header(`Hall of (Smashed) Mirrors`)
    desc(`You're in a room full of broken shards and dangerous, cut glass.`)
    cmd(
        ["left", "right"],
        [
        `I want to walk into the broken glass`,
        `Sure.`
        ]
    )
    cmd("up", [`enter the rose garden`, () => go("roseGarden")])
    cmd("down", [`enter the room of 10000 spikes`, () => go("sharpRoom")])
  }


  setExitsHeader(["up", "down"])


  cmd('s', ['smell hall of mirrors', `You reflect on the smell of the Hall of Mirrors.`])
  cmd('l', ['lick hall of mirrors (with my tongue)', `You just HATE your tongue, don't you?`])
  cmd('f', ['feel hall of mirrors', `You'll cut yourself.`])


}


