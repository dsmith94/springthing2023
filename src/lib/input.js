

const inp = (label, callback) => {
  // prepare to create button
  const e = document.getElementById("btns")
  
  // if we're good to go, begin text field creation
  if (e && label && callback) {
    // button count may not exist, create it if it's not there
    if (!g$.buttonCount) {
      g$.buttonCount = 0
    }
    
    // Add to screen button count and clean label
    g$.buttonCount += 1
    label = label.trim()
    
    // create html button element and add click event callback
    const form = document.createElement("form")
    const input = document.createElement("input")
    const submit = document.createElement("input")
    const div = document.createElement("div")
    form.className = "inputForm"
    form.action = "javascript:void(0)"
    form.onsubmit = event => {
      event.preventDefault()
      execute()
    }
    div.className = "inputLabel"
    div.innerHTML = skylight(label)
    input.type = "text"
    input.action = "javascript:void(0)"
    input.enterkeyhint = "go"
    input.className = "inputString"
    submit.action = "javascript:void(0)"
    submit.type = "submit"
    submit.className = "submit"
    submit.hidden = true
    submit.onclick = (event) => {
      event.preventDefault()
      execute()
    }
    
    const execute = () => {
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
        const v = input.value.toLowerCase().replace(/\s/g, "")
        callback(v)
        
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
      }, 450)
    }
    
    form.appendChild(div)
    form.appendChild(input)
    form.appendChild(submit)
    e.appendChild(form)
  }
  
}
