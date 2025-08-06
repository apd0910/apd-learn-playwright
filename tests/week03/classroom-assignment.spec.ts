/* Classroom Activity
--------------------
SalesForce :
------------
Steps :
1. Go to https://login.salesforce.com/?locale=in 
2. And login using credentials. [username : ravindran.ramdas@testleaf.com, password : RaviSalesTest]
3. Click on the "+" icon (6th icon from top right corner)
4. Choose and click "New Task" from dropdown.
5. Now get the xpath for "Subject" label web element.

Hint : New Task  younger cousin to elder */

//label[text()='Due Date']/preceding::label[text()='Subject']



 
/* Myntra: Checkbox
----------------
-> Go to mynthra.com choose "MEN" from the tab available.
-> Click the any product(ex:T-Shirts)
-> Select the check box of "Roadster" under the brands

Myntra: Checkbox elder sibling to younger sibling */

//input[@value="WOOSTRO"]/ancestor::li/following-sibling::li//input[@value='Roadster']