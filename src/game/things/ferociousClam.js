
Game.things.ferociousClam = {
    location: 'clamRoom',
    desc: 'You are being attacked by a FEROCIOUS CLAM!',
    x: ['examine clam', `The clam is the most dangerous monster you've ever seen!`],
    l: ['lick clam', `It tastes yummy AND fierce!`],
    f: ['feel clam', `Feels like shell.`],
    b: ['yell at clam', `That accomplishes less than you'd expect.`],
    a: ['attack clam', () => kill(`The clam strikes back, and you are DEAD!`, `You have been chowdered by a clam`, 'clamRoom')],
    h: ['give me a hint will you', `This clam would be dead if there was a big enough chowder to put it in.`],
    s: ['smell clam', `It smells like terror!`],
}

