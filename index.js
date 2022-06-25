const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const firefox = require("selenium-webdriver/firefox")
const options = new firefox.Options();
const profile = './Selenium'
options.setProfile(profile)

const example = async () => {
    try {
        let driver = await new Builder().forBrowser(Browser.FIREFOX).setFirefoxOptions(options).build();

        const username_Path = '/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[5]/label/div/div[2]/div/input'
        const username_click_path = '/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[6]/div'
        const password_path = '/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div/div[3]/div/label/div/div[2]/div[1]/input'
        const login_btn = '/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div/div'

        await driver.get('https://twitter.com/i/flow/login');
        
        driver.wait(until.elementLocated(By.xpath(username_Path)), 5 * 1000).then(el => {
            el.sendKeys('ulbertalainodle');
        });

        await driver.wait(until.elementLocated(By.xpath(username_click_path)), 3 * 1000).then(el => {
            el.click();
        });

        driver.wait(until.elementLocated(By.xpath(password_path)), 2 * 1000).then(el => {
            el.sendKeys('Dellsamsung120');
        });

        await driver.wait(until.elementLocated(By.xpath(login_btn)), 3 * 1000).then(el => {
            el.click();
        });
        
    } catch (error) {
        console.log(error);
    }
}

example();

// let driver = new Builder().forBrowser(Browser.FIREFOX).setFirefoxOptions(options).build();

// driver.get('http://www.google.com');
// driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
// await driver.wait(until.titleIs('Log in to Twitter / Twitter'), 1000);
// const el = await driver.findElement(By.xpath(username_Path))
// await driver.wait(until.elementLocated(el), 10000);
// await driver.wait(() => documentInitialised(), 15000);
// await driver.findElement(By.xpath(username_Path)).click()
// await driver.findElement(By.xpath(username_Path)).sendKeys('lordulbert', Key.ENTER)
// await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);