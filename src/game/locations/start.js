/** @type {LocationType} */
Game.start = () => {
  msg(`

    # Mystery story
    
    ## A game by spaceflounder
    
    `)

  btn("Start", go("intro1"))
}

Game.intro1 = () => {
  msg(`

    ### London Chinatown, 1884

    You've never read about me in the papers, or in any crime journal. On the streets, they
    call me Madame Soo. Sometimes, to Scotland Yard, I'm the China Doll, or the Invisible Detective.
    They're not entirely a bad lot, I suppose. But when the police find 
    themselves truly baffled, they come to me.

    Thus, when there was an urgent knock on the door of my small parlour off West India Dock Road, I knew precisely who
    would be on the other side.
    
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

    Chief Inspector Gould's face appeared in the dim moonlight. "Good evening, Madame Soo," he said, entering as
    swiftly has he could and shutting the door behind him.

    "Good evening, Inspector," I replied. His face was grim.
          
    `)

  btn(`"This is scarcely a decent hour."`, () => {
    msg(`
    
    "This is scarcely a decent hour," I said. "Nearly a quarter of eight."

    "True," said the Inspector, "But this is scarcely a decent place. I should be quite gay indeed not to 
    venture deep into Limehouse each time I needed your inimitable skills."

    `)

    btn(`"Then I shall assume the matter is of murder."`, go("intro3"))
  })

  btn(`"Shouldn't you be at the Underwood Club?"`, () => {
    msg(`
    
    "Shouldn't you be at the Underwood Club?" I asked. "Surely Merrington and his fellows are grieved
    to have lost their favored pigeon at whist."

    "Ha, ha." Gould was less than pleased. "One day I shall be most glad to ascertain how you have come
    to be aware of my whist habits, or my associates, as Underwood is a gentleman's club."

    "You're at a loss as I am no gentleman," I said.

    "For a certainty you are not."
    
    `)

    btn(`"Then I shall assume it is a matter of murder."`, go("intro3"))
  })
}

Game.intro3 = () => {
  msg(`
          
  "Then I shall assume the matter is of murder," I said, "And likely a figure of some importance."

  "You are wholly correct," said Gould, his face grim. "Might I convey the particulars of the case
  on the way? I have a hansom waiting for us." 


    `)

  btn(`"I will exact my usual fee, of course."`, go("intro4"))
}

Game.intro4 = () => {
  msg(`
          
  I nodded. "I will exact my usual fee, of course."

  "Per our usual arrangement," said the Inspector. Soon we were out of my parlour and in the hot dark
  of summer in Canary Wharf. The air was thick with tar and cheap tobacco. The work on the dock never
  stops.

  The cabbie nodded as we took our seats, and with a flick of his wrist we were headed
  north. "You've heard of Captain Roger Bennett?"

    `)

  btn(`"Captain Bennett, of the Queen's navy?"`, () => {
    msg(`
    
    "Captain Bennett, of the Queen's navy?" I replied.

    "The same," said Gould, "Though he was more a privateer than the navy man you've read about in the papers.
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

        "It was," said Gould, "The gardener, Mr. Thurman, is a capable man and handy with tools. He removed the knob and they
        found Bennett perished by strangulation in his bed."
        
        `)

      btn(`"I assume the crime scene is as you found it."`, go("intro5"))
    })
  })
}

Game.intro5 = () => {
  msg(`

      I nodded. "I assume the crime scene is as you found it."

      "Exactly as we found it," said the Inspector. "Mrs. Werstrom and Mr. Thurman are also on hand for you to interview."
    
    `)

  btn(`"Excellent!"`, go("intro6"))
}

Game.intro6 = () => {
  msg(`

      "Excellent!" I said. "Thank you, Chief Inspector."

      "I shall only hope you may shed some light on this strange and sinister business," said Gould with a dark scowl.
      
      Soon our hansom arrived at the gate of a wide rolling lawn, blue under the light of the moon. Beyond the lawn
      was a tall manor house, resembling a black shadowy tower by night.

      "Stay here," Gould instructed the cabbie as we departed, "I'll be back shortly."
    
    `)

  btn(`Proceed to the manor house`, go("intro7"))
}

Game.intro7 = () => {
  msg(`

      We stood on a wide stone porch before a thick timber door. The door swung open to reveal
      Bixby, Chief Inspector Gould's assistant deputy. Whereas Gould had occasional glimmers
      of brilliance, Bixby had a mind like a lightless cellar.

      "Good news, Chief Inspector," he said. "I've cracked the case. You needn't have retrieved the
      China Doll."
      
    `)

  btn(`"Always pleasant to see you as well, Bixby."`, () => {
    msg(`"Always pleasant to see you as well, Bixby," I grumbled.`)
    go("intro8")()
  })

  btn(`"Hmm. What is your theory, Mr. Bixby?"`, () => {
    msg(`I was more curious than offended. "Hmm. What is your theory, Mr. Bixby?"`)
    go("intro8")()
  })
}

Game.intro8 = () => {
  msg(`

      "The case is simplicity itself," said Bixby with a broadening grin. "You know how 
      Mrs. Werstrom found the body?"

      "Yes," nodded Gould.

      "How do we know she isn't the murderer?"

      "The 90 pound, 60-year old housekeeper managed to choke the still-robust captain of
      the Queen's navy," said Gould. "I think we shall have greater success with the
      so-called China Doll, eh Madame Soo?"
      
    `)

  btn(`Enter the house`, () => {

    msg(`
    
    "I've business still at Scotland Yard, so I must leave," said Gould to me, "But I shall return later tonight
    to confer with you on your investigation. Bixby," he addressed the assistant deputy, "Please ensure Madame
    Soo has everything she asks for. She is in charge in my absence."

    Bixby mumbled something I was glad to not have heard.
    
    `)
    go("insideManorHouse")()
  })
}
