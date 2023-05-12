

Game.things.owlCage = {
    desc: `Locked in a heavy iron cage is a very sad-looking owl. He gives you a plaintive 'hoot' as you enter.`,
    location: 'owlCageRoom',
    'x': ['examine owl 🦉 cage', () => {
        msg(`You'd need a battering ram or a cannon to open that cage.`)
    }],
    'h': ['give me a hint will you', `That cannon in the other tower might be useful, but you'll need to open the shutter in here first.`],
    'v': ['converse with owl', `“I don't mind being locked up... Actually, that's a lie. I don't know why I lied to you just now...”`],
    'b': ['yell', `The owl 🦉 hoots belatedly along with you.`],
    'l': ['lick cage', `The cage tastes solid.`]
}

