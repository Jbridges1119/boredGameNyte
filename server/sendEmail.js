const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const DOMAIN = process.env.MAILGUN_DOMAIN;

const client = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_APIKEY,
});

const sendEmail = async ({ subject, message, name, email }) => {
  const data = {
    from: "BGN, <info@bgn.com>",
    to: "jdkopala@gmail.com, jbridges1119@gmail.com, kennymoon90@gmail.com",
    subject: subject,
    text: message,
  };

  try {
    await client.messages.create(DOMAIN, data);
    console.log("Email sent successfully!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = sendEmail;
