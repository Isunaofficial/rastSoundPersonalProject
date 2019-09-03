var productCustomCommand = {
    productSwitch: function (data) {
        this
            .moveToElement(data.product, 10, 10)
            .click(data.product)
            .waitForElementVisible(data.header)
            .assert.visible(data.header)
            .expect.element(data.header).text.to.contain(data.productName)
        return this
    },
    productFind1: function () {
        this
            .waitForElementVisible('@mouseOverProductsNavBar', 10000)
            .moveToElement('@mouseOverProductsNavBar', 1, 1)
            .click('@mouseOverProductsNavBar')
            .waitForElementVisible('@librariesFromDropDown', 7000)
            .click('@librariesFromDropDown')
            .waitForElementVisible('@soloLibHeader', 7000)
            .assert.visible('@soloLibHeader')
            .expect.element('@soloLibHeader').text.to.contain('SOLO LIBRARIES')
        return this
    },
    loginSeq: function () {
        this
            .click('@homeBtn')
            .waitForElementVisible('@mouseOverAccountNavBar', 10000)
            .moveToElement('@mouseOverAccountNavBar', 1, 1)
            .click('@mouseOverAccountNavBar')
            .waitForElementVisible('@loginFromDropDown')
            .click('@loginFromDropDown')
            .api.pause(5000)
        this
            .waitForElementVisible('@loginEmailInput', 7000)
            .clearValue('@loginEmailInput')
            .clearValue('@loginPassInput')
            .setValue('@loginEmailInput', 'coastal6music@gmail.com')
            .setValue('@loginPassInput', 'DarthVader623712')
            .click('@finalLoginSubmit')
            .api.pause(5000)
        this
            .assert.visible('@accountFeedbackHeader')
        return this
    }
}

