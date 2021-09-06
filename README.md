# GhostlyConsent.js

## About
GhostlyConsent.js is a lightweight customizable open source Vanilla JavaScript cookie consent that does not need any thid-party components to work.

## Examples 
https://ghostly.marcosraudkett.com/examples/modal.html

## Installation
```
git clone https://github.com/marcosraudkett/GhostlyConsent.js.git
```
Adding it to your project:
```html
<!-- GhostlyConsent.js -->
<link rel="stylesheet" href="path/to/dist/GhostlyConsent.css">
<script src="path/to/dist/GhostlyConsent.js"></script>
```

## Usage
Basic usage:
```js
// Options
// if you'd like to send feedback to developers then set register: true (default: false)
// callback option sends accepted/allowed files to specified url as POST request with application/json header for tracking (optional)
var options = {
    elements: {
        consentWrapper: '#gh-cookie-consent'
    },
    register: false,
    callback: 'https://example.com/callback'
};

// files you wish to load after accepted 
// if array is used inside "files" then set scope: permissions and use disallowed in there to set rule for all files 
// if disallowed key is not set then the default is set to true
// if type is not set then it will load the file using ajax

// ---///--- name, title, file & type (css/js) keys are REQUIRED! ---///---
var files = [
{
    title: 'Google Fonts',
    name: 'font',
    file: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',
    type: 'css',
    ajax: false,
    disallowed: false
},
analytics = [
        {
        scope: 'meta',
        title: 'Google Analytics'
        },
        {
        scope: 'permissions',
        disallowed: false
        },
        {
        name: 'analytics',
        file: 'https://www.googletagmanager.com/gtag/js?id=UA-44404621-1',
        type: 'js'
        },
        {
        name: 'analytics',
        file: '../vendor/Google-Analytics.js', // this file has the rest of the Google Analytics code
        type: 'js'
        }
    ],
];

// initialize
ghostlyConsent.init(options, files);

// calls function statusChange(); after consents state is changed
ghostlyConsent.onStateChange('status', statusChange);

function statusChange(event) {
    // get the whole event
    console.log(event);

    // do something if consent is accepted
    if(event.value) {
        // do something if consent is accepted
        // alternatively you can use this to load your own files
        // or do something else..
        console.log("Consent was accepted");
    } else {
        // do something if consent is rejected
        console.log("Consent was rejected");
    }
}
```

## Options
Here's everything you can setup: (none of the options are required)
<table>
  <thead>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
    <th>Required</th>
  </thead>
  <tbody>
    <!-- elements -->
    <tr>
      <td>elements</td>
      <td>Cookie elements</td>
      <td>array</td>
      <td>array (check below)</td>
      <td>No</td>
    </tr>
    <!-- texts -->
    <tr>
      <td>text</td>
      <td>Button texts</td>
      <td>array</td>
      <td>array (check below)</td>
      <td>No</td>
    </tr>
    <!-- name -->
    <tr>
      <td>name</td>
      <td>Name of the cookie</td>
      <td>string</td>
      <td>_ghostly_consent</td>
      <td>No</td>
    </tr>
    <!-- domain -->
    <tr>
      <td>domain</td>
      <td>Your domain</td>
      <td>string</td>
      <td>.yourdomain.com</td>
      <td>No</td>
    </tr>
    <!-- callback -->
    <tr>
      <td>callback</td>
      <td>Callback url</td>
      <td>string</td>
      <td>null</td>
      <td>No</td>
    </tr>
    <!-- length -->
    <tr>
      <td>length</td>
      <td>Days until expiration</td>
      <td>int</td>
      <td>365</td>
      <td>No</td>
    </tr>
    <!-- debug -->
    <tr>
      <td>debug</td>
      <td>Shows errors as alerts();</td>
      <td>bool</td>
      <td>false</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

