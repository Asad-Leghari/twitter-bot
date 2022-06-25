const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const firefox = require("selenium-webdriver/firefox")
const options = new firefox.Options();
const profile = './Selenium'
options.setProfile(profile)

const Majormail = []

const register = async () => {
    try {
        let driver = await new Builder().forBrowser(Browser.FIREFOX).setFirefoxOptions(options).build();

        const signup_with_email = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[5]/div'
        const email_instead_path = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[3]/span'
        const name_path = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[1]/label/div/div[2]/div/input'
        const email_Path = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/label/div/div[2]/div/input'
        const click_month = '//*[@id="SELECTOR_1"]/option[2]'
        const click_day = '//*[@id="SELECTOR_2"]/option[2]'
        const click_year = '//*[@id="SELECTOR_3"]/option[28]'
        const first_next = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div'
        const next_path = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div'
        const sign_up_path = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div'
        const twitterCodePath = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/label/div/div[2]/div/input'
        const twitterCodeNext = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div'
        const passwordPath = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/label/div/div[2]/div[1]/input'
        const passNextPath = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/div'
        const skipBtnPath = '/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div'

        const noEmailPath = '/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div/span/span/span/span'
        const resendEmail = '/html/body/div/div/div/div[1]/div[3]/div/div/div/div[2]/div[3]/div/div/div/div[2]/div/div/span'

        // 10 mins mail

        const getMail = '/html/body/div[1]/div[3]/div[5]/div[1]/input'
        const veri_code_path = '/html/body/div[1]/div[4]/div/table/tbody/tr[2]/td[2]/a'

        await driver.get('https://10minutemail.net/?lang=en');
        const originalWindow = await driver.getWindowHandle();

        // console.log(originalWindow);

        await driver.sleep(2000);

        let mail = ''
        let code = ''

        await driver.wait(until.elementLocated(By.xpath(getMail)), 3 * 1000).then(async (el) => {
            try {
                const xmail = await el.getAttribute('value');
                mail = xmail
            } catch (error) {
                console.log(error);
            }
        });

        await driver.switchTo().newWindow('tab');
        
        await driver.get('https://twitter.com/i/flow/signup');

        const twitterWindow = await driver.getWindowHandle();
        // console.log(twitterWindow);

        await driver.wait(until.elementLocated(By.xpath(signup_with_email)), 3 * 1000).then(el => {
            el.click();
        });

        await driver.wait(until.elementLocated(By.xpath(email_instead_path)), 3 * 1000).then(el => {
            el.click();
        });

        await driver.manage().setTimeouts({ implicit: 10000 });

        driver.wait(until.elementLocated(By.xpath(name_path)), 5 * 1000).then(el => {
            el.sendKeys('ulbert alain odle');
        });

        await driver.wait(until.elementLocated(By.xpath(email_Path)), 3 * 1000).then(el => {
            el.click();
        });

        await driver.wait(until.elementLocated(By.xpath(email_Path)), 5 * 1000).then(el => {
            el.sendKeys(mail);
        });

        await driver.wait(until.elementLocated(By.xpath(click_month)), 5 * 1000).then(el => {
            el.click();
        });
        await driver.wait(until.elementLocated(By.xpath(click_day)), 5 * 1000).then(el => {
            el.click();
        });
        await driver.wait(until.elementLocated(By.xpath(click_year)), 5 * 1000).then(el => {
            el.click();
        });

        await driver.sleep(3000);

        await driver.wait(until.elementLocated(By.xpath(first_next)), 3 * 1000).then(el => {
            el.click();
        });

        await driver.sleep(3000);

        await driver.wait(until.elementLocated(By.xpath(next_path)), 3 * 1000).then(el => {
            el.click();
        });

        await driver.sleep(5000);

        await driver.wait(until.elementLocated(By.xpath(sign_up_path)), 3 * 1000).then(el => {
            el.click();
        });

        await driver.sleep(5000);

        await driver.switchTo().window(originalWindow);

        await driver.sleep(120000);
        // await driver.sleep(5000);
        
        await driver.wait(until.elementLocated(By.xpath(veri_code_path)), 3 * 1000).then(async (el) => {
            try {
                const xcode = await el.getText();
                const realCode = xcode.substring(0, 6)
                code = realCode

            } catch (error) {
                console.log(error);
            }
        });

        console.log(`mail: ${mail}, code: ${code}`);

        if (code === 'Hi, We') {
            await driver.switchTo().window(twitterWindow);
            await driver.sleep(2000);
            await driver.wait(until.elementLocated(By.xpath(noEmailPath)), 3 * 1000).then(el => {
                el.click();
            });
            await driver.sleep(2000);
            await driver.wait(until.elementLocated(By.xpath(resendEmail)), 3 * 1000).then(el => {
                el.click();
            });
            await driver.sleep(2000);
            await driver.switchTo().window(originalWindow);
            await driver.sleep(120000);
            await driver.wait(until.elementLocated(By.xpath(veri_code_path)), 3 * 1000).then(async (el) => {
                try {
                    const xcode = await el.getText();
                    const realCode = xcode.substring(0, 6)
                    code = realCode

                } catch (error) {
                    console.log(error);
                }
            });

            console.log(` 2nd Request: mail: ${mail}, code: ${code}`);

            await driver.switchTo().window(twitterWindow);

            await driver.wait(until.elementLocated(By.xpath(twitterCodePath)), 5 * 1000).then(el => {
                el.sendKeys(code);
            });

            await driver.sleep(3000);

            await driver.wait(until.elementLocated(By.xpath(twitterCodeNext)), 3 * 1000).then(el => {
                el.click();
            });

            await driver.sleep(2000);

            await driver.wait(until.elementLocated(By.xpath(passwordPath)), 5 * 1000).then(el => {
                el.sendKeys('Dellsamsung120');
            });

            await driver.sleep(2000);

            await driver.wait(until.elementLocated(By.xpath(passNextPath)), 3 * 1000).then(el => {
                el.click();
            });

            await driver.sleep(2000);

            await driver.wait(until.elementLocated(By.xpath(skipBtnPath)), 3 * 1000).then(el => {
                el.click();
            });

            return
        }

        await driver.switchTo().window(twitterWindow);

        await driver.wait(until.elementLocated(By.xpath(twitterCodePath)), 5 * 1000).then(el => {
            el.sendKeys(code);
        });

        await driver.sleep(3000);

        await driver.wait(until.elementLocated(By.xpath(twitterCodeNext)), 3 * 1000).then(el => {
            el.click();
        });

        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.xpath(passwordPath)), 5 * 1000).then(el => {
            el.sendKeys('Dellsamsung120');
        });

        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.xpath(passNextPath)), 3 * 1000).then(el => {
            el.click();
        });

        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.xpath(skipBtnPath)), 3 * 1000).then(el => {
            el.click();
        });

    } catch (error) {
        console.log(error);
    }
}

register();
