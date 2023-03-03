/** @type {LocationType} */
Game.manorGrounds = () => {

    msg(`

    A few humble rose bushes formed the basis of a tiny baroque garden just north of the manor house. The scent of
    newly dug dirt and floriferous perfume was heavy.
    Precious little could be seen under the cover of dark, but a small patch of fresh muddy soil appeared to have
    been disturbed recently.

    `)

    once(`Investigate the disturbed soil`, () => {
        setVal('hob', true)
        msg(`
        
        Arming myself with a sturdy discarded branch, I began sifting through the soil until discovering a 
        homely little cherry wood box.

        Inside was a series of letters, each with a single short sentence:

        `)

        spaced(`*We execute betrayers*`)

        spaced(`*Hob remembers*`)

        spaced(`*Your time is up*`)

        spaced(` `)


        msg(`
        
        Each was flourished with a signature black India-ink scrawl of a
        walrus.
        
        `)

    })

    btn(`Return to the manor house`, go('manorHouseFoyer'))
}

