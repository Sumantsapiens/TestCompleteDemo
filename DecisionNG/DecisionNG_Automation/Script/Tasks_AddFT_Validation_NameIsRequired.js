  function Validation_Name_is_required()
  {try
  {
 
  Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
 
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
 
  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form3.labelNameIsRequired, "ObjectLabel", cmpEqual, "Name is required");

  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
 
 // Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText("ValidatingFTName");
 
  
  if(! Aliases.browser.pageSapiensDecision.form.form2.form3.labelNameIsRequired.Exists)
  {
    Log.Checkpoint('"Name is required" does not exsist')
    
  }
  else
  {
    Log.error('"Name is required" Exists')
  }
  
  }
  catch (e)
  {
 
  Log.Error(e.message);
  }

  Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();

  }
