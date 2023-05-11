
Game.rooms.clamRoom = () => {
  header(`Dungeon`)
  
  desc(`You are in the dungeon. The castle walls round off into a bleak damp cave. The 
  air is thick and wet.`)
  
  setExitsHeader(["up", "down"])
  cmd('s', ['smell air', `It smells like an enormous clam has lived in here for years-so, pretty much like Skippers.`])
  
  cmd(
    ["left", "right"],
    [
      `walk into cave wall`,
      `You resist the urge to smack straight into a cave wall.`,
    ]
    )
    
    
    cmd(["up", "c"], [`ascend stairs`, () => {
      if (game.things.ferociousClam.location === 'clamRoom') {
        msg(`You dodge the attack of the fearsome clam and run up the stairs, narrowly escaping with your life!`)
      }
      go("smellyRoom")
    }])

    cmd('down', [`descend deeper into the dungeon`, () => {
      if (game.things.ferociousClam.location === 'clamRoom') {
        msg(`You dodge the attack of the fearsome clam and run down the stairs, narrowly escaping with your life!`)
      }
      go('dragonCave')
    }])
    
  }
  
  