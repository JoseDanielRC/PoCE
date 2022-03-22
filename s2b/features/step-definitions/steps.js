const { Given, When, Then } = require('@wdio/cucumber-framework');
const SettingsPage = require('../pages/settings.page');
//const settings = require('../pages/settings.page');

Given('I am on the settings page', function () {
    //SettingsPage.open;
    browser.pause(20000);
    //await expect(browser).toHaveTitle('Institution Selection');
    //await settings.validatingSettingsPage();
});

When('I insert institutionId', function() {
     SettingsPage.institutionIdCmBox.setValue("BBDEV04");
}
);

Then('display message "You passed"', function()  {    
     console.log('Ha ingresado el dato correctamente')        
});


