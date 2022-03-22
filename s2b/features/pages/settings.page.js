class settingspage {
    get institutionIdCmBox() { return $('#institutionId') }

    open() {
                app.open('C:/Users/Ale Rodriguez/AppData/Local/Programs/sumadi-app-v2/SUMADI.exe')
            }
}
module.exports = new settingspage();