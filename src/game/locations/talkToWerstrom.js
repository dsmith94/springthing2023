/** @type {LocationType} */
Game.talkToWerstrom = () => {
    msg(`
        
        Mrs. Werstrom sat in the kitchen, her haggard face lit by dim candlelight. 
        
        `)
  
    once(
      `"Thank you for meeting with me."`,
      `
  
        "Thank you for meeting with me," I said. "I've only a few questions."
        
        Mrs. Werstrom merely shook her head. "Poor blighter."
        
        `
    )
  
    btn(`"Did Captain Bennett have any enemies?"`, [
      `
        "Did Captain Bennett have any enemies?" I asked.
        
        Mrs. Werstrom was silent for a long time. "We all knew the Captain had enemies. And secrets.
        Dark secrets."
        
      `,
      `      
      "We all knew the Captain had enemies. And secrets.
      Dark secrets."
      `,
    ])

    once(
        `"Can you describe the events leading up to the murder?"`,
        `
    
        "Can you describe the events leading up to the murder?" I asked.
          
        "The Captain retired early this evening," said Mrs. Werstrom. "Locked himself in his room.
        I heard a terrible scream after that."
        
        "And it was Mr. Thurman who managed to get the door open after it had been locked and shut?"

        She nodded.

        "But you entered first?"

        Her eyes were rimmed with hysteria, and her lips refused to move.

        I nodded. "Thank you, Mrs. Werstrom."

        `)
  
    btn(
      `"Was there any reason to believe Captain Bennett's life was under threat?"`,
      () => {
        setVal('foundBankAddress', true)
        msg([
          `
  
        "Was there any reason to believe Captain Bennett's life was under threat?" I asked.

        "I knew something was amiss," she said. "He kept receiving letters that seemed to agitate him."

        "Agitate him how?"

        "He was as a caged animal," said Mrs. Werstrom. "Almost as if he were being watched."

        I thought on that for a moment.

        "He also spent a very good deal of time at the warehouse," Mrs. Werstrom continued. "That's where
        all the trunks upstairs came from. Trunks and trunks of goods from all over the world. Bring 'em
        back 'ere and sort through him in his bedroom."

        "What was he searching for?"

        "No idea, Miss."

        "Can you tell me where to find this warehouse?"

        After a moment of looking through the Captain's papers, she returned with an address:

        *132 Spaulding Road*
        
        
      `,
          `
      
          She showed me an envelope with a carelessly scrawled return address:

          *132 Spaulding Road*

      `,
        ])
      }
    )
  
    btn(`"Thank you, Mrs. Werstrom."`, go("manorHouseFoyer"))
  }
  