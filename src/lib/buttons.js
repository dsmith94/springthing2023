
const focusCorrectly = () => {
  const firstButton = document.getElementsByTagName("button")[0]
  const firstInput = document.getElementsByTagName("input")[0]
  setTimeout(() => {
    if (firstInput) {
      firstInput.focus()
    } else {
      if (firstButton) {
        firstButton.focus()
      }
    }  
  }, 100)
}

const once = (label, callback) => {
  const id = `d${stringToHash(label)}`

  if (!g$[id]) {
    btn(label, () => {
      g$[id] = true
      if (typeof callback === "function") {
        callback()
      } else {
        msg(callback)
      }
    })
  }
}


const stack = (btnArr) => {
  const [topLabel, topCallback] = btnArr.shift();
  const [finalLabel, finalCallback] = btnArr.pop();
  const id = `stack-function-${stringToHash(topLabel)}`
  c$[id] = () => {
    if (typeof topCallback === "function") {
      topCallback()
    } else {
      msg(topCallback)
    }
    btnArr.map(pair => {
      const [label, callback] = pair
      once(label, callback)
    })
    const ids = btnArr.map(pair => typeof g$[`d${stringToHash(pair[0])}`] !== 'undefined').filter(v => v !== true)
    if (ids.length === 0) {
      btn(finalLabel, () => {
        setState()
        if (typeof finalCallback === "function") {
          finalCallback()
        } else {
          msg(finalCallback)
        }
      })
    }
  }
  btn(topLabel, () => {
    setState(id)
    c$[id]()
  })
}


// clear screen function - will be called after button is pressed
const clearScreen = () => {
  const e = document.getElementsByClassName("main")[0]
  e.remove()
  g$.buttonCount = 0
}

const createPage = () => {
  let topRoot = document.getElementsByClassName("topRoot")[0]
  const main = document.createElement("div")
  const page = document.createElement("div")
  const btns = document.createElement("btns")
  if (!topRoot) {
    topRoot = document.createElement("div")
    topRoot.className = "topRoot"
    document.body.appendChild(topRoot)
  }
  topRoot.appendChild(main)
  main.className = "main"
  main.id = "main"
  page.className = "page"
  page.id = "page"
  btns.className = "btns"
  btns.id = "btns"

  // add elements to active DOM
  topRoot.appendChild(main)
  main.appendChild(page)
  main.appendChild(btns)
}

const handleEnv = () => {
  if (g$.env) {
    if (g$.isTalking || !g$.buttonCount) {
      msg(g$.env())
    }
  }
}

const btn = (label, callback, unshift) => {
  // prepare to create button
  const e = document.getElementById("btns")

  // if we're good to go, begin button creation
  if (e && label && callback) {
    // button count may not exist, create it if it's not there
    if (!g$.buttonCount) {
      g$.buttonCount = 0
    }

    // Add to screen button count and clean label
    g$.buttonCount += 1
    label = label.trim()

    // create html button element and add click event callback
    const b = document.createElement("button")
    b.type = "button"
    b.onclick = () => {
      // we'll need to hang onto the current html contents, then clear screen
      const buffer = document.getElementsByClassName("main")[0].innerHTML
      clearScreen()

      // do some character cleanup
      if (g$.isTalking) {
        const state = c$?.state ?? "talk"
        const count = c$[state][`btn-${label}`] ?? 0
        g$.lastButtonPressed = label
        c$[state][`btn-${label}`] = count + 1
      }

      // add outgoing page animation
      const outPage = document.createElement("div")
      outPage.className = "outPage"
      outPage.id = "outPage"
      outPage.innerHTML = buffer
      const topRoot = document.getElementsByClassName("topRoot")[0]
      if (topRoot) {
        topRoot.appendChild(outPage)
      }

      // halfway through animation, clear the outgoing page and begin the
      // new page transition in
      setTimeout(() => {
        // remove outgoing page
        document.getElementById("outPage").remove()
        window.scrollTo(0, 0)
        createPage()
        typeof callback === "function" ? callback() : msg(callback)

        handleEnv()

        // if there are no buttons, and we have a valid last node to fall back on,
        // show the standard advance button
        if (!g$.buttonCount && g$.lastNode) {
          btn("➜", () => {
            if (g$.lastNode) {
              g$.lastNode()
            }
          })
        }
        focusCorrectly()
      }, 650)
    }

    b.className = "button"
    b.innerHTML = `<div class='buttonText'>${skylight(label, true)}</div>`
    if (!unshift) {
      e.appendChild(b)
    } else {
      e.prepend(b)
    }
  } else {
    throw `Button could not be constructed! With options: ${label}`
  }
}
