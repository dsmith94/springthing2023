
const lastBitOfTalking = () => {

  setVal("stockfordDoomed", 3)

  msg(`
  
      "I believe we shall find that with the murderer himself," I said. “A man who can fit inside a travelers trunk,
      open it from the inside after Bennett had gone to bed, and commit a most heinous deed. The Captain's own screams drew the attention
      of dear Mrs Werstrom outside the door.

      “Our culprit thus possessed ample time to return to his box, allow the door to be opened by force, wait until the coast was clear
      before leaving the scene.”

      "Hmm." Gould nodded. "How serendipitous, then, that Bixby discovered this fascinating connection this morning. A fellow,
      possessed of an extraordinary faculty for physical feats, with ties to the Black Walrus Society."

      He produced from this coat a weathered circus advertisement, which read in loud block letters:

      <center><h4>Aldi the Amazing</h4></center>
      <center><h4>Master of Mystic Powers and Escape Artist Extraordinaire</h4></center>
  
  `)

  btn(`"I believe we've found our rat."`, () => {

    msg(`

      "I believe we've found our rat. Thank you, Chief Inspector."

      I stood up to leave the club. Gould sat where he was, deep in thought, clutching his pipe but seemingly unable to 
      smoke.

    `)

  })

}


const lastTalkWithGould = () => {
    
    btn(`Find Gould`, () => {

      const explanation = () => {

        msg(`
        
            "Only that our dear Captain was in league with a 
            congress of wickedness." I told him everything I had discovered, including the 
            plea of Stockford for protection.

            He listened with a dark scowl. After considerable silence, he said: "Bennett, a traitor! Are you certain
            we can believe this Stockford chap?"

            "I suspected it from the moment I read the scraps of letters he buried in his rose garden," I said. "He earned the 
            trust of his fellow brigands and greedily reaped the spoils of his expedient criminal trajectory."

            Gould nodded. "When he wanted to return to England, he betrayed everyone who knew the truth to the hangman's noose."

            "That was his hope. But they went to St. Helena instead."
        
        `)

        btn(`"Hob has escaped."`, () => {

          msg(`
          
            Gould's expression was grim. "Charles Hob, ringleader of the Black Walrus Society, is here," I continued.
            "Somehow he escaped his fate in captivity and I believe him to be in London."

            "Did he murder Bennett?"

            "No," I answered, "But he most certainly had a supervising hand in planning his grisly demise. To 
            find our missing link, we must locate a man who can fit in a luggage box."

            "A man in a box? Is that how he entered the Captain's room?"  
          
          `)

          btn(`"Precisely."`, () => {

            msg(`
            
                "Precisely. Someone—likely someone who was informed of the Captain's increasingly suspicious activities—smuggled
                himself into one of the boxes stored in the warehouse belonging the Bennett."

                "What was he looking for in those boxes?" 
            
            `)

            lastBitOfTalking()

          })

          btn(`"Of course you blind fool."`, () => {

            msg(`

                "Of course you blind fool."

                "You are testing my patience," said Gould with a shade of irritability. "Tell me: what was Bennett looking for in all those luggage boxes?"

            `)

            lastBitOfTalking()

          })

        })

      }

      msg(`
      
        Chief Inspector Gould was not in his office, but at Addington's Club across the street. He sat pensively at his usual 
        table, stuffing his pipe with reddish-brown leaves from the coffin of his pocket tobacco box.

        "I perceive you've been quite industrious," I said.

        His weary eyes fixed on me. "And how did you arrive on that inimitable conclusion?"

        "I happen to be the world's most dazzling detective."

        "No, you're not."

      `)

      btn(`"Of course I am."`, () => {

        msg(`
        
            "Of course I am," I said. "They call me the nimblest mind in Europe."

            "I fear your abilities have led you by streams into a vast ocean of hubris," said Gould,
            shaking his head. "What have you found out?"
        
        `)

        explanation()

      })

      btn(`"No, but I'm the best you have at your disposal."`, () => {

        msg(`
        
            "No, but I'm the best you have at your disposal." I said.

            He sighed. "That is sadly true. What have you found out?"
        
        `)

        explanation()

      })

    })
}