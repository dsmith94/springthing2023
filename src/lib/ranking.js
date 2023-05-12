
function ranking() {

    const maxScore = 65

    const list = [
        'inept thief',
        'lost explorer',
        'semi-competent burglar',
        'skilled treasure-hunter',
        'master adventurer',
    ]

    const score = game.score

    const level = score / maxScore
    const index = (level > 1.0) ? 1.0 : level
    const i = Math.floor(index * list.length)

    const treasures = game.treasure ?? {}
    const qty = Object.keys(treasures).length

    return `So far, you've collected ${qty} treasures. You've scored ${score} out of ${maxScore}, earning you the rank of ${list[i]}.`

}

