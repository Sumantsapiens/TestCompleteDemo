function Login()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate(Project.Variables.URL_UAT);
  //Clicks the 'textboxUsername' control.
  Aliases.browser.pageSapiensDecision2.formF.textboxUsername.Click();
  //Sets the text Project.Variables.UserName in the 'textboxUsername' text editor.
  Aliases.browser.pageSapiensDecision2.formF.textboxUsername.SetText(Project.Variables.UserName);
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageSapiensDecision2.formF.passwordboxPassword.Click();
  //Sets the text Project.Variables.Password in the 'passwordboxPassword' text editor.
  Aliases.browser.pageSapiensDecision2.formF.passwordboxPassword.SetText(Project.Variables.Password);
  //Clicks the 'submitbuttonLogin' button.
  Aliases.browser.pageSapiensDecision2.formF.submitbuttonLogin.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSapiensDecision.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageSapiensDecision.panel object equals Project.Variables.UserName.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panel, "contentText", cmpEqual, Project.Variables.UserName);
}