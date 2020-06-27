// @node_modules
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'erick.vicentin@globant.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'erick.vicentin@globant.com',
    subject: 'We are sorry that you leaving :(!',
    text: `Dear ${name}. It was a pleasure to have you with us, it is a pity that you leave. If there is anything we can improve please let us know. 
    
      See you soon, Vicer-devs.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
