/** @type {LocationType} */
Game.talkToThurman = () => {
  msg(`
      
      Thurman was a hearty man with curly hair and glinting eyes that had a hint of Irish to them.
      He sat in the den by the fire, slumped in an armchair, sleepless but exhausted. 
      
      `)

  once(
    `"Thank you for meeting with me."`,
    `

      "Thank you for meeting with me," I said.
      
      Thurman shrugged. "Of course. Though if you don't mind me saying, Madame, you
      don't seem much like the Scotland Yard sort."
      
      `
  )

  once(
    `"Did you discover the body?"`,
    `

    "Did you discover the body?" I asked.
      
      "No." Thurman's face grew pallid. "Mrs. Werstrom... He locked himself in his room and she
      heard a dreadful scream."

      "Did it sound like his voice?"

      "It was the Captain, for certain. I broke the lock, but it was too late." His eyes were haunted. "There was not
      a living soul in that room, Madame."

      "And after that, you contacted Scotland Yard?"

      "I walked to Dent's and sent Abbot to get help. He did so remarkably fast."
      
      `
  )

  btn(`"Did Captain Bennett have any enemies?"`, [
    `
      "Did Captain Bennett have any enemies?" I asked.
      
      "He was in the Royal Navy," said Thurman. "Of course he did. But no-one I was aware of in London."
      
    `,
    `      
      "No-one I was aware of in London."
    `,
  ])

  btn(
    `"Was there any reason to believe Captain Bennett's life was under threat?"`,
    () => {
      setVal("roseGarden", true)
      msg([
        `

      "Was there any reason to believe Captain Bennett's life was under threat?" I asked.
      
      "No, though he was acting strangely for the last couple of weeks," said Thurman. "Though,
      not in any big ways." He paused for a moment to think. "Little things. He was spending more
      and more time in the rose garden on the northeast side of the lawn. By himself. Always seemed
      jumpy when others were about. The captain was a private man and we never pried into his business."
      
    `,
        `
    
      "No, but he was spending more and more time in the rose garden on the northeast side of the lawn."
    
    `,
      ])
    }
  )

  btn(`"Thank you for your assistance, Mr. Thurman."`, go("manorHouseFoyer"))
}
