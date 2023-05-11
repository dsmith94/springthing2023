
var game = {};

const resetGame = () => {
  game = null
  game = {...Game}
  setItems()
  intro()
  go('startRoom')
}

const cleanUpKey = (key) => {
  if (key === 'inv') {
    return 'period'
  } else {
    return key
  }
}

window.addEventListener("load", () => {
  resetGame()
  window.addEventListener('keydown', ev => {
    ev.preventDefault()
  })
  window.addEventListener('keyup', ev => {
    let key = ev.key.toLowerCase()
    if (key === ' ') {
      key = 'space'
    } else if (key === '#') {
      key = 'transcript'
    } else if (key === '?') {
      key = 'help'
    } else if (key === '$') {
      key = 'score'
    } else if (key === '.') {
      key = 'inv'
    } else if (key === 'arrowleft') {
      key = 'left'
    } else if (key === 'arrowright') {
      key = 'right'
    } else if (key === 'arrowup') {
      key = 'up'
    } else if (key === 'arrowdown') {
      key = 'down'
    }
    if (key) {
      if (game.commands[key]) {
        const [fullCommand, response] = game.commands[key]
        if (game.transcript) {
          msg(`${fullCommand} (${cleanUpKey(key)} key)`, 'res')
        } else {
          msg(`${fullCommand}`, 'res')
        }
        game.turns += 1
        if (typeof response === 'string') {
          msg(response)
        } else {
          response()
        }
        updateHeaderBar()
      } else if (key === 'transcript') {
        if (!game.transcript) {
          game.transcript = true
          msg(`Transcript mode on.`)
        } else {
          msg(`Transcript mode off.`)
          game.transcript = false
        }
      }
    }
  })
})
