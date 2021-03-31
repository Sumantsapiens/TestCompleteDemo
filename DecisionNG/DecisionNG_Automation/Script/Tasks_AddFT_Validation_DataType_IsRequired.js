function Tasks_AddFT_Validation_Datatype_IsRequired()
{
  
  Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.SetText("");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form3.labelNameIsRequired, "contentText", cmpEqual, "Data Type is required");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.SetText("Text");
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
  
  Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
}