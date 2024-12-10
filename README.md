# Property Website Finder (and potentially other contact information)
This website finds the website domain of the property's owner.<br> 
For example, if the property in question was a condo, the website would find the domain of the condo management company.

## How to use the website
Input a json file with information about the property.<br> 
The json file must include an address key and valule as such: "addres"":"...".<br>
If there is multiple properties in the json file, keep each property as its own root.<br>
For example:<br>
{"city":"Los Angeles","country":"US","address":"Santa Monica Boulevard, 10534"}<br>
{"city":"Los Angeles","country":"US","address":"Santa Monica Boulevard, 10534"}<br>
<br>
After processing each property, the website will output a list of domains in a downloadable csv file.