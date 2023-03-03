/** @type {LocationType} */
Game.start = () => {
  msg(`

    ## Secret of the
    # Black Walrus
    
    ### A game by spaceflounder
    
    `)

  btn("First Time Playing", go("firstTime"))

  btn("Start", go("intro1"))

  btn(
    "I've played before, take me straight to the crime scene",
    go("manorHouseFoyer")
  )
}

Game.firstTime = () => {
  msg(`

    ### Tips for First Time Detectives
    `)

  spaced(
    `❧ Write down every clue during your investigation. The best crime-solvers use a pen and paper!`
  )

  spaced(
    `❧ Talk to everyone. It may be helpful to talk to some characters more than once.`
  )

  spaced(`❧ Near the end of the story, you will be asked to identify the villain.
    It is technically possible to lock yourself out of victory, so be sure you've caught the right suspect.`)

  btn("I'm ready to solve the mystery", go("start"))
}

Game.intro1 = () => {
  msg(`

    ### London Chinatown, 1884

    You've never read about me in the papers, or in any journal. You can
    call me Madame Soo. Sometimes, at Scotland Yard, they call me the China Doll.
    They are not entirely a bad lot, I suppose. But when the police find 
    themselves truly baffled, they come to me.

    It was late. I was in my small parlour off of West India Dock Road. There was an urgent knock at the door.
    
    `)

  btn("Open the door", go("intro2"))
  btn("Wait", go("intro1_1"))
}

Game.intro1_1 = () => {
  msg(`

    The rap on my door came again, more insistent this time.
    
    `)

  btn("Open the door", go("intro2"))
  btn("Wait", go("intro1_1"))
}

Game.intro2 = () => {
  msg(`

    Chief Inspector Gould's face appeared in the dim moonlight.
    "Good evening, Madame Soo," he said, entering as
    swiftly as he could and shutting the door behind him.

    "Good evening, Inspector," I replied. As a tall
    pale gaunt Englishman, he possessed superior skill in looking dour.
          
    `)

  btn(`"This is scarcely a decent hour."`, () => {
    msg(`
    
    "This is scarcely a decent hour," I said. "Nearly a quarter of eight."

    "True," said the Inspector, "But this is scarcely a decent place. I should be quite gay indeed not to 
    venture deep into Limehouse each time I needed your inimitable skills."

    `)

    btn(`"Then I shall assume the matter is of murder."`, () => {
      msg(`
        "Then I shall assume the matter is of murder," I said, "And likely a figure of some importance."
      `)
      go("intro3")()
    })

    btn(`"You've come for a social call, then?"`, () => {
      msg(`
      
      I favoured him with a wry grin. "You've come for a social call, then?"
      
      `)
      go('intro3_1')()
    })
  })

  btn(`"Shouldn't you be at the Underwood Club?"`, () => {
    msg(`
    
    "Shouldn't you be at the Underwood Club?" I asked. "Surely Merrington and his fellows are grieved
    to have lost their favored pigeon at whist."

    "Ha, ha." Gould was hardly pleased. "One day I shall be most glad to ascertain how you have come
    to be aware of my whist habits, or my associates, as Underwood is a private gentleman's club."

    "You're at a loss, as I have never entered the club myself, for I am no gentleman.".

    "For a certainty you are not."
    
    `)

    btn(`"I presume you are here to engage my skills."`, () => {
      msg(`
        "I presume you are here to engage my skills," I said. "And I would further surmise the nature of the crime
        is quite serious."
      `)
      go("intro3")()
    })

    btn(`"You've come for a social call, then? It is quite late."`, () => {
      msg(`
      
      I favoured him with a wry grin. "You've come for a social call, then? It is quite late."
      
      `)
      go('intro3_1')()
    })
  })
}

Game.intro3 = () => {
  msg(`
          
  "You are wholly correct," said Gould, his face grim. "Might I convey the particulars of the case
  on the way? I have a hansom waiting for us." 


    `)

  btn(`"I will exact my usual fee, of course."`, go("intro4"))
}


Game.intro3_1 = () => {
  msg(`
          
  "More sparks of keen wit," said Gould with a vexed sigh. "Come, we have work to do. I have a hansom waiting for us." 

    `)

  btn(`"I will exact my usual fee, of course."`, go("intro4"))
}


