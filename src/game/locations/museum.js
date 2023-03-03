/** @type {LocationType} */
Game.museum = () => {
    msg(`
    
    Bixby stared at me expectantly.
    
    `)
  
    inp(
      `Give Bixby a person or topic to research, like *Black Walrus*`,
      (result) => {
        const parse = (res) => result.indexOf(res) > -1
        if (parse("walr")) {
          msg(`
        
        "The Black Walrus Society," said Bixby, handing me a stack of papers. "Never has there been a 
        greater international brood of wickedness. Money laundering, assassinations, theft on a large and
        small scale—they are the first and last name in crime."
  
        "So they're an organization of brigands?"
  
        "Precisely. Roger Bennett ended his career by putting away their brightest constellation in
        lockup on St. Helena. Their insignia is a walrus drawn in ink."
        
        `)
          return
        }
  
        if (parse("capt") || parse("benn") || parse("roge")) {
          msg(`
        
        "Captain Roger Bennett," said Bixby, handing me some papers. "Deceased as of last night.
        Retired shortly after capturing one of the chief lieutenants of the
        Black Walrus Society."
  
        I perked up. "Is that so?"
  
        “Mmmm. A rather dangerous scoundrel named Charles Hob."
        
        `)
          return
        }
  
        if (parse("hob")) {
          msg(`
        
        Bixby returned with a formidable stack of records. "A mayor of wickedness even amongst the filthiest scoundrels.
        Charles Hob, executive member of the Black Walrus Society. Murder, theft, smuggling, in at least a dozen countries 
        and probably even more we don't know about. Has spent the last six years in St. Helena,
        locked up with 12 of his brethren. It was Captain Bennett who finally caught 'im.
        
        `)
          return
        }
  
        if (parse("astl")) {
          msg([
            `
        
        "Have you anything on an R.T. Astley?" I asked.
  
        Bixby dutifully searched and found nothing. "Are you sure that's a person of criminal note?"
  
        "It may not even be a person," I replied, "It was spelled ASTLEY RT at the crime scene."
  
        "Hmph!" Bixby was clearly pleased with himself. "And you call yourself a detective!"
  
        "Do you know the identity of Astley RT?"
  
        "Certainly!" Bixby was now fairly beaming. "And no, it is no person. It is the Astley Royal Theater! The live
        circus show at *11 Westminster*."
  
        "Bixby," I said, "I daresay you are correct!"
        
        `,
  
            `
        
        "It is the Astley Royal Theater! The live circus show at *11 Westminster*."
        
        `,
          ])
          return
        }
  
        if (parse("werst")) {
          msg(`
        
        "No record on her," said Bixby.
        
        `)
          return
        }
  
        if (parse("thurm")) {
          msg(`
        
        "No record on him," said Bixby.
        
        `)
          return
        }
  
        if (parse("bixb")) {
          msg(`
        
        "Ha!" chortled Bixby, "Wouldn't you like to know?"
        
        `)
          return
        }
  
        if (parse("goul")) {
          msg(`
        
        "I'm certain my *superior* should love for me to look him up in this place," said Bixby, "But I must decline."
        
        `)
          return
        }
  
        msg(`"Haven't got anything on that, I'm afraid," said Bixby.`)
      }
    )
  
    btn(`Leave the museum`, go("cabbie"))
  }