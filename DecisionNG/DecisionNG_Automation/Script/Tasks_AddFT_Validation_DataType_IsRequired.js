function Tasks_AddFT_Validation_Datatype_IsRequired()
{
  Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.SetText("");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form4.labelDataTypeIsRequired, "contentText", cmpEqual, "Data Type is required");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.SetText("text");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
  if(! Aliases.browser.pageSapiensDecision.form.form2.form4.labelDataTypeIsRequired.Exists)
  {
    Log.Checkpoint('"Data Type is required" does not exsist')
    
  }
  else
  {
    Log.error('"Data Type is required" Exists')
  }
  
  
  Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
}