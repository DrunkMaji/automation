class banner {                              //create class for selectors 
  get searchbtn() {                         //block defining a const
    return $('button.ii-1nx0ar8')           //selector - specifically the search button
  } 
  
  get modal() {
    return $('#chakra-modal--body-5')  // investment search modal 
  } 

  get OpenATradingAcc() {
    return $('//footer//a[@href="/ii-accounts/trading-account"]')  //  find child element in 'footer'
  }
  
  get input() {
    return $('#chakra-modal--body-5').$('input.chakra-input.ii-8530ov') // find input value in child element of modal
  }

  

  



}

export default new banner();                //allow use of class in your code providing its been imported