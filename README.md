# Hacker News Clone

A React & react-router-powered clone of [Hacker News](https://news.ycombinator.com/news) using its [Firebase API](https://github.com/HackerNews/API).

You can find a working demo at [here](https://ddd-37.github.io/hackernews)

## Requirements
node/npm

## Libraries/packages used
- React
- Moment
- Axios
- React-html-parser
- node-sass
- React-router-dom

## Features
- Supports display of all item types: stories, jobs, comments, user profiles

## To Dos
1. Enable caching of data from stories to help wtih quicker navigation and remove redundant network requests
2. Enable marker/style changes to indicate previously red articles
3. Enhance UI for mobile to improve experience

## Issues OUTSTANDING (know)
1. Issue: The API available from Hacker News while robust is a bit clunky to use at times. For example, if we were to request all the comments for a certain story, the API will return us the ID for each comment with the request for a story.  After which we need to make a request for each comment item from the API.
- Solution: It may be possible to alleivate the numerous round trips to the Hacker News API by using [Algoia's Search API](https://hn.algolia.com/api). Algoia allow's for more custom requests were we can specify all comments for a certain story.
- Edit (2.26.20) - Getting the comments from Algoia only gives us the most recent comments, as of now there is now way to find comments with nested chilrdren without making an excessive ammount of requests to the HN Api, will need to diable viewing each Story's comment s for now

## Issues SOLVED
1. Issue: Using react-router with gh-pages was giving some odd behavoir.  After deploying to github pages I found my project's index route "/" was returning a 404 error, while on my local copy everything worked just fine. I was also losing the base url of hackernews/.
- Solution: After going around in circles on this for an hour, I found a prop I was able to customize in `BrowserRouter` that allowed me apply a custom base Url for my project.  After defining this prop to be 'hackernews', I was able to alleviate the 404 error for my "/" route as well as retain the base URL of 'hackernews' as I navigate around my local and github pages version of the site.


## How to run:
Download or Clone the Repository.
Run `npm install` to install the project dependencies 

cd into project directory and use `npm start` to start the app.
App can be seen at: localhost:3000
