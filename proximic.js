var Browser = require('zombie');
var browser = new Browser();


browser.setCookie({name: 'PLAY_SESSION', domain: 'cube-report-0.us-east-1d.test.proximic.com', value: '1ff60234e399f09fb7da4433a19ac8a3204c3657-authentication=dummy-f5ae8399e076c8fcc3bbaa5aac0d191da5424bf74378313aeaf72976b841da55'});


browser.fetch('http://cube-report-0.us-east-1d.test.proximic.com:21000/public/ui/api/agents.html')//'')
.then(function(response) {
    //console.log('Status code:', response.status);
    if (response.status === 200)
      return response.text();
  })
  .then(function(text) {
    console.log('Document:', text);
  })
  .catch(function(error) {
    console.log('Network error');
  });

