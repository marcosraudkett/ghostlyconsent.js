const options = {
    // cookie name
    name: 'index',
    // your domain
    domain: '.' + window.location.host,
    // load files over ajax (note that this will not append files to the document)
    ajax: false,
    // url to call after status change
    callback: '',
    // if you use a cookie then you can define the days its active
    length: 365,
    // if you wish to use localStorage instead of a cookie
    storage: false,
    debug: false,
    isModal: false,
    // this will destroy the cookie consent after the status changes or if the cookie exists
    destroy: false,
    // change this to your template directory
    templateLocation: '/src/views/default.html', 
    // use template (boolean)
    useTemplate: true,
    // elements
    elements: {
        consentWrapper: '#gh-cookie-consent',
        personalizeWrapper: '#gh-cookie-personalization',
        modalWrapper: '#gh-modal',
        buttonsPersonalize: '#gh-cookie-personalize',
        buttonsEnable: '#gh-cookie-enable',
        buttonsDecline: '#gh-cookie-decline',
        buttonsClose: '.gh-close'
    },
    // texts (not required but a way to dynamically change them)
    text: {
        acceptSelected: 'Accept selected',
        acceptAll: 'Accept all',
        declineAll: 'Decline all',
        personalize: 'Personalize',
        choose: 'Choose the cookies you wish to accept:',
    }
};

// your files
const files = [];

// initialize ghostlyConsent
ghostlyConsent.init(options, files);