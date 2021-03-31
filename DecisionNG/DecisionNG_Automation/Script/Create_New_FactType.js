function Tasks_Create_New_FactType()
{
  Project.Variables.Create_New_FactType2.Reset();
  for(; !Project.Variables.Create_New_FactType2.IsEOF();)
  {
    //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageSapiensDecision.buttonAddFactType object equals '+Add Fact Type'.
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.buttonAddFactType, "ObjectLabel", cmpEqual, "+Add Fact Type");
    //Clicks the 'buttonAddFactType' button.
    Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
    //Checks whether the 'contentText' property of the Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary object equals 'Fact Type Summary:'.
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Fact Type Summary:");
    //Checks whether the 'contentText' property of the Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft object equals 'DRAFT'.
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft, "contentText", cmpEqual, "DRAFT");
    //Clicks the 'textboxName' control.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
    //Sets the text KeywordTests.Tasks_Create_New_FactType.Variables.Create_New_FactType("FactType Name") in the 'textboxName' text editor.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(Project.Variables.Create_New_FactType2.Value("FactType Name"));
    //Clicks the 'textareaDescription' control.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Click();
    //Enters KeywordTests.Tasks_Create_New_FactType.Variables.Create_New_FactType("Description") in the 'textareaDescription' object.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys(Project.Variables.Create_New_FactType2.Value("Description"));
    if(Project.Variables.Create_New_FactType2.Value("List Indicator") == "Single Value")
    {
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeSingleValue2.Click();
    }
    else{
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeMultipleValues.Click();
    }
    //Clicks the 'textbox' control.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.Click();
    //Sets the text KeywordTests.Tasks_Create_New_FactType.Variables.Create_New_FactType("Data Type") in the 'textbox' text editor.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.SetText(Project.Variables.Create_New_FactType2.Value("Data Type"));
    //Clicks the 'textbox2' control.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
    //Sets the text KeywordTests.Tasks_Create_New_FactType.Variables.Create_New_FactType("Display Format") in the 'textbox2' text editor.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.SetText(Project.Variables.Create_New_FactType2.Value("Display Format"));
    //Clicks the 'textbox3' control.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.Click();
    //Sets the text KeywordTests.Tasks_Create_New_FactType.Variables.Create_New_FactType("Allowed Values ") in the 'textbox3' text editor.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.SetText(Project.Variables.Create_New_FactType2.Value("Allowed Values "));
    //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageSapiensDecision.form.buttonOk object equals 'OK'.
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.buttonOk, "ObjectLabel", cmpEqual, "OK");
    //Checks whether the 'contentText' property of the Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary object equals 'Fact Type Summary: FactTypeis1'.
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Fact Type Summary: FactTypeis1");
    //Clicks the 'buttonOk' button.
    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
    Project.Variables.Create_New_FactType2.Next();
  }
}