function header(roomHeader) {
    game.header = roomHeader
}

function addScore(s) {
    if (s > 1) {
        msg(`[Your score has gone up ${s} points.]`)
    } else {
        msg(`[Your score has gone up ${s} point.]`)
    }
    game.score += s 
}

function updateHeaderBar() {
    const hdr = document.getElementById('header')
    if (hdr) {
        const d1 = document.createElement('div')
        const d3 = document.createElement('div')
        hdr.innerHTML = ''
        d1.append(game.header)
        d1.className = 'exits'
        d3.className = 'exits'
        d3.append(`Score ${game.score}`)
        hdr.appendChild(d1)
        if (game.headerExits) {
            const d2 = document.createElement('div')
            d2.className = 'exits'
            d2.append(`Exits ${game.headerExits}`)
            hdr.appendChild(d2)
        }
        hdr.appendChild(d3)
    }
}
