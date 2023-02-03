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

  btn(`"Did Captain Bennett have any enemies?"`, [
    `
      "Did Captain Bennett have any enemies?" I asked.
      
      "He was in the Royal Navy," said Thurman. "So yes. But no-one I was aware of in London."
      
    `,
    `      
      "No-one I was aware of in London."
    `,
  ])

  btn(
    `"Was there any reason to believe Captain Bennett's life was under threat?"`,
    [
      `

      "Was there any reason to believe Captain Bennett's life was under threat?" I asked.
      
      "No, though he was acting strangely for the last couple of weeks," said Thurman. "Though,
      not in any big ways." He paused for a moment to think. "Little things. He was spending more
      and more time in the rose garden on the northeast side of the lawn. By himself. Always seemed
      jumpy to see me, if you understand my meaning."
      
    `,
      `
    
      "No, but he was spending more and more time in the rose garden on the northeast side of the lawn."
    
    `,
    ]
  )

  btn(`"Thank you for your assistance, Mr. Thurman."`, go("manorHouseFoyer"))
}
