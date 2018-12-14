const watsappNotification = require('./../watsapp/index');
var assert = require('assert');
let correctParams = {};
let incorrectParams = {};
let context = '';
let status = false;
// Please change the parameters with valid values and parameters to run the test case
correctParams.env = {
  accountSid: 'ACcf19980c1b7d8bbc9816738989fbd1be',
  authToken: '5bd474895c2019134c8b5ebd532cff82'
};
// Please change the parameters with valid values and parameters to run the test case
correctParams.current = {
  to : 'whatsapp:+923315572435',
  from : 'whatsapp:+14155238886',
  message : 'Hello'
};

describe('watsapp notification with correct params', function () {
  it('watsapp notification with correct params', function (done) {
    watsappNotification.handler(correctParams, context, function testHandler ( error, res) {
      if ( res ) {
        console.log('res',res);
      } else {
        console.log('error',error);
      }
    });
  })
})
