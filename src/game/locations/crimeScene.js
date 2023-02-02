/** @type {LocationType} */
Game.crimeScene = () => {
  msg(`
    
    The captain's room was dark. His body was on the bed, the ghastly visage of death
    on his face lit only by moonlight through the window. Luggage boxes where everywhere,
    as though thrown about the cargo hold of a ship, so there was only a narrow path
    of floor to walk. 
    
    `)

  btn(
    `Examine the captain`,
    `
    
    Under the sheets, Bennett was naked. Judging by the state of the rigor mortis,
    I ascertained he had been dead less than a few hours. The trachea in the neck was crushed.
    
    `
  )

  btn(`Inspect the chests`, () => {
    setVal('foundHiddenChest', true)
  
    msg(`
    
    Most of the chests were empty. A few had some useless baubles acquired from more
    distant regions.

    One chest in particular struck me as unusual.
    
    `)
  })

  getVal("foundHiddenChest") &&
    btn(
      `Examine the unusual chest`,
      `
    
    The strange chest was no more than about 3 foot long and 2 foot wide. There was a latch
    on the lock so it could be opened on the inside. It was empty, save for the rude smell
    of sweat and leather.
    
    `
    )

  btn(`Exit the crime scene`, go("manorHouseFoyer"))
}
