function Test2()
{
  
    let browser = Aliases.browser;
    let page = browser.pageSapiensDecision;
    let phoneInput = page.form.form2.form4;
    let phoneInput2 = phoneInput.textbox4;
    Aliases.browser.pageSapiensDecision.form.form2.button9.textnode4.Click();
    Aliases.browser.pageSapiensDecision.textnodeMarch2021.Click();
    Aliases.browser.pageSapiensDecision.cell9.Click();
    
    //This is for Year selection
    let Year=Aliases.browser.pageSapiensDecision.FindElements("//div[@role='option']")
    let YearLength=Year.length;
    Log.Message(YearLength)
    for(let i=1;i<=YearLength;i++)
    {
    let YearText=Aliases.browser.pageSapiensDecision.FindElement("//div[@role='option']["+i+"]").textContent
    //Log.Message(YearText)
    if(YearText == "1992")
    {
     Aliases.browser.pageSapiensDecision.FindElement("//div[@role='option']["+i+"]").click();
     Log.Message("Selected the Year Successfully") 
     break;
    }
    
    }
    
   //This is to select the Month 
   
   let MonthRows=Aliases.browser.pageSapiensDecision.FindElements("//table[@class='wj-calendar-year']//tr")
   let MonthsRowsCount=MonthRows.length;
   //Log.Message(MonthsRowsCount)
   for(let i=1;i<=MonthsRowsCount;i++)
    {
      let MonthCell=Aliases.browser.pageSapiensDecision.FindElements("//table[@class='wj-calendar-year']//tr["+i+"]//td")
      let MonthCellCount=MonthCell.length
     // Log.Message(MonthCellCount)
      
      for(let j=1;j<=MonthCellCount;j++)
      {
        let MonthCelltext=Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-year']//tr["+i+"]//td["+j+"]").textContent
        //Log.Message(MonthCelltext)
        if(MonthCelltext == "Jul")
        {
          Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-year']//tr["+i+"]//td["+j+"]").click();
          Log.Message("Selected Month Successfully")
        }
        
      }

    //aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4, "value", cmpEqual, "2/3/2021");
  
  }
  //Selecting the date from calendar
  let DateRows=Aliases.browser.pageSapiensDecision.FindElements("//table[@class='wj-calendar-month']//tr");
   let DateRowsCount=DateRows.length;
   //Log.Message(DateRowsCount)
   for(let i=1;i<=DateRowsCount;i++)
    {
      let DateCell=Aliases.browser.pageSapiensDecision.FindElements("//table[@class='wj-calendar-month']//tr["+i+"]//td")
      let DateCellCount=DateCell.length
     // Log.Message(DateCellCount)
      
      for(let j=1;j<=DateCellCount;j++)
      {
          let DateCellText=Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-month']//tr["+i+"]//td["+j+"]").textContent;
         // Log.Message(DateCellText)
          
        
        if(DateCellText == "7 ")
        {
          
          if(i==2)
          {
            let arr=["24 ","25 ","26 ","27 ","28 ","29 ","30 ","31 "]
            if(arr.includes(DateCellText))
            { Log.Message("1st row");
            
            }          
            else
            {
               Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-month']//tr["+i+"]//td["+j+"]").click();        
             Log.Message("Selected Date Successfully");
             break;
            }
          }
          else
          {          
          Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-month']//tr["+i+"]//td["+j+"]").click();        
          Log.Message("Selected Date Successfully");
          break;
         
          }
   
          }
      

    
//  //Checkppoint for "Date Short US" Format
//  aqObject.CheckProperty(phoneInput2, "value", cmpEqual, "1/4/1922");
// 
//  let button = phoneInput.button3;
//  button.ClickButton();
//  page.panel12.Click();
//  //CheckPoint for "Date Short EU" format
//  aqObject.CheckProperty(phoneInput2, "value", cmpEqual, "4/1/1922");
//  button.ClickButton();
//  page.panel3.Click();
//  //Checkpoint for "Date Long US" format
//  aqObject.CheckProperty(phoneInput2, "value", cmpEqual, "Wednesday, January 04 1922");
  }
  }
  
  }

