

Game.rooms.endGame = () => {
    
    header(`You've Won!`)
    
    desc(`You are on a tropical island on a beautiful sunny day. It smells vaguely of fresh baked cookies.
    Presently, you sit on top of a throne, which in turn is atop of a giant pile of gold, big enough to swim in like a cartoon duck.
    Stealing that treasure from the castle and investing prudently has returned generous dividends.
    A tome of timeless wisdom lies here, begging to be read.`)
    
    cmd('s', ['sniff air', `I told you, it smells like cookies.`])
    cmd('l', ['lick massive pile of gold', `Gold isn't known for being delicious.`])
    cmd('f', ['feel pile of gold', `You run your fingers through the gold and laugh maniacally.`])
    cmd('r', ['read tome of wisdom', () => {
        msg(`Congratulations! You've completed Steal 10 Treasures to Win This Game!`)
        msg(ranking())
        msg(`You did this in only ${game.turns} moves.`)
        msg(`If you would like to play again, press the ~y key.`, 'sub')
    }])
    
    cmd('help', ['help', `If you would like to play again, press the ~y key.`])
    cmd('y', [`restart`, () => {
        clear()
        window.location.reload()
    }])
    
}

