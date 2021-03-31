function Tasks_Create_New_FactType()
{
   
  Project.Variables.Create_New_FactType.Reset();
  // Ceate New FactType using Add FT button
  for(; !Project.Variables.Create_New_FactType.IsEOF();)
  
  { 
    var timestamp = new Date();
    var FactType_Name = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
    //Starting point  of a testcase
    aqTestCase.Begin(Project.Variables.Create_New_FactType.Value("TestCase Name"));
    
   
    Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummarySd, "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("CheckPoint FT Summary"));
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft2, "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("Status"));
    
    Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
    
    Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name);
    Delay(2000);
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.panel5, "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("FT Summary after FT entry")+" "+FactType_Name);
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Click();
    
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys(Project.Variables.Create_New_FactType.Value("Description"));
   
    //Checks the input if user wants to select Single Input or Multiple Input Enters the loops if its Single Value.
    if(Project.Variables.Create_New_FactType.Value("List Indicator") == "Single Value")
    {
    Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeSingleValue.Click();
    }
    //Checks the input if user wants to select Single or Multiple List Indicator Enters the loops if its Multiple Value.
    else {
    Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeMultipleValues.Click();
    }
    
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.Click();
    
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.SetText(Project.Variables.Create_New_FactType.Value("Data Type"));
    Delay(1000)
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
    Delay(1000)
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.SetText(Project.Variables.Create_New_FactType.Value("Display Format"));
    Delay(1000)
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.Click();
    
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.SetText(Project.Variables.Create_New_FactType.Value("Allowed Values "));
    
    //If Allowed Values is Range then enters the loop and enter the set of range values 
    if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Range")
      {
     
      Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
       Delay(1000);
        var str = Project.Variables.Create_New_FactType.Value("SetValues");
        var setValues = str.split(',');     
        for(var i = 0; i < setValues.length ; i++) 
        { 
        var rangeData = setValues[i].split('-');
        var fromData=rangeData[0];
        var toData=rangeData[1];          
     
      Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
     
      Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.SetText(fromData);
     
      Aliases.browser.pageSapiensDecision.form.form2.form4.textbox5.Click();
     
      Aliases.browser.pageSapiensDecision.form.form2.form4.textbox5.SetText(toData);
      
      Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
      }
      }
      //If Allowed Values is Regular set then enters the loop and enter the set of values 
      else if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Regular set")
      {
      Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
      Delay(2000);
      var str = Project.Variables.Create_New_FactType.Value("SetValues");
      var str_array = str.split(',');
      for(var i = 0; i < str_array.length; i++) 
      { 
      Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
      
      Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.SetText(str_array[i]);
     
      Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
      }
      }
      //If Allowed Values is Dynamic set then enters the loop and enter the set of values
      else if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Dynamic set")
      {
      Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
      Delay(2000)
      //Split the input data using comma's
      var str = Project.Variables.Create_New_FactType.Value("SetValues");
      var str_array = str.split(',');
      for(var i = 0; i < str_array.length; i++) 
      { 
      Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.SetText(str_array[i]);
     
      Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
      }
      }
      
      Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
      
      Delay(2000)
      
      let FactTypeNameAfterCreation= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]").textContent;
      Log.Message("FactName After Creation is "+FactTypeNameAfterCreation);
      let NewFTStatus= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[2]").textContent;
      Log.Message("NewFTStatus After Creation is "+NewFTStatus);
      
      aqTestCase.End();
    
     Project.Variables.Create_New_FactType.Next();
  
  }
}