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
    
    Wrapped beneath his sheets were the pale remains of the Captain, naked as a plucked hen. His skin was icy and blue.
    Judging by the state of the rigor mortis, I ascertained he had met his unconscionable demise less than a few hours.
    The trachea in the neck was crushed.
    
    `
  )

  once(
    `Examine the window`,
    `
    
    Caked layers of dust and told me the window had not been opened in years, and for a fact,
    could not be opened without the force of three men.
    
    `
  )

  once(`Examine the chests`, () => {
    setVal("foundHiddenChest", true)

    msg(`
    
    Most of the chests were empty. A few had some useless baubles acquired from more
    distant regions.

    One chest in particular struck me as unusual, as though not belonging with the rest of
    the collection.
    
    `)
  })

  getVal("foundHiddenChest") &&
    btn(
      `Examine the unusual chest`,
      `
    
    The strange chest was no more than about 3 foot long and 2 foot wide. There was a latch
    on the lock so it could be opened on the inside. It was empty, save for the rude odor
    of sweat and leather.

    Carved on the bottom, in lettering so faint as to be barely readable:
    
    *ASTLEY RT*
    
    `
    )

  btn(`Exit the crime scene`, go("manorHouseFoyer"))
}
