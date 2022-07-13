const { default: ChromeDriverService } = require("wdio-chromedriver-service");

import banner from '../pageobjects/banner';   //imports class from page object file

describe('ii cookie banner', () => {    //pop up cookie pref modal was interfering with testing, tried multiple methods to bypass (couldnt identify the button and click it as i received the error - another element will be interacted with and trying to use moveTo and browser.click wouldnt work due to an error - browser.click is not a function) but the only one to work was to manualy add the cookie and refresh the page prior to initiating further tests.
  
    
     it('cookie banner accept', async() => {     
       browser.url ('/'); //go to base url from config
       browser.maximizeWindow; //maximise window

       await browser.setCookies({
        name: 'cookie-preferences',   //cookie name
        value: '{"functional":true,"performance":true,"analytics":true}'  // cookie prefs
       })

       browser.refresh();  // refresh browser 

       //const btnAccept = await $('[role=button]');  // explored different ways of accepting the cookie pref modal, didnt work due to 'other element would receive the click' error
       //await browser.pause(5000)                    // added for testing purposes, holds no real use during implementation 
       //await btnAccept.moveTo();
       //await btnAccept.click();
       //await browser.pause(5000)
       
      });

     it(' footer links direct correctly', async() => {

       await banner.OpenATradingAcc.click();  // clicks predefined const
       await browser.pause(5000) // 5 second wait

       await expect(browser).toHaveUrlContaining('/ii-accounts/trading-account');  // checks url for ('***')

      });

     it('investment search modal', async() => {

       await banner.searchbtn.click(); //clicks searchbtn to show investment search modal (POM)

       await browser.pause(5000) //forced wait should use watfordisplayed really
                 
       await expect(banner.modal).toBeDisplayed(); // checks modal is displayed
       
        });

     it('navigate to instrument', async() => {
     
      banner.input.addValue('amc'); //types value into search bar

      await browser.pause(5000)  // just there for demo purposes so i can see whats typed in ^ easier
     
      const amc = await $$('[id="chakra-modal--body-5"] ul li') // finds list of elements  


      let element;  // create emtpy var
      for (const e of amc) {    //loops through each element in array
         
         const a = await e.getText(); // gets text of instance of amc
         if (a.includes('AMC Entertainment Holdings Inc Class A')) {   //checks text against specified value 
         // console.log({a},  e.getText()); // used to debuf with console
         element = e;  // if string is found empty var is defined as selected element
              };
            };
        
        await element.click();  // clicks now defined var
      
      await browser.pause(2500)
    
     });

     it('test stock page', async() => {   

      await expect(browser).toHaveUrlContaining('/amc-entertainment-holdings-inc-class-a/NYSE:AMC');  // checks url for ('***')
 
    });

      

        
});    