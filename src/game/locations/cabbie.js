
/** @type {LocationType} */
Game.cabbie = () => {

    msg(`

    ${pick([
        `The cabbie waited for me to take a seat. "Where to, miss?"`,
        `I sat in the hansom and the cabbie turned to me.`,
        `"Where ar' we headed today?" The cabbie impatiently waited for me to get in.`,
    ])}

    `)
    
    inp(`Enter a place name or address, like *11 West India Dock Road*.`, result => {

        const parse = (res) => result.indexOf(res) > -1

        const resp = () => pick([
            `"Of course, ma'am."`,
            `"Righty."`,
            `"Very good, miss."`,
            `"Right-o, miss."`,
        ])

        if (parse('dock') || parse('limeh') || parse('chinat')) {
            msg(`I don't need to go home yet.`)
            return
        }

        if (parse('spaul') || parse('wareh')) {
            msg(resp())
            btn(`One ride later...`, go('outsideWarehouse'))
            return
        }


        if (parse('surr')) {
            msg(resp())
            btn(`One ride later...`, go('surrey'))
            return
        }

        if (parse('astl') || parse('circus')) {
            msg(resp())
            btn(`One ride later...`, go('circus'))
            return
        }

        if (parse('scotlandy')) {
            msg(`
            
            ${resp()}
            
            `)
            btn(`One ride later...`, go('scotlandYard'))
            return
        }

        if (parse('manor')) {
            msg(`
            
            I was about to go back to the scene of the crime when I recalled 
            Chief Inspector Gould's words about not returning while the
            official investigation was in process.
            
            `)
            return
        }

        msg(`

        ${pick([
            `"'Fraid I don't know how to get there," said the cabbie.`,
            `"Never heard of that place. Is it in London?"`,
            `"I don't understand where you want me to take you," said the cabbie.`,
        ])}
    
        `)
    })

}

