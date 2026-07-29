import { Given, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from 'playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';

import data from '../../Testdata/data.json';


setDefaultTimeout(60 * 1000);



let browser: Browser;
let page: Page;
let context: any

let file = "C:\\Users\\mgovi\\OneDrive\\Desktop\\Java-IH-020\\Playwright\\PlawrightScript\\Screenshots\\countryFullpage.png"
let file2 = "C:\\Users\\mgovi\\OneDrive\\Desktop\\Java-IH-020\\Playwright\\PlawrightScript\\package.json"

Given('I Launch the browser', { timeout: 3000 }, async function () {
  browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  const context = await browser.newContext({ viewport: null, acceptDownloads: true });
  page = await context.newPage();
});


Then('I Launch the facebook appliation', { timeout: 30000 }, async function () {
  await page.goto('https://www.facebook.com/');
});

Then('I close the browser', { timeout: 30000 }, async function () {
  await browser.close();
});

Then('I Launch the test automation appliation', { timeout: 30000 }, async function () {
  await page.goto("https://testautomationpractice.blogspot.com/");
});



Then('I verify playwright locators', { timeout: 30000 }, async function () {
  console.log("===placeholder for playwright locators===");
  await page.getByPlaceholder("Enter Name").fill('qualitythought')
  await page.getByPlaceholder("Enter Email").fill('qualitythought@gmail.com')
  console.log("===getby text for playwright locators===");
  await page.getByText("START").click()
  await page.getByText("STOP").click()
  console.log("===getby role for playwright locators===")
  await page.getByRole('button', { name: "START" }).click()
  await page.getByRole('button', { name: "STOP" }).click()
  await page.waitForTimeout(3000)
  await page.getByRole("checkbox", { name: "Sunday" }).check()
  await page.getByRole("checkbox", { name: "Monday" }).check()

});


Then('I verify selenium  locators', { timeout: 30000 }, async function () {

  await page.locator("//input[@id='name']").fill('qualitythought')
  await page.locator("//input[@id='email']").fill('qualitythought@gmail.com')

  await page.locator("input[id='name']").type('qualitythought')
  await page.locator("input[id='email']").type('qualitythought@gmail.com')

  await page.locator("#phone").fill("9987456114")
  await page.locator(".wikipedia-search-input").fill("wikipedia")


})

Then("I verify selenium  xpath locators", { timeout: 30000 }, async function () {
  console.log("===verify contains xpath locators===")

  await page.locator("//input[contains(@id,'name')]").fill('qualitythought')
  await page.locator("//input[contains(@id,'email')]").fill('qualitythought@gmail.com')

  console.log("===verify starts with xpath locators===")

  await page.waitForTimeout(3000)

  await page.locator("//input[starts-with(@placeholder,'Enter Name')]").fill('nagaraju')
  await page.locator("//input[starts-with(@placeholder,'Enter EMail')]").fill('nagaraju@gmail.com')
  await page.waitForTimeout(3000)
  await page.locator("//input[starts-with(@placeholder,'Enter')]").first().type('patel')
  await page.locator("//input[starts-with(@placeholder,'Enter')]").last().type('nagaraju')

  console.log("===verify text with xpath locators===")

  var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()
  console.log(text)


})

Then("I verify selenium  xpath axes locators", { timeout: 30000 }, async function () {

  var parentcount = await page.locator("//input[@id='field1']//parent::div").all()
  console.log("Number of parent divs: " + parentcount.length)


  var ancestorcount = await page.locator("//input[@id='field1']//ancestor::div").all()
  console.log("Number of ancestor divs: " + ancestorcount.length)

  var precedingcount = await page.locator("//input[@id='field1']//preceding::div").all()
  console.log("Number of preceding divs: " + precedingcount.length)

  var childtext = await page.locator("//div[@class='form-group']//child::input[@id='name']").fill('qualitythought')

})

Then("I verify playwright methods", { timeout: 30000 }, async function () {

  await page.reload()
  await page.waitForTimeout(3000)
  // await page.getByText("New Tab").click()
  console.log(await page.title())
  //  await page.bringToFront()

  let count = await page.locator("//input[@class='form-control']").all()
  console.log("Number of input fields: " + count.length)
  for (let i = 0; i < count.length; i++) {
    var text = await page.locator("//input[@class='form-control']").nth(i).getAttribute("placeholder")
    console.log("Input field " + (i + 1) + " placeholder: " + text)
  }

  await page.locator("//input[@id='field1']").scrollIntoViewIfNeeded()

  await page.locator("//input[@id='field1']").clear()

  await page.locator("//input[@id='field1']").fill('qualitythought')

  console.log("===verify playwright locators for text===")

  var dytext = await page.locator("//h2[text()='Dynamic Button']").innerText()
  console.log("Dynamic button text: " + dytext)

  var dytext1 = await page.locator("//h2[text()='Dynamic Button']").textContent()
  console.log("Dynamic button text content: " + dytext1)

  var dytext2 = await page.locator("//h2[text()='Dynamic Button']").innerHTML()
  console.log("Dynamic button inner HTML: " + dytext2)

  var title = await page.locator(".title").allInnerTexts()
  console.log("titlte", title)

  for (let i = 0; i < title.length; i++) {
    console.log(`title ${i} is :`, title[i])
  }


  console.log("Right click on the webelement")

  await page.locator("//input[@id='field1']").scrollIntoViewIfNeeded()
  await page.locator("//input[@id='field1']").click({ button: 'right' })
});


Then("I verify playwright methods2", { timeout: 30000 }, async function () {

  var isVisible = await page.getByRole('button', { name: "START" }).isVisible()
  console.log("Is START button visible: " + isVisible)

  var isVisible1 = await page.getByRole('button', { name: "START" }).isHidden()
  console.log("hidden: ", isVisible1)

  var isVisible2 = await page.getByRole('button', { name: "START" }).isDisabled()
  console.log("is displayed: ", isVisible2)

  var isVisible3 = await page.getByRole('button', { name: "START" }).isEnabled()
  console.log("is enabled: ", isVisible3)


  var isvisible5 = await page.locator("//input[starts-with(@placeholder,'Enter Name')]").isEditable()
  console.log("iseditable:", isvisible5)

  await page.locator("//input[@id='sunday']").scrollIntoViewIfNeeded()

  var checked1 = await page.locator("//input[@id='sunday']").isChecked()
  console.log("checked1 ", checked1)
  await page.locator("//input[@id='sunday']").setChecked(true)
  console.log("checked1 ", checked1)
  await page.locator("//input[@id='sunday']").setChecked(false)
  console.log("checked1 ", checked1)
  await page.locator("//input[@id='sunday']").setChecked(true)
  await page.locator("//input[@id='sunday']").uncheck()


})

Then("I verify playwright methods3", { timeout: 30000 }, async function () {

  await page.goto("https://www.amazon.in/")
  await page.locator("//span[contains(text(),'Account & Lists')]").hover()
  //  await page.locator("//span[contains(text(),'Sign in')]").first().click()

  await page.locator("//input[@id='twotabsearchtextbox']").highlight()
  await page.locator("//input[@id='twotabsearchtextbox']").pressSequentially("Mobiles")
})

Then("I verify playwright methods4", { timeout: 3000 }, async function () {

  await page.locator("//input[@id='field1']").scrollIntoViewIfNeeded()
  await page.locator("//input[@id='field1']").press('CONTROL+A')
  await page.keyboard.press('DELETE')
  //  await page.keyboard.up('CONTROL+A')
  await page.locator("//input[@id='field1']").pressSequentially("TESTING")
});

Then("I verify dropdown methods", { timeout: 30000 }, async function () {

  console.log("========dropdown============");

  let color = await page.locator("//select[@id='colors']")
  await color.scrollIntoViewIfNeeded()
  //     await page.locator("//select[@id='colors']").highlight()
  console.log(await color.allInnerTexts());
  await color.selectOption("Red");
  await color.selectOption("Green");
  await color.selectOption(["Blue", "Yellow"])


  let country = await page.locator("//select[@id='country']")
  await country.scrollIntoViewIfNeeded()
  await country.selectOption("usa")
  await country.selectOption("uk")
  console.log(await country.allInnerTexts());
  await country.selectOption({ label: 'Germany' })
  await country.selectOption({ index: 2 })


  console.log("===============screenshot========================");

  const screenshotDir = 'C:/Users/mgovi/OneDrive/Desktop/Java-IH-020/Playwright/PlawrightScript/Screenshots';
  await page.locator("//select[@id='country']").screenshot({ path: `${screenshotDir}/countryWebElement.png` });
  await page.screenshot({ path: `${screenshotDir}/country1Page.png` })
  await page.screenshot({ path: `${screenshotDir}/countryFullpage.png`, fullPage: true })

});

Then("I Verify the Table Handling methods", { timeout: 3000 }, async function () {

  ////tr/td[contains(text(),'Amod')]
  var tname = await page.locator("//table[@name='BookTable']//tr[6]/td[2]")
  await tname.isVisible()
  await tname.scrollIntoViewIfNeeded()
  var tn = await tname.innerText()
  console.log("tn :", tn);
  var am = "Amod"
  if (tn == am) {
    console.log("expected output");
  } else {
    console.log("name not found");

  }
})

Then("I Verify the Table Handling Dynamic methods", { timeout: 3000 }, async function () {


  var pname = "Java"
  var tname = await page.locator("//table[@name='BookTable']")
  await tname.scrollIntoViewIfNeeded()

  let rows = await page.locator("//table[@name='BookTable']//tr").all()


  for (let i = 2; i <= rows.length; i++) {

    var column = await page.locator("//table[@name='BookTable']//tr[" + i + "]//td").all()

    for (let j = 1; j <= column.length; j++) {
      var colname = await page.locator("//table[@name='BookTable']//tr[" + i + "]//td[" + j + "]").innerText()

      if (pname.includes(colname)) {
        console.log("gotcha found the guy....");
        console.log("//table[@name='BookTable']//tr[" + i + "]//td[" + j + "]");
        console.log(colname);


      }

    }

  }
})

Then("I Verify the Table Handling Header methods", { timeout: 3000 }, async function () {

  let tb = await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

  let rows = await page.locator("//table[@name='BookTable']//tr").all()
  for (let i = 1; i <= rows.length; i++) {
    var th = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//th").all()
    for (let j = 1; j <= th.length; j++) {
      var thname = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//th[" + j + "]").innerText()
      console.log("thname: ", thname);

    }
  }

})


Then("I verify playwright Hard Assertion methods", { timeout: 3000 }, async function () {
  await page.goto("https://www.amazon.in/")

  await expect(page.getByPlaceholder("Search Amazon.in")).toBeVisible()
  await expect(page.getByPlaceholder("Search Amazon.in")).toBeAttached()
  await expect(page.getByPlaceholder("Search Amazon.in")).toBeEditable()
  // await expect(page.locator("//a[@id='nav-logo-sprites']")).toBeHidden()
  await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
  await expect(page.locator("//a[text()='Mobiles']")).toHaveText("Mobiles")
  await expect(page.locator("//a[text()='Mobiles']")).toContainText("Mobil")
  await expect(page.locator("//a[text()='Mobiles']")).toHaveAttribute('id')
  await expect(page.getByPlaceholder("Search Amazon.in")).toBeEmpty()

})

Then('I Launch the test sauce demo appliation', { timeout: 3000 }, async function () {
  await page.goto("https://www.saucedemo.com/")
});

Then('I verify playwright Filter methods', async function () {
  await page.getByPlaceholder("Username").fill("standard_user")
  await page.getByPlaceholder("Password").fill("secret_sauce")
  await page.locator("#login-button").click()

  // await page.getByRole('button',{name:'Add to cart'}).first().click()

  await page.locator('.inventory_item').filter({ hasText: "Sauce Labs Backpack" }).getByRole('button', { name: 'Add to cart' }).click()
  await page.locator('.inventory_item').filter({ hasText: "Sauce Labs Bike Light" }).getByRole('button', { name: 'Add to cart' }).click()

  await page.waitForTimeout(3000)


  await page.locator('.inventory_item').filter({ hasText: "Sauce Labs Backpack" }).getByRole('button', { name: 'Remove' }).click()
  await page.locator('.inventory_item').filter({ hasText: "Sauce Labs Bike Light" }).getByRole('button', { name: 'Remove' }).click()

});


Then('I verify playwright Filter methods2', async function () {

  await page.getByText('Days:').scrollIntoViewIfNeeded()
  await page.locator('.form-check form-check-inline').highlight()
  await page.locator('.form-check form-check-inline').filter({ hasText: 'sunday' },).locator("//input[@id='sunday']").click()
})



Then('I verify playwright Alerts methods', async function () {

  await page.getByRole('button', { name: 'Simple Alert' }).isVisible()
  await page.getByRole('button', { name: 'Simple Alert' }).scrollIntoViewIfNeeded()

  await page.once('dialog', async dialog => {
    console.log("message: ", dialog.message());
    await expect(dialog.message()).toContain("I am an alert box!")
    await dialog.accept()
  })
  await page.getByRole('button', { name: 'Simple Alert' }).click()

})


Then("I verify playwright Confrimation Alerts methods", { timeout: 3000 }, async function () {

  await page.getByRole('button', { name: 'Confirmation Alert' }).scrollIntoViewIfNeeded()

  await page.once('dialog', async dialog => {
    console.log(await dialog.message());
    await dialog.accept()
  })
  await page.getByRole('button', { name: 'Confirmation Alert' }).click()

  await page.once('dialog', async dialog => {
    console.log(await dialog.message());
    await dialog.dismiss()
  })
  await page.getByRole('button', { name: 'Confirmation Alert' }).click()


})

Then("I verify playwright promt Alerts methods", { timeout: 3000 }, async function () {

  await page.getByRole('button', { name: 'Prompt Alert' }).scrollIntoViewIfNeeded()

  await page.once('dialog', async dialog => {
    console.log(await dialog.message());
    await dialog.accept("testing")

  })
  await page.getByRole('button', { name: 'Prompt Alert' }).click()
  await page.screenshot({ path: "C:\Users\mgovi\OneDrive\Desktop\Java-IH-020\Playwright\PlawrightScript\Screenshots\alert.png" })
})

Then("I Verify the frames methods", { timeout: 3000 }, async function () {

  await page.goto("https://the-internet.herokuapp.com/nested_frames")

  let allframe = await page.frames()
  console.log("frames count: ", await allframe.length);

  let left = await page.frame({ url: 'https://the-internet.herokuapp.com/frame_left' })
  let lefttext = await left?.locator("//*[contains(text(),'LEFT')]").innerText()
  console.log("framelefttext: ", lefttext);

  let bottom = await page.frame({ url: 'https://the-internet.herokuapp.com/frame_bottom' })
  let bottomtext = await bottom?.locator("//*[contains(text(),'BOTTOM')]").innerText()
  console.log("bottomtext: ", bottomtext);
})



Then("I Verify the playwright Fileupload", { timeout: 3000 }, async function () {

  await page.locator("//input[@id='singleFileInput']").scrollIntoViewIfNeeded()

  await page.locator("//input[@id='singleFileInput']").setInputFiles(file)
  await page.getByRole('button', { name: 'Upload Single File' }).click()

  await page.locator("//input[@id='multipleFilesInput']").setInputFiles([file, file2])
  await page.getByRole('button', { name: 'Upload Multiple Files' }).click()

})

Then("I Verify the playwright FileDownload", { timeout: 6000 }, async function () {

  await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

  await page.locator("//button[@id='generatePdf']").click()

  const downloadpromise = page.waitForEvent('download')

  await page.locator("//a[@id='pdfDownloadLink']").click()

  const downlaod = await downloadpromise;

  expect(await downlaod.suggestedFilename()).toContain('.pdf')
  console.log(await downlaod.suggestedFilename())

  await downlaod.saveAs('downloads/report.pdf')

})

Then("I verify the playwight awaits", async function () {

  await page.waitForTimeout(4000)
  await page.locator('//input[@name="email"]').fill("Quality");
  await page.waitForTimeout(4000)
  await page.locator('//input[@name="pass"]').fill("thought@yahoo.com");

  await page.waitForSelector('//input[@name="email"]');
  await page.locator('//input[@name="email"]').fill("test")

  await page.waitForSelector('//input[@name="pass"]', { timeout: 4000 });
  await page.locator('//input[@name="pass"]').fill("done")

})

Then("I verify playwright popup handling", { timeout: 3000 }, async function () {

  let pagetitle = await page.url()
  console.log(pagetitle)
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Popup Windows' }).scrollIntoViewIfNeeded(),
    page.getByRole('button', { name: 'Popup Windows' }).click()
  ])

  console.log(await popup.url());


})

Then("I verify the datareading into playwright script", async function () {
  await page.getByPlaceholder("Enter Name").fill(data.user1.name)
  await page.getByPlaceholder("Enter Email").fill(data.user1.email)
  await page.getByPlaceholder("Enter Phone").fill(data.user1.phone)
  await page.locator("#textarea").fill(data.user1.address)
})


Then("I verify the datareading into playwright script2", async function () {
  await page.getByPlaceholder("Enter Name").fill(data.user2.name)
  await page.getByPlaceholder("Enter Email").fill(data.user2.email)
  await page.getByPlaceholder("Enter Phone").fill(data.user2.phone)
  await page.locator("#textarea").fill(data.user2.address)
})

 Then('I verify the  feature datareading into playwright script {string},{string},{string},{string}', async function (name, email, phone, address) {
  await page.getByPlaceholder("Enter Name").fill(name)
  await page.getByPlaceholder("Enter Email").fill(email)
  await page.getByPlaceholder("Enter Phone").fill(phone)
  await page.locator("#textarea").fill(address)  
    
});