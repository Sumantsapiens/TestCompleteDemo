function Tasks_AddFt_Validation_DisplayFormatIsRequired()
{
  
  Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.SetText("");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.Click();
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form4.labelDisplayFormatIsRequired, "contentText", cmpEqual, "Display Format is required");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.SetText("Text");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.Click();
  if(! Aliases.browser.pageSapiensDecision.form.form2.form4.labelDisplayFormatIsRequired.Exists)
  {
    Log.Checkpoint('"Display Format is required" does not exsist')
    
  }
  else
  {
    Log.error('"Display Format is required" Exists')
  }
  
  
  Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
  
}

