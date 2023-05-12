
Game.things.doorbell = {
    location: 'frontDoor',
    desc: `Next to the door is a cheery little doorbell 🔔.`,
    x: ['examine cheery doorbell 🔔', `It has a gentle yellow glow.`],
    'i up': ['enter castle', `You should open the door somehow first.`],
    h: ['give me a hint will you', `Don't eat the ice cream.`],
    p: ['I want to ring the doorbell 🔔', () => {

        msg(`A merry chime rings from inside the castle.`)
        msg(`Moments later, a staticky speaker comes to life inside the 
        gargoyle above your head:`)
        msg(`“Greetings adventurer! No doubt you've come to plunder this
        dangerous castle for treasure. To make you feel welcome, enjoy
        this very safe (and not poisoned) ice cream cone.”`)
        msg(`A small hatch opens near the door, and a stone hand
        emerges holding a delicious ice cream cone.`)
        msg(`Press ~l to lick, ~s to sniff, or ~p to push the ice cream cone away.`, 'sub')
        game.commands = {}

        cmd('help', ['help', `Press ~l to lick, ~s to sniff, or ~s to push the ice cream cone away.`])
        cmd('l', ['enjoy delicious ice cream', () => {
            kill(`You take a hearty lick off the cone. It is the best
            ice cream you've ever had! You continue to explore the castle.
            Two months later, you collapse as the slow-acting poison in the ice cream
            melts your liver into a puddle of caustic hydrocarbons.`, 'You have been creamed', 'startRoom')
        }])

        cmd('s', [`smell the ice cream`, `Mmmm. Vanilla and... What is that? Amanita phalloides?`])

        cmd('p', [`refuse the ice cream cone`, () => {

            msg(`“Hey!” crackles the gargoyle speaker. “Why would anyone refuse 
            free ice cream? It's irresistible!”`)

            msg(`The speaker emits a loud, disgusting slurp. “Delicious!
            Hey, let me get that door for you.”`)

            msg(`Seconds later the door swings open.`)
            addScore(3)
            
            game.things.doorbell.location = ''
            game.things.frontDoorOpen.location = 'frontDoor'
            refresh()

        }])

    }],
}
