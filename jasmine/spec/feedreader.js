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


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined', function () {
            allFeeds.forEach(function (key) {
                expect(key['url']).toBeTruthy();
            });
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names are defined', function () {
            allFeeds.forEach(function (key) {
                expect(key['name']).toBeTruthy();
            });

        });
    });


    describe('The menu', function () {

        /* Test that ensures the menu element is
         * hidden by default. 
         */
        it('menu is hidden', function () {

            //get the class of body element
            var bodyClass = $('body').attr('class');
            //if the class is menu-hidden, menu is hidden
            expect(bodyClass).toBe('menu-hidden');
        });

        /* Test that the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
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

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });

        });
        /* Test that there is at least  single .entry element within the .feed container,
         * when the loadFeed function is called and completes its work
         * Use Jasmine's beforeEach and asynchronous done() function.
         */
        it('atleast one entry is present', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });






    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function () {
        //variables to hold feeds' contents. 
        var firstFeedContent,
                secondFeedConent;

        beforeEach(function (done) {
            /* To ensure that a feed is present, we will first
             * load a new feed, and save its content to 
             * firstFeedContent variable. From the call back
             * method will we load another feed and save its cntent
             * to secondFeedContent variabl and call the done() 
             * method. 
             * We will then compare the two variables to verify
             * that the contents do change when a new feed is loaded.
             */
            loadFeed(1, function () {
                firstFeedContent = $('.feed').html();
                loadFeed(2, function () {
                    secondFeedContent = $('.feed').html();
                    done();
                });

            });

        });
        /*restore the original feed after testing the content change.*/
        afterEach(function (done) {
            loadFeed(0, done);
        });

        /* Test to ensure theat the contect is changed when a new feed is loaded.
         */

        it('changes content with new feed', function () {
            /*Compare the feed contents. Content for second feed shouldn't be 
             * same as the content of first feed*/
            expect(secondFeedContent).not.toBe(firstFeedContent);

        });
    });

}());
