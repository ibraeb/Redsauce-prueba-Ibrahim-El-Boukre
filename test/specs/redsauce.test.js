/* NOTA: Este seria el test a utilizar en caso de usar el framework Mocha */
const { default: waitForDisplayed } = require('webdriverio/build/commands/element/waitForDisplayed');
const NosotrosSection = require('../pageobjects/nosotros');

describe('My Redsauce application', () => {
    it('Should open Redsauce page', () => {
        NosotrosSection.open(`https://redsauce.net/es`);
    });

    it('Should go to "Nosotros" section', () => {
        waitForDisplayed(1000);
        NosotrosSection.gotoNosotros();
    });

    it('Should show 17 profiles', () => {
        NosotrosSection.countProfiles(17);        
    });
});


