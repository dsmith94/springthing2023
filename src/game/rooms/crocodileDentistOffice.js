
Game.rooms.crocodileDentistOffice = () => {
  header(`Crocodile Dentist Office`)

  desc(`Soft jazz plays from a quiet speaker overhead, inoffensive as the white fluorescent lights and 
  the stack of ancient magazines on the table.`)

  setExitsHeader(["right", "left"])

  cmd('l', [`taste office`, `Umm, no.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])

  cmd('s', [`smell office`, `It smells of novocaine.`])
  cmd('r', [`read very old magazines`, `Nah, you did that word jumble back in 1983.`])

  cmd(
    ["down", "up"],
    [
      `find wall with my nose`,
      `You found it! You can't go that way.`,
    ]
  )

  cmd("left", [`exit crocodile dentist office`, () => go("throneRoom")])
  cmd("right", [`exit crocodile dentist office`, () => kill(`The crocodile 🐊 dentist devours you as you attempt to pass! As he eats you, you decide he could definitely improve his flossing technique.`, `Never smile at a crocodile`, 'crocodileDentistOffice')])
}

