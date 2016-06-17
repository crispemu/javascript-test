var Browser = require('zombie');
var browser = new Browser();


browser.setCookie({name: 'MADISON_SESSION', domain: 'servo.medialets.com', value: '73cb3fa2b156b1538d967ce04ab9f9c2273dbe1c-admin=false&timestamp=1466191570735&user-email=adreports@comscore.com&user-name=comScore AdReports&user-id=10667'});


browser.fetch('https://servo.medialets.com/internal/users/11097/reporting/jobs/8794/download')//'')
.then(function(response) {
    console.log('Status code:', response.status);
    if (response.status === 200)
      return response.text();
  })
  .then(function(text) {
    console.log('Document:', text);
  })
  .catch(function(error) {
    console.log('Network error');
  });

