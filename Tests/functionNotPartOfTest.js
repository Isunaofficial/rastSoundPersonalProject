var productFind1 = function(rast){
    rast
        .waitForElementVisible('@cookieAccept', abortOnFailure = false, function(result){
            if (result.value === true){
    rast
            .click('@cookieAccept')
            .waitForElementVisible('@mouseOverProductsNavBar', 10000)
            .moveToElement('@mouseOverProductsNavBar', 1, 1)
            .click('@mouseOverProductsNavBar')
            .waitForElementVisible('@librariesFromDropDown', 7000)
            .click('@librariesFromDropDown')
            .waitForElementVisible('@soloLibHeader', 7000)
            .assert.visible('@soloLibHeader')
            .expect.element('@soloLibHeader').text.to.contain('SOLO LIBRARIES')
            }
            else {
    rast
            .waitForElementVisible('@mouseOverProductsNavBar', 10000)
            .moveToElement('@mouseOverProductsNavBar', 1, 1)
            .click('@mouseOverProductsNavBar')
            .waitForElementVisible('@librariesFromDropDown', 7000)
            .click('@librariesFromDropDown')
            .waitForElementVisible('@soloLibHeader', 7000)
            .assert.visible('@soloLibHeader')
            .expect.element('@soloLibHeader').text.to.contain('SOLO LIBRARIES')
            }
        })
    return this 
    }