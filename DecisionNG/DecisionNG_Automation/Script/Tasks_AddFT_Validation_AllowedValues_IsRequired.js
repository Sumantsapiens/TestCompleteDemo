function Tasks_AddFT_Validation_AllowedValues_IsRequired()
{
  Aliases.browser.BrowserWindow2.Maximize();
  Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.SetText("");
  Aliases.browser.pageSapiensDecision.form.form2.form4.numberinputLength.Click();
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form4.labelAllowedValuesIsRequired, "contentText", cmpEqual, "Allowed Values is required");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.SetText("Any value");
  Aliases.browser.pageSapiensDecision.form.form2.form4.numberinputLength.Click();
  if(! Aliases.browser.pageSapiensDecision.form.form2.form4.labelAllowedValuesIsRequired.Exists)
  {
    Log.Checkpoint('"Allowed Values is required" does not exsist')
    
  }
  else
  {
    Log.error('"Allowed Values is required" Exists')
  }
  
  Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
}