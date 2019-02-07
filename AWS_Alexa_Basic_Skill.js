'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.7cefa846-27c1-45d1-9260-f6941516dad4';	
const SKILL_NAME = 'myfirstTamilalexaskill';
const HELP_MESSAGE = 'You can say tell me a cloud interview question?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const handlers = {
    'LaunchRequest': function () {
        this.emit('myfirstTamilalexaskill');
    },
    'myfirstTamilalexaskill': function () {
        this.response.speak('TamilCloudguy talks AWS concepts in Tamil language');
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
