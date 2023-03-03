
Game.scotlandYard = () => {
  msg(
    `
    
    Scotland Yard was a gray, unimaginative building of brick and fog, an unextraordinary den
    of ferocious and bloodthirsty bureaucrats.
    
    `)

  if (getVal('stockfordDoomed') === 2) {
    lastTalkWithGould()
  } else {

    !hasVisited("scotlandYard") &&
      btn(`Find Gould`, () => {
        msg(`
          
        Gould appeared with great black pouches beneath his eyes. "Did you sleep, Madame?"
    
        "I slept well," said I. "And I've come to some conclusions. First, that Captain Bennett's 
        murderer did not come through the window. That leaves only one route: the door."
    
        "Which was locked," interjected Gould.
    
        "Correct. Neither the gardener nor the housekeeper saw the villain. Thus: we have a dual-problem;
        how the murderer entered the room, and how he left."
        
        "Simplicity itself," Gould snarled. "If only all our crimes were such trifles."
    
        "I detect you found no rest last night."
    
        "Not a wink." He gave a hoarse laugh. "Not even a morsel of slumber. Thanks to that walrus you showed me, I spent all my bedroom hours
        on a wild goose chase. Nonetheless, it was not without fruit. Come with me."
    
        `)
        btn(`Follow Gould down the stairs into a dark passage`, () => {
          msg(`
            
            "I'm taking you to a place most common citizens never see," said Gould. "Officially, it doesn't exist."
    
            "Aha. The Secret Museum of Scotland Yard?"
    
            "Of course, you already know of it," he with some disgust. "Well, it does exist.
            Down here are papers on every criminal case, solved and unsolved, in our history. I've placed a friend
            here to help you today while I deal with the official inquiry."
            
            `)

          btn(`Continue downstairs`, () => {
            msg(`
              
                Finally we emerged into a vast underground maze of savagery, mayhem and murder. "Here we are,"
                said Gould, "The Secret Museum. In here, we collect all there is to know about crime in this benighted city,
                on and off the record."

                Bixby met me with his usual grimace. "And because of you, China Doll, I have to spend a whole murder investigation
                in the basement. Well done."

                "I've placed Bixby down here, just for today, to assist your research," said Gould. "I've already asked him to get 
                ready on the Black Walrus papers. And though it goes without saying, be careful—these fellows are a vicious lot."

                Gould left up the stairs, leaving me with Bixby.
              
              `)

            btn(`Let's get to work`, go("museum"))
          })
        })
      })

    if (hasVisited("scotlandYard") && getVal('stockfordDoomed') < 2) {
      
      btn(`Enter the museum`, go("museum"))
      
    }

  }

  btn(`Catch a cab`, go("cabbie"))

}
