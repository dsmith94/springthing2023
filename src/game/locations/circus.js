
Game.circus = () => {

    msg(`
    
        Astley's Royal Circus was a grim gray theater in a sea of bleakness.
        The whole of the building was shut up and dark, but in the corner of my mind
        I could almost hear sinister organ music 
        
        A large rough door stood facing the street.
    
    `)

    once(`Open the door`, `To no avail, the door is locked tight.`)

    btn(`Knock on the door`, () => {

        msg([`
        
            A pair of suspicious eyes meets me through a tiny slit. "The circus is closed," said a 
            brutish voice.
        
        `,
        `

            "How many times can I tell ye, the circus is closed!"

        `
        ])

        btn(`"I'm here to see someone, on official business."`, () => {

            msg(`
            
              "You don't look much official," said the man. "Who are you here to see?"  
            
            `)

            inp(`Enter the name of a person, like *Bixby*.`, result => {

                const parse = (res) => result.indexOf(res) > -1

                if (parse('aldi')) {

                    if (getVal('stockfordDoomed') === 3) {
                        btn(`"He's in here," said the man.`, go('insideCircus'))
                    } else {
                        msg(`
                        
                            "He's not present," said the man. "Come back later."
                        
                        `)
                    }
                    return
                }
                
                msg(`

                ${pick([
                    `"Never heard of 'im," said the man.`,
                    `"Find someone else to pester,"  said the man.`,
                    `"That bloke doesn't work here," said the man.`,
                ])}
            
                `)

            })

        })

        once(`"I demand to be let inside, a man has been murdered!"`, `
        
            "I demand to be let inside, a man has been murdered!" I cried.

            The man chuckled in response and mumbled: "Only in London."

        `)

        btn(`"Clearly I have the wrong address. Thank you, sir."`, () => {

            msg(`
            
            "Clearly I have the wrong address. Thank you, sir."

            He responded with a weary hurumph.
            
            `)

        })

    })
    
    btn(`Catch a cab`, go("cabbie"))

}
