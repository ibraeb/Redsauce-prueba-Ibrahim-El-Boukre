const NosotrosSection = require('../../../test/pageobjects/nosotros');
const { Given } = require('cucumber')
const { When } = require('cucumber')
const { Then } = require('cucumber')

Given('I am in Redsauce main page {string}', function (lan) {
  NosotrosSection.setLanguage(lan);
  NosotrosSection.gotoMainPage();
});

When('I try to access to {string} section', function (section) {
    NosotrosSection.gotoNosotros();
});

Then('I should see {int} profiles', function (num) {
    NosotrosSection.countProfiles(num);
});