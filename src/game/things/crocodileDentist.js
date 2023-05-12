
Game.things.crocodileDentist = {
    location: 'crocodileDentistOffice',
    desc: `The crocodile 🐊 dentist is here, awaiting his next patient.`,
    x: ['examine the crocodile 🐊 dentist', `Is he a crocodile who happens to be a dentist, or is a dentist who services only crocodiles? The answer is <i>both</i>.`],
    l: ['lick crocodile 🐊 dentist (with my tongue)', `Mmm. Tastes a LOT like chicken.`],
    f: ['feel crocodile 🐊 dentist', `This isn't a petting zoo.`],
    b: ['yell at crocodile 🐊 dentist', () => {
        msg(`AAAAAAAAAAAA!`)
        msg(`“Your molars are in good shape,” says the crocodile 🐊 dentist, looking into your open maw.`)
    }],
    v: ['converse with crocodile 🐊 dentist', `You have a long and fruitful discussion with the crocodile dentist about preventing gingivitis.`],
    a: ['attack crocodile 🐊 dentist', () => kill(`The crocodile 🐊 dentist makes a hot lunch out of you! As you go down, it occurs to you that the crocodile has more gum disease than you'd expect for a dentist.`, `Never smile at a crocodile`, 'crocodileDentistOffice')],
    h: ['give me a hint will you', `There's no way to get past the crocodile 🐊 dentist.`],
    s: ['smell crocodile 🐊 dentist', `Mmmm, fresh novocaine.`],
}


