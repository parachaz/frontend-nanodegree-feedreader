/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined', function () {
            for (var key in allFeeds) {
                //expect(allFeeds[key]['url']).toBeDefined();
                //expect(allFeeds[key]['url']).not.toBe('');
                expect(allFeeds[key]['url']).toBeTruthy();
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names are defined', function () {
            for (var key in allFeeds) {
                //expect(allFeeds[key]['url']).toBeDefined();
                //expect(allFeeds[key]['url']).not.toBe('');
                expect(allFeeds[key]['name']).toBeTruthy();
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden', function () {

            //get the class of body element
            var bodyClass = $('body').attr('class');
            //if the class is menu-hidden, menu is hidden
            expect(bodyClass).toBe('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu visibilty changes with click...', function () {
            //var $menuIcon = $('.menu-icon-link');
            var $iconList = $('.icon-list');
            var $body = $('body');

            /*fire the click event on the menu item*/
            $iconList.trigger('click');

            /*if the menu is displayed the class attribute sould be empty.*/
            expect($body.attr('class')).not.toBeTruthy();

            /*fire second click event to hide the menu*/
            $iconList.trigger('click');
            /*now if the menu is hidden the class should be equal to menu-hidden*/
            expect($body.attr('class')).toBe('menu-hidden');

        });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });

        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('atleast one entry is present', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });






    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function () {
        //get the current content of the feed
        var initialFeedContent ;
        beforeEach(function (done) {
            /*Get the content of original feed.*/
            initialFeedContent = $('.feed').html();
            /*load a new feed*/
            loadFeed(1, done);

        });
        /*restore the original feed after testing the content change.*/
        afterEach(function (done) {
            loadFeed(0, done);
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        it('changes content with new feed', function () {
            /*Compare the feed content. It should not be same as the intial contnent*/
           expect($('.feed').html()).not.toBe(initialFeedContent);
            
        });
    });

}());
