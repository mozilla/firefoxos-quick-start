#Firefox OS Quick Start#

``This is just a basic outline for now``

###Intro###
*  It's easy to get started
*  This guide acts as both a quick tutorial and template to get up and running with your own FFOS app in 5 minutes




##App Structure##

###Packaged vs. Hosted Apps###
*  Firefox OS allows both ``packaged`` and ``hosted`` apps
	*  Packaged apps are essentially a ZIP file with CSS, JS, and HTML required to run the app
	*  A hosted apps is where the app files are hosted on a remote server (i.e. a website)
	*  Both require an app manifest
	*  When submitting to the app marketplace, you either upload the ZIP file or provide the web address of the hosted app
* For the purposes of getting a simple app started, we'll be using the hosted method (?)

###App Manifests###
*  Every Firefox OS app requires an `app.manifest` file at the root of the app
*  An app manifest provides important information about the app, like version, name, description, icon locations, which domain(s) an app may be installed from, and more
*  A sample app manifest would look like:

	#!javascript
	{
		manifest: "stuff here!"
	}

*  Manifests are usually completed after most of the app has been created.




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
