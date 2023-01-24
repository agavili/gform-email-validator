# <img src="icon.png" width="40"> Google Forms Email Validator
Chrome extension that alerts users when they mistype emails in a Google Form by validating the email address’ deliverability using AbstractAPI’s Email Validation API

## Architecture 
1) DOM Button Object created upon Google Forms page landing
2) Button click triggers call to Email Validation API sending user email as parameter
3) Email Validation API returns whether or not email is reachable
4) Unsuccesful validation results in webpage alert

<img src="xtra-demo-images/Screen Shot 2023-01-23 at 6.28.40 PM.png" width='500'>

5) Successful validation results in change in button appearnce, signaling form submission

<img src='xtra-demo-images/Screen Shot 2023-01-23 at 6.29.09 PM.png' width='500'>

## Use-case/Motive
Google Forms only allows email format validation and doesn't check whether users enter invalid emails (ie. dummy emails, temporary emails, invalid domains). In other words, only text format is checked and not whether the text is a reachable email. And such validation only occurs on the form creator's end once they've gotten access to the responses spreadsheet, allowing for the possibilty of user responses not being accurately captured. This extension allows users to vet their responses **prior to submission**, ensuring that their responses are being recorded accurately. 


## ✨ Extension Demo ✨

![Alt Text](demo.gif)


## Notes
Extension is still in the process of getting added to the Chrome Webstore.

