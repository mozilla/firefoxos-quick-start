#Firefox OS Quick Start#

``This is just a basic outline for now; full paragraphs are works in progress.``

###Intro###
The Firefox OS platform gives web developers exactly what they've wanted for years:  a mobile environment dedicated to apps created with just HTML, CSS, and JavaScript.  This guide aims to get you up and running with an environment and basic app architecture so that you can create the next great app!


##App Structure##

###Packaged vs. Hosted Apps###
There are two types of Firefox OS apps:  `packaged` and `hosted`.  Packed apps are essentially a `zip` file containing all of of an apps assets:  HTML, CSS, JavaScript, images, manifest, etc.  Hosted apps are run from a server at a given domain, just like a standard website.  Both app types require a valid manifest.  When it comes time to list your app on the Firefox Marketplace, you will either upload your app as a zip file or provide the URL to where your hosted app lives.

For the purposes of this guide, you'll be creating a hosted app which will live at your `localhost` address.  Once your app is ready to list on the Firefox Marketplace, you can make the decision to bundle as a packed app or launch as a hosted app.


###App Manifests###
Every Firefox app requires an `app.manifest` file at the root of their app.  The `app.manifest` file provides important information about the app, like version, name, description, icon location, locale strings, domains the app can be installed from, and much more.  The simple manifest included within the app template looks like:

	[code js]

More specific details can be added as the project gets closer to completion, as is the case with most Firefox OS apps.  A basic manifest will do to get started.




##App Layout & Design##

*  Responsive design techniques are paramount when creating apps for desktop, tablet, and mobile devices
*  CSS media queries provide a means to adapt the layout to the device

	#!css
	/* example of css media queries */

*  For this project we'll be using Mozilla [mortar](https://github.com/mozilla/mortar) for layouts
*  Mortar was created by Mozilla and has been well-tested on Firefox OS

* This is the basic layout the app comes with:

	#!html/js/css
	// Code goes here

* (Explanation of code/why)




##Web APIs##
*  Web APIs are standards-based APIs for accesing and using device features 
*  Numerous [Web APIs](https://wiki.mozilla.org/WebAPI) are in a state of planned, in development, and completed
*  Use feature detection before using any Web API

	#!js
	// (feature detection example)

*  In this very basic template we'll change the heading color when the device goes online and offline:

	#!js 
	// (example based on this:  https://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html)

* (Explanation of code/why)




##WebRT APIs##
*  (No clue)




##Tools & Testing##
*  [Firefox OS Simulator](https://addons.mozilla.org/en-us/firefox/addon/firefox-os-simulator/) is the easiest way to get up and running with your app
*  After installed accessible at `Tools` -> `Web Developer` -> `Firefox OS Simulator` menu
*  Unit tests are extremely valuable when testing on different devices and builds (pitch Grunt?)




##Closing##
*  Go for it!  Create something awesome!
