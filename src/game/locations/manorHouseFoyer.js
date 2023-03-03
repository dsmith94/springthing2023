/** @type {LocationType} */
Game.manorHouseFoyer = () => {

    const readyToLeave = (getVal('hob') && getVal('foundHiddenChest') && getVal('foundBankAddress'))

    readyToLeave ? msg([`
        "Chief Inspector Gould has returned," said Bixby. "He is outside with transport to take you back to
        Limehouse, when you're finished here."
    `,
    `
        Bixby was listless. He appeared ready to leave.
    `
    ])
    : msg(`
        A clearly annoyed Detective Sergeant Bixby was dutifully waiting to aid me in my investigation.
    `)

    btn(`"Bixby, show me the crime scene."`, () => {
        go('crimeScene')()
    })

    btn(`"Bixby, I will interview Mrs. Werstrom."`, () => {
        go('talkToWerstrom')()
    })

    btn(`"Bixby, I will interview Mr. Thurman."`, () => {
        go('talkToThurman')()
    })

    getVal("roseGarden") && btn(`"I'd like to investigate the grounds."`, () => {
        hasVisited("manorGrounds") && msg(`"Of course," said Bixby, handing me a candle.
        "It's very dark tonight, so you'll need a light."`)

        go('manorGrounds')()
    })

    btn(`"What do you think, Bixby?"`, () => {
        msg(`"What do you think, Bixby?" I asked.`)
        msg([
            `"You're the China Doll," he said with no small derision. "Are you not the 
            nimblest mind in Europe?"`,
            `He shrugged. "Why are *you* asking me?"`,
            `Bixby only scowled at the question.`,
        ])
    })

    readyToLeave && btn(`Depart for Limehouse`, () => {
        msg(`
        
        Gould was in the hansom, waiting for me. "Any success, Madame?"

        "Perhaps. Does this symbol mean anything to you?" I showed him the letters from the garden. 
        He stared intently for some time at the walruses.

        "Come see me in the morning at Scotland Yard," he said to me, "And, if you would please, don't come back to the manor house.
        Official inquiry business, and no shortage of reporters. I would prefer if you stayed clear of the public light, Madame Soo."

        "Fine to my accord," said I. "I have no desire to return. Werstrom and Thurman are innocent. Our
        murderer has slipped away, back to Central London, if my deductive powers are not amiss."

        The ride continued in silence.
        
        `)

        btn(`The next morning...`, go('streetsOfLondon'))
    })

}