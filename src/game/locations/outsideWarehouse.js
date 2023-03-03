/** @type {LocationType} */
Game.outsideWarehouse = () => {
  msg(`

    The warehouse was a peculiarly sinister thorn in the twisted bramble of shadowy brick buildings.

    `)

  !getVal("enteredWarehouse") &&
    btn(`Enter the warehouse`, () => {
      setVal("enteredWarehouse", true)
      msg(`

	I entered the warehouse on Spaulding and was met by a wide thick brute of a man.
	"Ay! Your kind isn't welcome in here!"

	`)

      btn(
        `"A woman?"`,
        `

	"Don't matter!" he said, pointing at the door. "Out!"

	`
      )

      btn(
        `"An oriental?"`,
        `

	"Don't matter!" he said, pointing at the door. "Out!"


	`
      )

      btn(
        `"An educated citizen?"`,
        `

	"Don't matter!" he said, pointing at the door. "Out!"

	`
      )
    })

  getVal("enteredWarehouse") &&
    btn(
      `Enter the warehouse`,
      `

    "What did I tell you before?" shouted the brute as I entered. "Your kind isn't allowed in this place!"

    `
    )

  if (!getVal("stockfordDoomed")) {
    !getVal("boughtFlower") &&
      msg([
        `

    Standing in the fog-drenched gutter was a delicate little woman in a floral gypsy dress.
    "Flower for sale?" She held out a tiny yellow bloom.

    `,

        `"I'm certain a flower would brighten your day," said the woman, an insistent tone in her voice.`,
      ])

    !getVal("boughtFlower") &&
      btn(`Purchase a flower`, () => {
        setVal("boughtFlower", true)
        msg(`

    I pressed into her hand more pence than is morally sound to spend on a single flower. "Hello,
    Romica," I said.

    "Good day Madame Soo," said Romica in a fractured cockney. "Looking for a suspicious character, I gather?"

    `)

        btn(
          `"A certain recently deceased sea captain, as if you didn't know."`,
          () => {
            msg(`

	"A certain recently deceased sea captain, as if you didn't know," I said.

	"Of course, I don't really *know* anything," said Romica with a coy grin. "But a lowly flower girl from
	far away can go about unobserved, you might say. Almost invisible. But I have my eyes and ears."


	`)

            btn(
              `"What will your surveillance cost me today?"`,
              `

"What will your surveillance cost me today?" I asked.

She whispered something and I produced another absurd sum, which she snatched into her blouse.

"You that should visit a certain Mr Stockford, at Surrey Club."

"The Surrey Club?"

"Captain Bennett was a traitor more than once in his life. Investigating the affairs of the Black Walrus Society can be dangerous, if you get my meaning." She spoke in a lower tone, close to a whisper. "That's why I don't know anything."

	With that, Romica vanished into the fog.

	`
            )

            btn(
              `"A man is dead and I have no time for games."`,
              `

	"A man is dead and I have no time for games," I said with no small measure of indignation.

	"I would love to help," said Romica, "Desperate times these are. Even the news isn't cheap."

	I groaned and produced another absurd sum.

	"You that should visit a certain Mr Stockford, at Surrey Club."

	"The Surrey Club?"

	"Captain Bennett was a traitor more than once in his life. Investigating the affairs of the Black Walrus Society can be dangerous,
	if you get my meaning." She spoke in a lower tone, close to a whisper. "That's why I don't know anything."

	With that, Romica vanished into the fog.

	`
            )
          }
        )

        btn(`"Who do you take me for?"`, () => {
          msg(`

	"Who do you take me for?" I said. "I am of the respectable sort."

	"Of course," said Romica with a wink. "Me too. But a lowly flower girl from
	far away can go about unobserved, in almost any circle. All but invisible. But I have my eyes and ears."


	`)

          btn(
            `"And what will your surveillance cost me today?"`,
            `

	"And what will your surveillance cost me today?" I asked.

	She whispered something and I produced another absurd sum, which she snatched into her blouse.

	"You should visit a certain Mr Stockford, at Surrey Club."

	"The Surrey Club?"

	"Captain Bennett was a traitor more than once in his life. Investigating the affairs of the Black Walrus Society can be dangerous,
	if you get my meaning." She spoke in a lower tone, close to a whisper. "That's why I don't know anything."

	With that, Romica vanished into the fog.

	`
          )

          btn(`"A man is dead and I have no time for games."`,
            `

	"A man is dead and I have no time for games." I said with no small measure of indignation.

	"I would love to help," said Romica, "Desperate times these are. Even the news isn't cheap."

	I groaned and produced another absurd sum.

	"You should visit a certain Mr Stockford, at Surrey Club."

	"The Surrey Club?"

	"Captain Bennett was a traitor more than once in his life. Investigating the affairs of the Black Walrus Society can be dangerous,
	if you get my meaning." She spoke in a lower tone, close to a whisper. "That's why I don't know anything."

	With that, Romica vanished into the fog.

	`
          )
        })
      })

    btn(`Catch a cab`, go("cabbie"))
  }
}
