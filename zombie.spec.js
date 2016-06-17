var Browser = require("zombie");
var url = "http://cube-report-0.us-east-1d.test.proximic.com:21000/public/ui/login";
//var url = "http://adops.office.comscore.com/adopsmanagement/aop.aspx";
var browser = new Browser();

describe("testing with zombie", function() {
	browser.debug();
    it("should have defined headless browser", function(next){
        expect(typeof browser != "undefined").toBe(true);
        expect(browser instanceof Browser).toBe(true);
        next();
    });
/*
    it("should visit the site and see the login form", function(next) {
        browser.visit(url, function(err) {
            expect(browser.success).toBe(true);
            expect(browser.query("input[value='username']")).toBeDefined();
			expect(browser.query("input[value='password']")).toBeDefined();
            next();
        })
    });*/
	
    it("should visit the site and see the login form", function(next) {
        browser.visit(url, function(err) {
            expect(browser.success).toBe(true);
            expect(browser.query("input[value='password']")).toBeDefined();
            next();
        })
    });
	
    it("should be able to login with correct credentials", function(next) {
        browser
        .fill('input[name="username"]', "toni")
        .fill('input[name="password"]', "password")
        .pressButton('input[value="Log in"]', function(res) {
			//console.log(browser.html("body"));	
            next();
        });
    });
	
	browser.fetch('http://cube-report-0.us-east-1d.test.proximic.com:21000/public/ui/api/agents.html')
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
		/*
	browser.visit('/api/agents.html', function() {
		console.log("HREFFFF:" + browser.location.href);
		//console.log(browser.html("body"));
		//expect(browser.html("body")).toContain("agents");
	});
/*
    it("should be able to login with correct credentials", function(next) {

		//browser.assert.text('title', 'Medialets Servo');
        /*browser
		.assert.text('title', 'Medialets Servo')
        .fill('input[name="username"]', "Adreports@comscore.com")
        .fill('input[name="password"]', "Adreports123")
		/*.fill('input[name="unameTbx"]', "capena")
        .fill('input[name="pwdTbx"]', "jordan34")*/
        /*.pressButton('input[name="LoginBtn"]', function(res) {
            expect(browser.html("body")).toContain("Insanely fast, headless full-stack testing using Node.js");
            expect(browser.query("input[value='Login']")).toBeUndefined();
            next();
        });*/
    //});



});