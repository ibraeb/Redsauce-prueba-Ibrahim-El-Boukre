/* NOTA: Este seria el test a utilizar en caso de usar el framework Mocha */
const { default: waitForDisplayed } = require('webdriverio/build/commands/element/waitForDisplayed');
const NosotrosSection = require('../pageobjects/nosotros');

describe('Test profiles spanish version', () => {
    it('Should open Redsauce page', () => {
        NosotrosSection.setLanguage('es');
        NosotrosSection.gotoMainPage();
    });

    it('Should go to "Nosotros" section', () => {
        waitForDisplayed(1000);
        NosotrosSection.gotoNosotros();
    });

    it('Should show 17 profiles', () => {
        NosotrosSection.countProfiles(17);        
    });
});


describe('Test profiles english version', () => {
    it('Should open Redsauce page', () => {
        NosotrosSection.setLanguage('en');
        NosotrosSection.gotoMainPage();
    });

    it('Should go to "Nosotros" section', () => {
        waitForDisplayed(1000);
        NosotrosSection.gotoNosotros();
    });

    it('Should show 17 profiles', () => {
        NosotrosSection.countProfiles(17);        
    });
});


