
/** @type {LocationType} */
Game.manorHouseFoyer = () => {

    msg(`
    
    The captain's taste was opulent and international. Large brass Arabic lamps flickered gently over
    lavish French furniture and Cantonese rugs. It seemed to me that the home reflected the
    man himself; well traveled, and pilfering trinkets where-ever he went.
    
    A clearly annoyed Deputy Inspector Bixby was dutifully waiting to aid me in my investigation.

    `)

    btn(`"Bixby, show me the crime scene."`, () => {
        msg(`
            "Very well."
        `)
        go('crimeScene')()
    })

    btn(`"Bixby, I will interview Mrs. Werstrom."`, () => {
        msg(`
            "Very well."
        `)
        go('interviewWerstrom')()
    })

    btn(`"Bixby, I will interview Mr. Thurman."`, () => {
        msg(`
            "Very well."
        `)
        go('talkToThurman')()
    })

    btn(`"What do you think, Bixby?"`, () => {
        msg(`"What do you think, Bixby?" I asked.`)
        msg([
            `"You're the China Doll," he said with a note of derision. "Are you not the 
            nimblest mind in Europe?"`,
            `He shrugged. "Why are *you* asking me?"`,
            `Bixby only scowled at the question.`,
        ])
    })

}