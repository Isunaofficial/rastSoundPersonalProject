var rast = {}

module.exports = {
    beforeEach: browser => {
        rast = browser.page.pageObjects()
        .maximizeWindow()
        rast.navigate()
    },
    after: browser => {
        browser.end()
    },
"Can User View Current Sales?": browser => {
rast
    .waitForElementVisible('@homeBtn', 7000)
    .assert.visible('@currentDeal')
    .click('@cookieAccept')
    .click('@currentDeal')
    .waitForElementVisible('@trendingDealsHeader')
    .assert.visible('@trendingDealsHeader')
    },
"Can User With Existing Account Login?": browser => {
rast
    .loginSeq()
    },
"Can Logged-In User Log Out": browser => {
rast
    .moveToElement('@mouseOverAccountNavBar', 1, 1)
    .click('@mouseOverAccountNavBar')
    .waitForElementVisible('@logoutFromDropDown')
    .click('@logoutFromDropDown')
    .api.pause(5000)
    },
"Not a test, just logging back in for the rest of the suite": browser => {
rast
    .loginSeq()
    },
"Can User View and Access Sales Easily": browser => {
rast
    .click('@homeBtn')
    .waitForElementVisible('@currentDeal', 7000)
    .assert.visible('@currentDeal')
    .click('@currentDeal')
    .waitForElementVisible('@homeBtn', 7000)
    .moveToElement('@trendingDealsHeader', 10, 10)
    .assert.visible('@trendingDealsHeader')
    },
"Can User Type An Account Description": browser => {
rast
    .moveToElement('@mouseOverAccountNavBar', 1, 1)
    .waitForElementVisible('@mouseOverAccountNavBar')
    .click('@mouseOverAccountNavBar')
    .waitForElementVisible('@yourAccount')
    .click('@yourAccount')
    .api.pause(10000)
rast
    .moveToElement('@accountDescInput', 10, 10)
    .waitForElementVisible('@accountDescInput')
    .setValue('@accountDescInput', 'Field Recordist, Sound Designer, Composer')
    .click('@accountSaveChanges')
    .waitForElementVisible('@homeBtn', 10000)
},
//     this test is commented out because I don't want to sign up a million times
// "Can New User Sign Up For Newsletter": browser => {
// rast
//     .moveToElement('@newsletterSignupBtn', 1, 1)
//     .waitForElementVisible('@newsletterSignupBtn')
//     .assert.visible('@newsletterSignupBtn')
//     .click('@newsletterSignupBtn')
//     .waitForElementVisible('@newsletterNameInput')
//     .setValue('@newsletterNameInput', 'Bryan Hirst')
//     .setValue('@newsletterEmailInput', 'isunagang@outlook.com')
//     .click('@newsletterCheckbox')
//     .click('@newsletterSubmitBtn')
//     .expect.element('@newsletterSuccessMessage').text.to.contain('The form was sent successfully.')
// rast
//     },
"Can User Find Correct Product From Solo Libraries Page 1: Vos Contemporary": browser => {
vos.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 2: Blend": browser => {
blend.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 3: Atlas": browser => {
atlas.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },          
"Can User Find Correct Product From Solo Libraries Page 4: Mott and White": browser => {
mottAndWhite.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 5: Asian Colours": browser => {
asianColours.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 6: Sounds of Mars": browser => {
soundsOfMars.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 7: Whistle": browser => {
whistle.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 8: Designer Drums": browser => {
designerDrums.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },  
"Can User Find Correct Product From Solo Libraries Page 9: India Vocals": browser => {
indiaVocals.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },   
"Can User Find Correct Product From Solo Libraries Page 10: Sounds Of Cambodia": browser => {
soundsOfCambodia.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },  
"Can User Find Correct Product From Solo Libraries Page 11: Deep Element": browser => {
deepElement.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 12: Mideast Vocals II": browser => {
mideastVocals2.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 13: Dystopian Element": browser => {
dystopianElement.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },  
"Can User Find Correct Product From Solo Libraries Page 14: Sound Of Morocco": browser => {
soundsOfMorocco.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },  
"Can User Find Correct Product From Solo Libraries Page 15: Inca Spirit Vocals": browser => {
incaSpiritVocals.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    }, 
"Can User Find Correct Product From Solo Libraries Page 16: Persian Vocals": browser => {
persianVocals.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    }, 
"Can User Find Correct Product From Solo Libraries Page 17: Artsy Beats": browser => {
artsyBeats.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    }, 
"Can User Find Correct Product From Solo Libraries Page 18: Kemenche": browser => {
kemenche.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 19: Balkan Vocals": browser => {
balkanVocals.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 20: Cinescapes": browser => {
cinescapes.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 21: Hang Melo II": browser => {
hangMelo2.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 22: Ceremonial Vocals": browser => {
ceremonialVocals.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 23: Ethnogroove": browser => {
ethnoGroove.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 24: MidEast Vocals": browser => {
mideastVocals.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 25: Bit Field": browser => {
bitField.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 26: Ethnocinematic II": browser => {
ethnoCin.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 27: Ethnoscapes II": browser => {
ethnoScapesDrones.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 28: Anatolian Percussion V2": browser => {
anatolianPercussion.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 29: Sufi Ney": browser => {
sufiNey.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User Find Correct Product From Solo Libraries Page 30: Kabak Kemane": browser => {
kabak.forEach(data => {
rast
    .productFind1()
    .productSwitch(data)
})
    },
"Can User See Relevant Reviews On Home Page": browser => {
rast
    .click('@homeBtn')
    .waitForElementVisible('@currentDeal', 7000)
    .moveToElement('@review1', 1, 1)
    .expect.element('@review1').text.to.contain('Your collections have something magical that is not common.')
rast
    .expect.element('@review2').text.to.contain('I am really enjoying your sounds, used your vocal collection a ton on my "Bilal" score.')
rast
    .expect.element('@review3').text.to.contain('Inspiring collections...')
rast
    },    
"Can A New User Be Created? (Only Run This Once Please)": browser => {
rast
    .moveToElement('@homeBtn', 1, 1)
    .waitForElementVisible('@homeBtn')
    .moveToElement('@mouseOverAccountNavBar', 1, 1)
    .click('@mouseOverAccountNavBar')
    .waitForElementVisible('@joinNowDropDown')
    .click('@joinNowDropDown')
    .waitForElementVisible('@joinUser', 10000)
        .waitForElementVisible('@cookieAccept')
        .click('@cookieAccept')
    .assert.visible('@joinUser')
    .assert.visible('@joinEmail')
    .assert.visible('@joinPass')
    .assert.visible('@joinPassConfirm')
    .setValue('@joinUser', 'Young B')
    .setValue('@joinEmail', 'crazylegoman326@hotmail.com')
    .click('@createPage')
    browser.keys.ARROW_DOWN
    browser.keys.ARROW_DOWN
    browser.keys.ARROW_DOWN
    browser.keys.ARROW_DOWN
    browser.keys.ARROW_DOWN
    browser.keys.ARROW_DOWN
rast
    .setValue('@joinPass', 'justATest2')
    .setValue('@joinPassConfirm', 'justATest2')
    },     
"Can User Add An Item To Their Cart": browser => {
rast
    .moveToElement('@mouseOverProductsNavBar', 1, 1)
    .productFind1()
    .moveToElement('@addAtlasToCart', 10, 10)
    .click('@addAtlasToCart')
    .api.pause(8000)
rast
    .click('@cartWithItems')
    .waitForElementVisible('@checkoutHeader', 15000)
    .assert.visible('@checkoutHeader')
    .click('@removeFromCart')
    .waitForElementVisible('@emptyCartHeader', 10000)
    .expect.element('@emptyCartHeader').text.to.contain('Your cart is empty.')
    },                       
}