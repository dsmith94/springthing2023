/** @type {LocationType} */
Game.insideCircus = () => {

    msg([`
    
        The man behind the door lead me into a musty hallway. He struck me as an aging circus strongman, still muscular but 
        growing gray near his temples. "Aldi keeps to himself, mostly, in his room."
        
        The hallway headed back and around the main auditorium, through an unlit passage and into a small chamber with
        peeling yellow paint and strong with the stench of rats.

        "Here," said my strongman companion. "You can wait here. Aldi will be along shortly."

        He vanished into the gloom of the passage.
    
    `,
    `
    
        Aldi's tiny flat was really just a small, unpleasant room. The windows were boarded over and peeling yellow paint
        barely stuck to the walls. On the far wall was a long trunk, the approximate size and shape of a coffin.
    
    `])

    btn(`Investigate trunk`, () => {

        msg(`
        
        A worn piece of luggage, which on close inspection revealed a latch so as to be openable from the inside.
        It appeared as though something was inside...
    
        `)
    
        btn(`Look closer`, () => {
    
            msg(`
            
                A harsh blow struck the base of my cranium and I fell into the trunk. I came to seconds later in darkness.
            
            `)

            btn(`Ughh...`, go('insideTrunk'))
        })

    })

}
