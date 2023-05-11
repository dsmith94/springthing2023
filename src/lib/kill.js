

function taunt() {
    const list = [
        `Well, that was rich.`,
        `Don't worry, that wasn't the worst game I've ever seen. Maybe the second worst.`,
        `Thank you for playing. I've enjoyed watching you, for the most part.`,
        `Thank you for playing. Usually I don't recommend a walkthrough, but in your case...`,
        `Next time, try saying xyzzy, that always does something.`,
        `Somewhere, a famous white house with a mailbox out front is waiting for you.`,
        `Seeing this game would make Floyd die all over again.`,
        `Next time, try saving your game.`,
        `Not bad. Not good, but, well... Actually yeah that was pretty bad.`,
        `Are you new to adventure games? Wait, don't answer that.`,
    ]
    shuffle(list)
    return list[0]
}


function kill(text, epitaph, location) {

    game.commands = {};
    msg(text)
    msg(epitaph, 'epitaph')

    msg(taunt())
    msg(ranking())
    msg(`Would you like to try again?`)
    msg(`[Press Y to try again or N to quit.]`)

    cmd('help', [`help`, `Press Y to try again or N to quit.`])
    
    cmd('y', [`yes`, () => {

        msg(`Okay... I'll do my best... Here goes nothing...`)
        go(location)

    }])

    cmd('n', [`no`, () => {
        window.location.reload()
    }])
}