Game.intro4 = () => {
  msg(`
          
  I nodded. "I will exact my usual fee, of course."

  "Per our usual arrangement," said the Inspector. Soon we were out of my parlour and in the wet dark
  of winter in Canary Wharf. The air was thick with tar and cheap tobacco. The dock never sleeps.

  The cabbie nodded as we took our seats, and with a flick of his wrist we were headed
  north. "You've heard of Captain Roger Bennett?"

    `)

  btn(`"Captain Bennett, of the Queen's Navy?"`, () => {
    msg(`
    
    "Captain Bennett, of the Queen's Navy?" I replied.

    "The same," said Gould, "Though he was more a privateer than the heroic sea commander you've been regaled of in the papers.
    Bennett was a bachelor, living with a housekeeper and a gardener. At about half past six this evening he retired to his
    bedroom. The door to his room was shut and locked. A few minutes later, the housekeeper, a certain
    Mrs. Werstrom, heard an awful scream from the bedroom."
    
    `)

    btn(`"Was the door still locked?"`, () => {
      msg(`
        
        "Was the door still locked?" I asked.

        "It was," said Gould, "The gardener, Mr. Thurman, is a capable man and handy with tools. He removed the knob and they
        found Bennett perished by strangulation in his bed."
        
        `)

      btn(`"I assume the crime scene is as you found it."`, go("intro5"))
    })
  })

  btn(`"I've heard of him."`, () => {
    msg(`
    
    "I've heard of him," I said.

    Gould nodded. "In truth, he was more a privateer than the navy man you've read about in the papers.
    Bennett was a bachelor, living with a housekeeper and a gardener. At about half past six this evening he retired to his
    bedroom. The door to his room was shut and locked. A few minutes later, the housekeeper, a certain
    Mrs. Werstrom, heard an awful scream from the bedroom."
    
    `)

    btn(`"And the door was still locked."`, () => {
      msg(`
        
        "And the door was still locked," I said.

        "It was," said Gould, "The gardener, Mr. Thurman, is a capable man and handy with tools. He removed the knob and
        found Bennett perished by strangulation in his bed."
        
        `)

      btn(`"I assume the crime scene is as you found it."`, go("intro5"))
    })
  })
}

Game.intro5 = () => {
  msg(`

      I nodded. "I assume the crime scene is as you found it."

      "Exactly as we found it," said the Inspector. "Mrs. Werstrom and Mr. Thurman are also present to interview."
    
    `)

  btn(`"Excellent!"`, go("intro6"))
}

Game.intro6 = () => {
  msg(`

      "Excellent!" I said. "Thank you, Chief Inspector."

      "I shall only hope you may shed some light on this strange and sinister business," said Gould with a dark scowl.
      
      Soon our hansom arrived at the gate of a wide rolling lawn, blue under the light of the moon. Beyond the lawn
      was a tall manor house, a black shadowy tower by night.

      "Stay here," Gould instructed the cabbie as we departed, "I'll be back shortly."
    
    `)

  btn(`Proceed to the manor house`, go("intro7"))
}

Game.intro7 = () => {
  msg(`

      We stood on a wide stone porch in nearly total darkness. The door swung open to reveal
      Detective Sergeant Bixby, Gould's usual confederate. Whereas Gould exhibited occasional glimmers
      of brilliance, Bixby had a mind like a lightless cellar.

      "Good news, Chief Inspector," he said. "I've cracked the case. It would seem you've fetched the
      China Doll in vain."
      
    `)

  btn(`"Most pleased to see you as well, Bixby."`, () => {
    msg(`"Most pleased to see you as well, Bixby," I grumbled.`)
    go("intro8")()
  })

  btn(`"Hmm. What is your theory, Mr. Bixby?"`, () => {
    msg(
      `I was more curious than offended. "Hmm. What is your theory, Mr. Bixby?"`
    )
    go("intro8")()
  })
}

Game.intro8 = () => {
  msg(`

      "The case is simplicity itself," said Bixby with a broadening grin. Bixby was
      fairly young for his position, though he appeared older owing to some girth
      and a slick copper mustache. "As you no doubt recall, Mrs. Werstrom discovered the body."

      "She did indeed," nodded Gould.

      "How do we know she isn't the murderer?"

      "The 90 pound, 60-year old housekeeper managed to choke the still-robust captain of
      the Royal Navy," said Gould. "I think we may perhaps have some keener results from the
      so-called China Doll, eh Madame Soo?"
      
    `)

  btn(`Enter the house`, () => {
    msg(`
    
    "I've business still at Scotland Yard, so I must leave," said Gould to me, "But I shall return later tonight
    to confer on the investigation. Bixby," he addressed the assistant deputy, "Please ensure Madame
    Soo has everything she asks for. She is in charge in my absence."

    Bixby mumbled something I was glad to not have heard.
    
    `)

    btn(`"Thank you, Chief Inspector. I shall examine the crime scene in your absence."`, () => {

      msg(`

      Gould left for the hansom and I stepped inside. I found
      the captain's taste both opulent and international. Large brass Arabic lamps flickered gently over
      lavish French furniture and Cantonese rugs. The home reflected the
      man himself; well traveled, and pilfering trinkets where-ever he went.  
      
      `)
      go("manorHouseFoyer")()

    })

    btn(`"Can you put Officer Bixby under my authority on a more permanent basis?"`, () => {

      msg(`

      Gould vanished into the dark and Bixby shot me a look of scarcely contained rage. "Perhaps,
      China Doll, you'll one day get your comeuppance."

      I stepped inside, and the relentless chill of the night began to fade.
      I found the captain's taste both opulent and international. Large brass Arabic lamps flickered gently over
      lavish French furniture and Cantonese rugs. The home reflected the
      man himself; well traveled, and pilfering trinkets where-ever he went.  
      
      `)
      go("manorHouseFoyer")()

    })

  })
}
