function Tasks_AddFT_Validation_Duplicate_FactType()
{
  Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText("D1");
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form3.labelNameIsRequired, "contentText", cmpEqual, "A draft Fact Type with this name already exists in this task.");
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.DblClick(24, 14);
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText("");
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form3.labelNameIsRequired, "contentText", cmpEqual, "Name is required");
  //Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText("testtt");
  if(! Aliases.browser.pageSapiensDecision.form.form2.form3.labelNameIsRequired.Exists)
  {
    Log.Checkpoint('"A draft Fact Type with this name already exists in this task." line does not exsist')
    
  }
  else
  {
    Log.error('"A draft Fact Type with this name already exists in this task."/line still exists')
  }
  
  
  Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
}