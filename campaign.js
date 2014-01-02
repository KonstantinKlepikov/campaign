'use strict';

var path = require('path');
var emailService = require('./src/emailService.js');
var consoleClient = require('./src/client/consoleClient.js');
var mandrillClient = require('./src/client/mandrillClient.js');
var nodemailerClient = require('./src/client/nodemailerClient.js');

function api (options) {
    if (!options.client) {
        options.client = mandrillClient(options);
    }
    if (!options.layout) {
        options.layout = api.defaultLayout;
    }

    return emailService(options);
}

api.defaultLayout = path.join(__dirname, 'templates/layout.mu');
api.clients = {
    console: consoleClient,
    mandrill: mandrillClient,
    nodemailer: nodemailerClient
};

module.exports = api;
