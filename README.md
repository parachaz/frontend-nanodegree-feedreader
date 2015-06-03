Udacity Nanodegree Project 6 

What is it?
-----------
Udacity Nanodegree Project 6 requires to use Jasmine framework to test an
 existing a web-based application that reads RSS feeds.


Author:
-------
Zaheer Paracha



Project Solution:
------------------
A functional web-based application and a started Jasmine spec file were provided.
The task for this project was to implement several new test specs.
Following new test suites/tests were implemented for this project. 
1. Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Wrote a new test suite named "The menu".
4. Wrote a test that ensures the menu element is hidden by default. 
5. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. 
6. Wrote a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. This test was implemented using Jasmine's beforeEach and asynchronous done() functions.
7. Wrote a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. 
   This test was implemented using Jasmine's beforeEach and asynchronous done() functions.

How to run the application:
---------------------------
To run the application, open index.html file in a web browser. 
Results from Jasime test suites will be displayed at the bottom half of the browser window.

References:
-----------
Following resources as reference while developing this project
1. http://jasmine.github.io/
2. stackoverflow.com

-------------------------------------------------------------------------------
Copyright (C) 2015 zParacha.com.
