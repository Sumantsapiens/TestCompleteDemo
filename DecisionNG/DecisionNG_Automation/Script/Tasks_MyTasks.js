function Tasks_MyTasks()
{

  var ItemCount;
  var flag = 0;
  var TaskName = Project.Variables.TaskName.Value("TaskName");
  var CommunityName = Project.Variables.TaskName.Value("CommunityName");
  hasNext = true;
  
  do
  {     
    //Row Counts in one page
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
      
      var HighlightedTaskName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]/div/dcn-link-label/div/div/a");
      var HighlightedCommunityName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+ j + "]/td[2]");
    
      //If the Task Name matches 
      if(HighlightedTaskName.textContent == TaskName )
      {
          //Community Name also Matches click 
          if(HighlightedCommunityName.textContent == CommunityName)
          {
             HighlightedTaskName.click();
             flag =1;
            // Log.Message("Pass");
          }
                    
      }         
    }
     if(flag == 1)
      {
        
        break;
      }
      Delay(1000);
      var Next_Page_Button = Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']");
      
      if(Next_Page_Button.getAttribute("class") == "ui-paginator-next ui-paginator-element ui-state-default ui-corner-all")
      {
      Next_Page_Button.click();          
      }
      
      else
      {
        hasNext = false;
      }
        
    }while (hasNext==true)

}
