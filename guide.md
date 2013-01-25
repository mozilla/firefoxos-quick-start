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
* For the purposes of getting a simple app started, we'll be using the ZIP file (?)

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

