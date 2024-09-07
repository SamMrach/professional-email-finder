# Email Finder
 Most reliable & accurate npm package for finding professional emails using the Pro Email Finder API on RapidAPI. This package makes it easy to integrate the API into your projects.


## Installation

Use the package manager  to install email-finder-sam.  
Get your api key from : 
https://rapidapi.com/merrachsamir2000-VROpiUqxyqE/api/pro-email-finder
  

```bash
npm install pro-email-finder
```
## Usage
```javascript
const ProEmailFinder = require('pro-email-finder');

// instantiate class with your key
const emailFinder = new ProEmailFinder('your-api-key'); // Replace with your actual API key

// find an email
emailFinder.findEmail('Jensen', 'Huang', 'nvidia.com')
  .then(emailInfo => console.log(emailInfo))
  .catch(error => console.error(error));

// return found email
```

## Live Example
Try our API from :
https://rapidapi.com/merrachsamir2000-VROpiUqxyqE/api/pro-email-finder



## Features

Clean Your Email Lists: Maintain pristine contact databases by removing invalid or outdated email addresses. </br>
Boost Email Deliverability: Ensure that marketing and outreach emails land directly in the recipient’s inbox.</br>
LinkedIn Prospecting: Quickly find professional emails associated with LinkedIn profiles for targeted networking and lead generation.

