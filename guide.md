#Firefox OS Quick Start#

``This is just a basic outline for now; full paragraphs are works in progress.``

The [Firefox OS](http://www.mozilla.org/en-US/firefoxos/) platform gives web developers exactly what they've wanted for years:  a mobile environment dedicated to apps created with just HTML, CSS, and JavaScript.  This guide aims to get you up and running with an environment and basic app architecture so that you can create the next great app!


##App Structure##

###Packaged vs. Hosted Apps###
There are two types of Firefox OS apps:  `packaged` and `hosted`.  Packed apps are essentially a `zip` file containing all of of an apps assets:  HTML, CSS, JavaScript, images, manifest, etc.  Hosted apps are run from a server at a given domain, just like a standard website.  Both app types require a valid manifest.  When it comes time to list your app on the Firefox Marketplace, you will either upload your app as a zip file or provide the URL to where your hosted app lives.

For the purposes of this guide, you'll be creating a hosted app which will live at your `localhost` address.  Once your app is ready to list on the Firefox Marketplace, you can make the decision to bundle as a packed app or launch as a hosted app.


###App Manifests###
Every Firefox app requires an [`app.manifest`](https://marketplace-dev.allizom.org/developers/docs/manifests) file at the app root.  The `app.manifest` file provides important information about the app, like version, name, description, icon location, locale strings, domains the app can be installed from, and much more.  The simple manifest included within the app template looks like:

	[code js; INSERT ME WHEN THE APP IS DONE]

More specific details can be added as the project gets closer to completion, as is the case with most Firefox OS apps.  A basic manifest will do to get started. 


##App Layout & Design##
Responsive design has become increasingly important as more screen resolutions become standard on different devices.  Even if your app targets only Firefox OS, it's important to remember that Firefox OS can be installed on a [variety of devices](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS/Firefox_OS_build_prerequisites) which use different screen resolutions.  [CSS media queries](https://developer.mozilla.org/en-US/docs/CSS/Media_queries) provide a means to adapt layout to device:

	/* The following are examples of different CSS media queries */

	/* Basic desktop/screen width sniff */
	@media only screen and (min-width : 1224px) {
		/* styles */
	}

	/* Traditional iPhone width */
	@media
		only screen and (-webkit-min-device-pixel-ratio : 1.5),
		only screen and (min-device-pixel-ratio : 1.5) {
		/* styles */
	}

	/* Device settings at different orientations */
	@media screen and (orientation:portrait) {
		/* styles */
	}
	@media screen and (orientation:landscape) {
		/* styles */
	}


There are many JavaScript and CSS frameworks available to aid in responsive design; one of those awesome frameworks is Mozilla's [mortar](https://github.com/mozilla/mortar).  This quick start guide fits you with mortar's basic layout template:
	
	&lt;!DOCTYPE html&gt;
	&lt;html&gt;
	  &lt;head&gt;
	    &lt;meta charset="utf-8"&gt;

	    &lt;title&gt;My App&lt;/title&gt;
	    &lt;meta name="description" content=""&gt;
	    &lt;meta name="viewport" content="width=device-width"&gt;

	    &lt;!-- Place favicon.ico in the root directory --&gt;

	    &lt;link rel="stylesheet" href="css/app.css"&gt;
	  &lt;/head&gt;
	  &lt;body&gt;
	    &lt;!-- Use this installation button to install locally without going
	         through the marketpace (see app.js) --&gt;
	    &lt;button id="install-btn"&gt;Install&lt;/button&gt;    

	    &lt;!-- Write your application here --&gt;

	    
	    
	    &lt;!-- Using require.js, a module system for javascript, include the
	         js files. This loads "main.js", which in turn can load other
	         files, all handled by require.js:
	         http://requirejs.org/docs/api.html#jsfiles --&gt;
	    &lt;script type="text/javascript" data-main="js/init.js" src="js/lib/require.js"&gt;&lt;/script&gt;
	  &lt;/body&gt;
	&lt;/html&gt;


Feel free to modify the styles and structure set forth by mortar.


##Web APIs##
JavaScript APIs are being created and enhanced as quickly as devices are.  Mozilla's [Web API](https://wiki.mozilla.org/WebAPI) effort brings dozens of standard mobile features to JavaScript APIs.  A list of device support and status is available on the [Web APIs](https://wiki.mozilla.org/WebAPI) page.  Of course JavaScript feature detection is still the best practice:

	// If this device supports the vibrate API...
	if("vibrate" in navigator) {
		// ... vibrate for a second
		navigator.vibrate(1000);
	}

In this very basic app template we'll modify the display style of a `DIV` based on changes in the device's battery state:

	(function() {
      var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery,
          indicator, indicatorPercentage;

      if(battery) {
        indicator = document.getElementById("indicator"),
        indicatorPercentage = document.getElementById("indicator-percentage");

        // Set listeners for changes
        battery.addEventListener("chargingchange", updateBattery);
        battery.addEventListener("levelchange", updateBattery);

        // Update immediately
        updateBattery();
      }

      function updateBattery() {
        // Update percentage width and text
        var level = (battery.level * 100) + "%";
        indicatorPercentage.style.width = level;
        indicatorPercentage.innerHTML = level;
        // Update charging status
        indicator.className = battery.charging ? "charging" : "";
      }
    })();

In the code sample above, once you confirm that the [Battery API](https://developer.mozilla.org/en-US/docs/DOM/window.navigator.battery) is supported, you can add event listeners for `chargingchange` and `levelchange` to update the element's display.

Check the [Web APIs](https://wiki.mozilla.org/WebAPI) page frequently to keep up to date with device API statuses!

##WebRT APIs##
*  (No clue)




##Tools & Testing##
Testing is incredibly important when supporting mobile devices.  There are many options for testing FirefoxOS apps:

*  Installing and using the [Firefox OS Simulator](https://addons.mozilla.org/en-us/firefox/addon/firefox-os-simulator/) is the easiest way to get up and running with your app.  After installed the simulator is accessible via the `Tools` -> `Web Developer` -> `Firefox OS Simulator` menu.
*  Unit tests are extremely valuable when testing on different devices and builds.  jQuery's  [QUnit](http://qunitjs.com/) is a popular client-side testing utility.


##Make Something Great!##
After you've created your awesome open web app, list it on the [Firefox Marketplace](https://marketplace.firefox.com/); doing so will make your app available to millions of users around the world!