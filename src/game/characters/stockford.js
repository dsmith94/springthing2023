/** @type {CharacterType} */
Game.Stockford = {
    name: 'the man with the pewter cup',
    location: 'insideClub',
    hasMet: false,

    notMet:() => `
    
    A sturdy little man with very black hair and a wide nose sat
    studying me from a table in the corner. He clutched in his considerable grip a pewter
    cup that may have been full of coffee, but was almost assuredly rum.
    
    `,

    desc:() => `
    
    Stockford sat
    studying me from a table in the corner. He gripped his pewter cup of
    rum as though it were a lifeline. 
    
    
    `,

    talk:() => {
        
        setName('Stockford')
        msg(`
        
        At sat at his table. "You, I perceive, are Mr Stockford."
        
        "That's right," said the man with a nervous stare and a low voice. "Are you with the Scotland Yard?"    
        
        `)


        btn(`"Not precisely, but I work with them."`, () => {

            msg(`

            "Not precisely, but I work with them," I said.

            He glanced around the room like a hunted beast. "It's dangerous to talk too much,
            even in here. Can you protect me? I am being watched every hour."


            `)
            setState('gettingDeeper')

        })


        btn(`"Of course not. Who do you take me for?"`, () => {

            msg(`
            
            "Of course not. Who do you take me for?" I said.

            He smiled as though he knew my secret. "Of course you don't."
            
            `)

            setState('gettingDeeper')

        })

        btn(`"Scotland Yard? The police force?"`, () => {

            msg(`
            
            "Scotland Yard? The police force?" I said. "What sort of trouble are you in?"

            "The very worst—I daresay a matter of life and death."
            
            `)

            setState('gettingDeeper')

        })

        done(`"Well, it has been a pleasure to meet you. Good-bye."`)

    },

    scared: () => {

        msg(`"I've aided you enough," he said. "Now go get me the help you promised. I'll be here."`)

        done(`"Thank you, Mr Stockford."`)

    },

    moreDeep: () => {

        msg(`
            
        "He was a member of the Black Walrus Society?" I exclaimed.

        "Shhh. Of course he was. We was mates during the war, we was.
        One of the most gifted thieves of his kind. He stole ruthlessly, a virtuoso of larceny, until he decided to quit as a hero for Queen and country."

        His eyes darted around the room more nervously than before. “The Walrus spans the globe. In order to keep track of who
        he could trust, and who he couldn't, the ol' Captain kept a journal.

        “Charles Hob, a stupendous apothecary of most rancid villainy, wanted that record of conspirators with an almost consuming fire. But
        Bennett tricked him, and sent Hob and his closest lieutenants down to St. Helena.”
        
        `)

        btn(`"But Hob didn't stay in St. Helena, did he?"`, () => {

            msg(`

            "But Hob didn't stay in St. Helena, did he?" I already knew the answer.
            
            "Precisely. Somehow, Hob escaped. Roger wished he'd hanged, or that he'd managed to off that monster himself."

            He leaned in close. "But Hob is alive. There are whispers from dark alleys that he has returned to London."

            The door slammed, echoing like the clap of a revolver. Someone had left the Club. The blood drained from
            Stockford's face.
            
            `)

            setVal('stockfordDoomed', 1)

            setState('scared')


        })

        btn(`"And what came of Hob after that?"`, () => {
            
            msg(`

            "And what came of Hob after that?" I asked.
            
            "I suspect Roger thought he'd hang," said Stockford, "Or perish under the cruel yoke of incarceration."
            
            He leaned in close. "Hob escaped. There are whispers from dark alleys that he has returned to London."

            The door slammed, echoing like the clap of a revolver. Someone had left the Club. The blood drained from
            Stockford's face.
            
            `)

            setVal('stockfordDoomed', 1)

            setState('scared')

        })


    },


    gettingDeeper: () => {

        msg(`

        "I can indeed assist you. But first you must assist me. How are you connected to the Black
        Walrus Society?"

        He rolled up the sleeve and the tattoo of a sinister walrus peeked out from beneath his cuff.
        "I want out, before my blighted soul licks the flames of perdition."
        
        `)

        btn(`"How long have you been a member?"`, () => {

            msg(`

            "How long have you been a member?" I asked.
            
            "Since Roger recruited me," said Stockford.
            
            `)

            setState('moreDeep')

        })

        btn(`"Did you know Captain Roger Bennett?"`, () => {

            msg(`
            
            "Did you know Captain Roger Bennett?" I asked.

            "Of course I did," said Stockford. "He recruited me."
            `)

            setState('moreDeep')

        })

        done(`"Stay here while I get help."`)

    },

}