module.exports = {
    url: ('https://rastsound.com/'),
    commands: [productCustomCommand],
    elements: {
        cookieAccept: {
            selector: ('//a[@id="cookie_action_close_header"]'),
            locateStrategy: 'xpath'
        },
        homeBtn: {
            selector: '//img[@title="NEW-LOGO-GOLD"]',
            locateStrategy: 'xpath'
        },
        currentDeal: {
            selector: ('(//a[@href="https://rastsound.com/deals/"])[3]'),
            locateStrategy: 'xpath'
        },
        offersNavBar: {
            selector: ('(//a[@href="https://www.rastsound.com/deals/"])[1]'),
            locateStrategy: 'xpath'
        },
        clickProductsNavBar: {
            selector: ('(//a[@href="https://rastsound.com/collections/"])[1]'),
            locateStrategy: 'xpath'
        },
        mouseOverProductsNavBar: {
            selector: ('(//span[@class="sub-arrow"])[1]'),
            locateStrategy: 'xpath'
        },
        clickCommunityNavBar: {
            selector: ('(//a[@href="https://rastsound.com/artists-reviews/"])[1]'),
            locateStrategy: 'xpath'
        },
        mouseOverCommunityNavBar: {
            selector: ('(//span[@class="sub-arrow"])[2]'),
            locateStrategy: 'xpath'
        },
        clickAccountNavBar: {
            selector: ('(//a[@href="https://www.rastsound.com/your-account/"])[1]'),
            locateStrategy: 'xpath'
        },
        mouseOverAccountNavBar: {
            selector: ('(//span[@class="sub-arrow"])[3]'),
            locateStrategy: 'xpath'
        },
        emptyCart: {
            selector: ('(//a[@title="Start shopping"])[1]'),
            locateStrategy: 'xpath'
        },
        cartWithItems: {
            selector: ('(//a[@title="View your shopping cart"])[1]'),
            locateStrategy: 'xpath'
        },
        checkoutHeader: {
            selector: ('//h2[@class="elementor-heading-title elementor-size-default"]'),
            locateStrategy: 'xpath'
        },
        checkoutFromTile: {
            selector: ('(//a[@href="https://rastsound.com/checkout/"])[5]'), 
            locateStrategy: 'xpath'
        },
        trendingDealsHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[3]'),
            locateStrategy: 'xpath'
        },
        removeFromCart: {
            selector: ('//a[@class="edd_cart_remove_item_btn"]'),
            locateStrategy: 'xpath'
        },
        emptyCartHeader: {
            selector: ('//span[@class="edd_empty_cart"]'), 
            locateStrategy: 'xpath'
        },
        loginFromDropDown: {
            selector: ('(//a[@href="https://www.rastsound.com/login/"])[1]'),
            locateStrategy: 'xpath'
        },
        loginFromClick: {
            selector: ('/html/body/div[2]/p[2]/span/span/a'),
            locateStrategy: 'xpath'
        },
        loginEmailInput: {
            selector: ('//*[@id="user"]'),
            locateStrategy: 'xpath'
        },
        loginPassInput: {
            selector: ('//*[@id="password"]'),
            locateStrategy: 'xpath'
        },
        finalLoginSubmit: {
            selector: ('//button[@type="submit"]'),
            locateStrategy: 'xpath'
        },
        accountFeedbackHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[2]'),
            locateStrategy: 'xpath'
        },
        accountDescInput: {
            selector: ('//textarea[@name="edd_description"]'), 
            locateStrategy: 'xpath'
        },
        accountSaveChanges: {
            selector: ('//input[@name="edd_profile_editor_submit"]'), 
            locateStrategy: 'xpath'
        },
        logoutFromDropDown: {
            selector: ('(//a[@class="elementor-sub-item elementor-item-anchor"])[1]'),
            locateStrategy: 'xpath'
        },
        yourAccount: {
            selector: ('(//a[@href="https://rastsound.com/your-account/"])[1]'), 
            locateStrategy: 'xpath'
        },
        newsletterSignupBtn: {
            selector: ('//a[@href="https://rastsound.com/newsletter"]'),
            locateStrategy: 'xpath'
        },
        newsletterNameInput: {
            selector: ('//input[@name="form_fields[name]"]'),
            locateStrategy: 'xpath'
        },
        newsletterEmailInput: {
            selector: ('//input[@name="form_fields[email]"]'),
            locateStrategy: 'xpath'
        },
        newsletterSubmitBtn: {
            selector: ('//button[@type="submit"]'),
            locateStrategy: 'xpath'
        },
        newsletterCheckbox: {
            selector: ('//input[@type="checkbox"]'),
            locateStrategy: 'xpath'
        },
        newsletterSuccessMessage: {
            selector: ('//div[@class="elementor-message elementor-message-success"]'),
            locateStrategy: 'xpath'
        },
        librariesFromDropDown: {
            selector: ('(//a[@href="https://rastsound.com/products/all/"])[1]'),
            locateStrategy: 'xpath'
        },
        soloLibHeader: {
            selector: ('//h2[@class="elementor-heading-title elementor-size-default"]'),
            locateStrategy: 'xpath'
        },
        review1: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[13]'),
            locateStrategy: 'xpath'
        },
        review2: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[16]'),
            locateStrategy: 'xpath'
        },
        review3: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[19]'),
            locateStrategy: 'xpath'
        },
        // PRODUCTS
        vosContemp: {
            selector: ('(//h3[@class="edd_download_title"])[1]'),
            locateStrategy: 'xpath'
        },
        vosContempHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        blend: {
            selector: ('(//h3[@class="edd_download_title"])[2]'),
            locateStrategy: 'xpath'
        },
        blendHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        atlas: {
            selector: ('(//h3[@class="edd_download_title"])[3]'),
            locateStrategy: 'xpath'
        },
        atlasHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        mottAndWhite: {
            selector: ('(//h3[@class="edd_download_title"])[4]'),
            locateStrategy: 'xpath'
        },
        mwHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        asianColours: {
            selector: ('(//h3[@class="edd_download_title"])[5]'),
            locateStrategy: 'xpath'
        },
        asianColourHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        soundsOfMars: {
            selector: ('(//a[@href="https://rastsound.com/downloads/sounds-of-mars/"])[2]'),
            locateStrategy: 'xpath'
        },
        marsHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[3]'),
            locateStrategy: 'xpath'
        },
        whistle: {
            selector: ('(//a[@href="https://rastsound.com/downloads/whistle/"])[2]'),
            locateStrategy: 'xpath'
        },
        whistleHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        designerDrums: {
            selector: ('(//a[@href="https://rastsound.com/downloads/designer-drums/"])[2]'),
            locateStrategy: 'xpath'
        },
        ddHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        indiaVocals: {
            selector: ('(//a[@href="https://rastsound.com/downloads/india-vocals/"])[2]'),
            locateStrategy: 'xpath'
        },
        indiaHeader: {
            selector: ('(//div[@class="elementor-text-editor elementor-clearfix"])[1]'),
            locateStrategy: 'xpath'
        },
        soundsOfCambodia: {
            selector: ('(//a[@href="https://rastsound.com/downloads/sounds-of-cambodia/"])[2]'),
            locateStrategy: 'xpath'
        },
        cambodiaHeader: {
            selector: ('//h1[@class="elementor-heading-title elementor-size-large"]'),
            locateStrategy: 'xpath'
        },
        deepElement: {
            selector: ('(//a[@href="https://rastsound.com/downloads/deep-element/"])[2]'),
            locateStrategy: 'xpath'
        },
        deepHeader: {
            selector: ('//h1[@class="download-title"]'),
            locateStrategy: 'xpath'
        },
        mideastVocals2: {
            selector: ('(//a[@href="https://rastsound.com/downloads/mideast-vocals-ii/"])[2]'),
            locateStrategy: 'xpath'
        },
        mideastVocals2Header: {
            selector: ('(//div[@class="elementor-text-editor elementor-clearfix"])[1]'),
            locateStrategy: 'xpath'
        },
        dystopianElement: {
            selector: ('(//a[@href="https://rastsound.com/downloads/dystopian-element/"])[2]'),
            locateStrategy: 'xpath'
        },
        dystopianHeader: {
            selector: ('(//div[@class="elementor-text-editor elementor-clearfix"])[1]'),
            locateStrategy: 'xpath'
        },
        soundsOfMorocco: {
            selector: ('(//a[@href="https://rastsound.com/downloads/sounds-of-morocco/"])[2]'),
            locateStrategy: 'xpath'
        },
        moroccoHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        incaSpiritVocals: {
            selector: ('(//a[@href="https://rastsound.com/downloads/inca-spirit-vocals/"])[2]'),
            locateStrategy: 'xpath'
        },
        incaHeader: {
            selector: ('(//div[@class="elementor-text-editor elementor-clearfix"])[2]'),
            locateStrategy: 'xpath'
        },
        persianVocals: {
            selector: ('(//a[@href="https://rastsound.com/downloads/persian-vocals/"])[2]'),
            locateStrategy: 'xpath'
        },
        persianHeader: {
            selector: ('(//div[@class="elementor-text-editor elementor-clearfix"])[2]'),
            locateStrategy: 'xpath'
        },
        artsyBeats: {
            selector: ('(//a[@href="https://rastsound.com/downloads/artsy-beats/"])[2]'),
            locateStrategy: 'xpath'
        },
        artsyHeader: {
            selector: ('//h1[@class="download-title"]'),
            locateStrategy: 'xpath'
        },
        kemenche: {
            selector: ('(//a[@href="https://rastsound.com/downloads/kemenche/"])[2]'),
            locateStrategy: 'xpath'
        },
        kemencheHeader: {
            selector: ('//h1[@class="download-title"]'),
            locateStrategy: 'xpath'
        },
        balkanVocals: {
            selector: ('(//a[@href="https://rastsound.com/downloads/balkan-vocals/"])[2]'),
            locateStrategy: 'xpath'
        },
        balkanHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        cinescapes: {
            selector: ('(//a[@href="https://rastsound.com/downloads/cinescapes/"])[2]'),
            locateStrategy: 'xpath'
        },
        cineHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[2]'),
            locateStrategy: 'xpath'
        },
        hangMelo2: {
            selector: ('(//a[@href="https://rastsound.com/downloads/hang-melo/"])[2]'),
            locateStrategy: 'xpath'
        },
        hm2Header: {
            selector: ('//h1[@class="download-title"]'),
            locateStrategy: 'xpath'
        },
        ceremonialVocals: {
            selector: ('(//a[@href="https://rastsound.com/downloads/ceremonial-vocals/"])[2]'),
            locateStrategy: 'xpath'
        },
        cerHeader: {
            selector: ('//h1[@class="download-title"]'),
            locateStrategy: 'xpath'
        },
        ethnoGroove: {
            selector: ('(//a[@href="https://rastsound.com/downloads/ethnogroove/"])[2]'),
            locateStrategy: 'xpath'
        },
        ethnoHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        mideastVocals: {
            selector: ('(//a[@href="https://rastsound.com/downloads/mideast-vocals/"])[2]'),
            locateStrategy: 'xpath'
        },
        mideastHeader: {
            selector: ('//div[@class="elementor-text-editor elementor-clearfix"]'),
            locateStrategy: 'xpath'
        },
        bitField: {
            selector: ('(//a[@href="https://rastsound.com/downloads/bit-field/"])[2]'),
            locateStrategy: 'xpath'
        },
        bitHeader: {
            selector: ('//h1[@class="download-title"]'),
            locateStrategy: 'xpath'
        },
        ethnoCin: {
            selector: ('(//a[@href="https://rastsound.com/downloads/ethnocinematic-vibe/"])[2]'),
            locateStrategy: 'xpath'
        },
        ethnoCinHeader: {
            selector: ('(//div[@class="elementor-widget-container"])[5]'),
            locateStrategy: 'xpath'
        },
        ethnoScapesDrones: {
            selector: ('(//a[@href="https://rastsound.com/downloads/ethnoscapes-drones/"])[2]'),
            locateStrategy: 'xpath'
        },
        esdHeader: {
            selector: ('(//h2[@class="elementor-heading-title elementor-size-default"])[1]'),
            locateStrategy: 'xpath'
        },
        anatolianPercussion: {
            selector: ('(//a[@href="https://rastsound.com/downloads/anatolian-percussion/"])[2]'),
            locateStrategy: 'xpath'
        },
        anaHeader: {
            selector: ('(//div[@class="elementor-text-editor elementor-clearfix"])[1]'),
            locateStrategy: 'xpath'
        },
        sufiNey: {
            selector: ('(//a[@href="https://rastsound.com/downloads/sufi-ney/"])[2]'),
            locateStrategy: 'xpath'
        },
        sufiHeader: {
            selector: ('(//div[@class="elementor-text-editor elementor-clearfix"])[2]'),
            locateStrategy: 'xpath'
        },
        kabak: {
            selector: ('(//a[@href="https://rastsound.com/downloads/kabak-kemane/"])[2]'),
            locateStrategy: 'xpath'
        },
        kabakHeader: {
            selector: ('//h1[@class="download-title"]'),
            locateStrategy: 'xpath'
        },
        joinUser: {
            selector: ('//input[@id="edd-user-login"]'),
            locateStrategy: 'xpath'
        },
        joinEmail: {
            selector: ('//input[@id="edd-user-email"]'),
            locateStrategy: 'xpath'
        },
        joinPass: {
            selector: ('//input[@id="edd-user-pass"]'),
            locateStrategy: 'xpath'
        },
        joinPassConfirm: {
            selector: ('//input[@id="edd-user-pass2"]'),
            locateStrategy: 'xpath'
        },
        joinSubmit: {
            selector: ('//input[@class="edd-submit"]'),
            locateStrategy: 'xpath'
        },
        joinNowDropDown: {
            selector: ('(//a[@href="https://rastsound.com/join-now/"])[1]'),
            locateStrategy: 'xpath'
        },
        createPage: {
            selector: ('//main[@id="main"]'),
            locateStrategy: 'xpath'
        },
        addAtlasToCart: {
            selector: ('(//a[@class="edd-add-to-cart button  edd-submit edd-has-js"])[3]'),
            locateStrategy: 'xpath'
        },
    },
    var: vos = [
        {
            product: '@vosContemp',
            header: '@vosContempHeader',
            productName: 'Vos Contemporary',
        }
    ],
    var: blend = [
        {
            product:'@blend',
            header: '@blendHeader',
            productName: 'Blend',
        }
    ],
    var: atlas = [
        {
            product:'@atlas',
            header: '@atlasHeader',
            productName: 'Atlas',
        }
    ],
    var: mottAndWhite = [
        {
            product:'@mottAndWhite',
            header: '@mwHeader',
            productName: 'Mott & White',
        }
    ],
    var: asianColours = [
        {
            product:'@asianColours',
            header: '@asianColourHeader',
            productName: 'Recorded over several years in Vietnam, Indonesia, Cambodia, Tibet, Japan and China. The library offers multiple male and female vocals, various solo instruments and field recordings.',
        }
    ],
    var: soundsOfMars = [
        {
            product:'@soundsOfMars',
            header: '@marsHeader',
            productName: 'SOUNDS OF MARS',
        }
    ],
    var: soundsOfMars = [
        {
            product:'@soundsOfMars',
            header: '@marsHeader',
            productName: 'SOUNDS OF MARS',
        }
    ],
    var: whistle = [
        {
            product:'@whistle',
            header: '@whistleHeader',
            productName: 'whistle',
        }
    ],
    var: designerDrums = [
        {
            product:'@designerDrums',
            header: '@ddHeader',
            productName: 'DESIGNER DRUMS',
        }
    ],
    var: indiaVocals = [
        {
            product:'@indiaVocals',
            header: '@indiaHeader',
            productName: 'India Vocals',
        }
    ],
    var: soundsOfCambodia = [
        {
            product:'@soundsOfCambodia',
            header: '@cambodiaHeader',
            productName: 'SOUNDS OF CAMBODIA',
        }
    ],
    var: soundsOfCambodia = [
        {
            product:'@soundsOfCambodia',
            header: '@cambodiaHeader',
            productName: 'SOUNDS OF CAMBODIA',
        }
    ],
    var: deepElement = [
        {
            product:'@deepElement',
            header: '@deepHeader',
            productName: 'Deep Element',
        }
    ],
    var: mideastVocals2 = [
        {
            product:'@mideastVocals2',
            header: '@mideastVocals2Header',
            productName: 'Mideast Vocals II',
        }
    ],
    var: dystopianElement = [
        {
            product:'@dystopianElement',
            header: '@dystopianHeader',
            productName: 'Dystopian Element',
        }
    ],
    var: soundsOfMorocco = [
        {
            product:'@soundsOfMorocco',
            header: '@moroccoHeader',
            productName: 'Sounds Of Morocco',
        }
    ],
    var: incaSpiritVocals = [
        {
            product:'@incaSpiritVocals',
            header: '@incaHeader',
            productName: 'The Inca Empire',
        }
    ],
    var: persianVocals = [
        {
            product:'@persianVocals',
            header: '@persianHeader',
            productName: 'Persian Vocals',
        }
    ],
    var: artsyBeats = [
        {
            product:'@artsyBeats',
            header: '@artsyHeader',
            productName: 'Artsy Beats',
        }
    ],
    var: kemenche = [
        {
            product:'@kemenche',
            header: '@kemencheHeader',
            productName: 'Kemenche',
        }
    ],
    var: balkanVocals = [
        {
            product:'@balkanVocals',
            header: '@balkanHeader',
            productName: 'BALKAN VOCALS',
        }
    ],
    var: cinescapes = [
        {
            product:'@cinescapes',
            header: '@cineHeader',
            productName: 'Cinescapes',
        }
    ],
    var: hangMelo2 = [
        {
            product:'@hangMelo2',
            header: '@hm2Header',
            productName: 'Hang Melo II',
        }
    ],
    var: ceremonialVocals = [
        {
            product:'@ceremonialVocals',
            header: '@cerHeader',
            productName: 'Ceremonial Vocals',
        }
    ],
    var: ethnoGroove = [
        {
            product:'@ethnoGroove',
            header: '@ethnoHeader',
            productName: 'Ethnogroove V2',
        }
    ],
    var: mideastVocals = [
        {
            product:'@mideastVocals',
            header: '@mideastHeader',
            productName: 'MidEast Vocals',
        }
    ],
    var: bitField = [
        {
            product:'@bitField',
            header: '@bitHeader',
            productName: 'Bit Field',
        }
    ],
    var: ethnoCin = [
        {
            product:'@ethnoCin',
            header: '@ethnoCinHeader',
            productName: 'Ethnocinematic II',
        }
    ],
    var: ethnoScapesDrones = [
        {
            product:'@ethnoScapesDrones',
            header: '@esdHeader',
            productName: 'Ethnoscapes',
        }
    ],
    var: anatolianPercussion = [
        {
            product:'@anatolianPercussion',
            header: '@anaHeader',
            productName: 'Anatolian Percussion V2',
        }
    ],
    var: sufiNey = [
        {
            product:'@sufiNey',
            header: '@sufiHeader',
            productName: 'Sufi Ney V2',
        }
    ],
    var: kabak = [
        {
            product:'@kabak',
            header: '@kabakHeader',
            productName: 'Kemane String V2',
        }
    ],
}