module.exports = {
  // key is the name of the test 
  // anonymous function that sends it to the browser
  'Check Tutor Filter' : browser => {
    browser
      .url('https://austincodingacademy.com/tutors')
      browser.pause(1000)
      .click('select')
      .click('option[value="austinDowntown"]')
      .click('input[type="text"]')
      .click('[aria-label="Saturday, June 22, 2019"]')
    browser.expect.element('#tutor-8858762:not([hidden])').to.be.present;
    browser.expect.element('#tutor-10004148[hidden]').to.be.present;
    browser.end();
  }
};