function Test2()
{
  Aliases.browser.pageSapiensDecision.form.form2.form4.button5.textnode5.Click();
 
  var Time=Aliases.browser.pageSapiensDecision.FindElements("//div[@role='option']");
  Log.Message(Time.length)
  for(let i=0;i<=Time.length;i++)
  {
    var Timetext=Time[i].textContent;
    Log.Message(Timetext)
    if(Timetext=="1:00 AM")
    {
      Time[i].click();
      break;
    }
  }
  
 
  
}
