/** @type {CharacterType} */
Game.Stockford = {
    name: 'the sturdy little man',
    location: 'outsideShip',
    talkLabel: 'Hey, Yates',
    hasMet: false,
  

    desc: () => `
    
    Stockford sat
    studying me from a table in the corner. He clutched a tin
    cup that may have been full of coffee or rum; it was
    impossible to tell from a distance.
    
    `,

    notMet: () => `
    
    A sturdy little man with very black hair and a wide nose sat
    studying me from a table in the corner. He clutched a tin
    cup that may have been full of coffee or rum; it was
    impossible to tell from a distance.
    
    `,

    talk: () => {

        setName('Stockford')
        msg([`
        
        "Greetings, traveler," says the humongous brain. "My name is Mavis. I am the
        librarian of this facility."
        
        `, `
        
        "Welcome, traveler," says Mavis. "How can I guide your cerebral journeys today?" 
        
        `])
    },
}