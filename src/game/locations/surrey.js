/** @type {LocationType} */
Game.surrey = () => {

    (getVal('stockfordDoomed') !== 1) && msg(`
    
    An dim little club composed of sooty gray stones stood on the corner, consumed in smoke and fog.
    The air was dingy and uncongenial.        
    
    `)

    if (getVal('stockfordDoomed') === 1) {
        msg(`
        
            "Another blossom, Madame?" came a voice from behind me. Romica was waiting as I emerged from 
            the Surrey Club.

            "I have no need of flowers," I said. "And can scarcely afford them anyways."

            "No, you're right," she said. "You just need a little spin in the right direction."

            "And how much will that cost me?"

            "For you, Madame? Only nothing."

            My patience was dwindling. "I've precious little time for mischief. Presently I'm off to Scotland Yard in due haste."

            "Why for?" Romica tilted her head with a savage smile. "To save him, in there? He's as good as dead."

            And just like that, she was gone again.
        
        `)
        setVal('stockfordDoomed', 2)
    }

    btn(`Enter the club`, go('insideClub'))

    btn(`Catch a cab`, go('cabbie'))

}

/** @type {LocationType} */
Game.insideClub = () => {

    msg(`
    
    Inside, the Surrey Club hung heavy with tobacco and opium. The patrons were not a respectable sort; they sat quietly, ensconced in a fume
    of pathetic iniquity.
    
    `)

    btn(`Leave the Surrey Club`, go('surrey'))

}

