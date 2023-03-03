
/** @type {LocationType} */
Game.streetsOfLondon = () => {

    msg(`

    The morning was cold. A heavy roll of fog covered the cobblestone streets, damp and gray.
    
    My mind was steeped in the horrors of the previous night.
    The sea hero, dead in his own bed. The box in the rose garden. That strange, sinister mark
    of the walrus.

    `)

    btn(`Call a cab`, go('cabbie'))
}
