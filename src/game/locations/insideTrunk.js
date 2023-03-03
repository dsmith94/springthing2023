
/** @type {LocationType} */
Game.insideTrunk = () => {
    
    msg([`
    
    "Yellow wench," hissed a voice from outside the box. "In a bit over yer blouse, says I."
    
    `,
    
    `
    
    I was held in a tight wooden box in perfect darkness.
    
    `])
    
    once(`Open latch`, `
    
    I attempted the latch to no avail.
    
    `)
    
    once(`"Release me!"`, () => {
        msg(`
        
        "Release me!" I cried.
        
        "Not just yet," replied my unseen captor. "Perhaps if you can be more... Friendly."
        
        `)
        
        once(`"As I am locked in a box, I believe you have the advantage on me?"`, () => {
            
            msg(`
            
            "As I am locked in a box, I believe you have the advantage on me, do you not?" I said.
            
            "Fair," said the captor, "Though it be on your own head for meddling in the affairs of the Walrus."
            
            `)
            
            btn(`"The Walrus? What are you talking about?"`, () => {
                
                msg(`
                
                "The Walrus? What are you talking about?" I asked with no slight degree of incredulousness.
                
                "Oh, so clever," said my captor. "Begins to panic, says I."
                
                `)
                
            })
            
            btn(`"I only ever wanted to solve a murder."`, () => {
                
                msg(`
                
                "I only ever wanted to solve a murder." I said.
                
                "And look where that got you," came the response, with a audible sneer.
                
                `)
                
            })
            
        })
        
        once(`"How can one be friendly in the presence of a cold-blooded fiend?"`, () => {
            
            msg(`
            
            "How can one be friendly in the presence of a cold-blooded fiend?" I inquired. "After all,
            you are the malefactor who did in Roger Bennett."
            
            "I took no pleasure in offing the Captain," said the voice.
            
            "That's a lie."
            
            He chortled. "True enough. But it's no lie he deserved what he got. 
            Whatever you think about me, that man was worse. The traitorous wretch."
            
            `)
            
            btn(`"That still makes you a killer."`, () => {
                
                msg(`
                
                "That still makes you a killer," I said.
                
                "To be sure," said the voice. "But I harbour no guilt, no more than a man who uses
                arsenic to kill an intensely pernicious rat." 
                
                `)
                
            })
            
            btn(`"Perhaps. But the courts should decide."`, () => {
                
                msg(`
                
                "Perhaps. But the courts should decide, not your confederates and fellow brigands."
                
                The voice mumbled an oath and said: "Spare me your philosophical dreck."
                
                `)
                
            })
            
        })
        
        
    })
    
}