Options.elements:
<table>
  <thead>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
    <th>Required</th>
  </thead>
  <tbody>
    <!-- consentWrapper -->
    <tr>
      <td>elements.consentWrapper</td>
      <td>The main container</td>
      <td>string</td>
      <td>#gh-cookie-consent</td>
      <td>No</td>
    </tr>
    <!-- personalizeWrapper -->
    <tr>
      <td>elements.personalizeWrapper</td>
      <td>Personalization container</td>
      <td>string</td>
      <td>#gh-cookie-personalization</td>
      <td>No</td>
    </tr>
    <!-- modalWrapper -->
    <tr>
      <td>elements.modalWrapper</td>
      <td>Modal container</td>
      <td>string</td>
      <td>#gh-modal</td>
      <td>No</td>
    </tr>
    <!-- buttonsPersonalize -->
    <tr>
      <td>elements.buttonsPersonalize</td>
      <td>Button to activate personalization container</td>
      <td>string</td>
      <td>#gh-cookie-personalize</td>
      <td>No</td>
    </tr>
    <!-- buttonsEnable -->
    <tr>
      <td>elements.buttonsEnable</td>
      <td>Accept cookies button</td>
      <td>string</td>
      <td>#gh-cookie-enable</td>
      <td>No</td>
    </tr>
    <!-- buttonsDecline -->
    <tr>
      <td>elements.buttonsDecline</td>
      <td>Decline cookies button</td>
      <td>string</td>
      <td>#gh-cookie-decline</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

Options.text:
<table>
  <thead>
    <th>Option</th>
    <th>Type</th>
    <th>Default</th>
    <th>Required</th>
  </thead>
  <tbody>
    <!-- acceptSelected -->
    <tr>
      <td>acceptSelected</td>
      <td>string</td>
      <td>Accept selected</td>
      <td>No</td>
    </tr>
    <!-- acceptAll -->
    <tr>
      <td>acceptAll</td>
      <td>string</td>
      <td>Accept all</td>
      <td>No</td>
    </tr>
    <!-- declineAll -->
    <tr>
      <td>declineAll</td>
      <td>string</td>
      <td>Decline all</td>
      <td>No</td>
    </tr>
    <!-- personalize -->
    <tr>
      <td>personalize</td>
      <td>string</td>
      <td>Personalize</td>
      <td>No</td>
    </tr>
    <!-- choose -->
    <tr>
      <td>choose</td>
      <td>string</td>
      <td>Choose the cookies you wish to accept:</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Methods
calls "myFunction" on status change.
```js
ghostlyConsent.onStateChange('status', myFunction);

// example function
function myFunction(event) {
    // get the whole event
    console.log(event);

    // do something if consent is accepted
    if(event.value) {
        // do something if consent is accepted
        // alternatively you can use this to load your own files
        // or do something else..
        console.log("Consent was accepted");
    } else {
        // do something if consent is rejected
        console.log("Consent was rejected");
    }
}
```
Different state changes:
<table>
  <thead>
    <th>State</th>
    <th>Description</th>
  </thead>
  <tbody>
    <!-- status -->
    <tr>
      <td>status</td>
      <td>When cookie status is changed</td>
    </tr>
    <!-- load -->
    <tr>
      <td>load</td>
      <td>After Ghostly is loaded</td>
    </tr>
    <!-- personalize -->
    <tr>
      <td>personalize</td>
      <td>When personalization is triggered</td>
    </tr>
    <!-- personalize -->
    <tr>
      <td>personalize</td>
      <td>string</td>
    </tr>
    <!-- appendFile -->
    <tr>
      <td>appendFile</td>
      <td>When a file has been appended to document</td>
    </tr>
    <!-- getFile -->
    <tr>
      <td>getFile</td>
      <td>When a file has been loaded</td>
    </tr>
    <!-- filesLoaded -->
    <tr>
      <td>filesLoaded</td>
      <td>When all files have been triggered</td>
    </tr>
  </tbody>
</table>

## Contributing
Feel free to help this project or if you've found a bug then feel free to visit [the issues page](https://github.com/marcosraudkett/GhostlyConsent.js/issues).