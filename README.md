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

## Issues encountered
1. Issue: The API avaialbe from Hacker News while robust is a bit clunky to use at times. For example, if we were to request all the comments for a certain story, the API will return us the ID for each comment with the request for a story.  After which we need to make a request fro each comment item.
- Solution: It may be possible to alleivate the numerous round trips to the Hacker News API by using [Algoia's Search API](https://hn.algolia.com/api). They allowed for more custom requests were we can specify all comments for a certain story.


## How to run:
Download or Clone the Repository.
Run `npm install` to install the project dependencies 

cd into project directory and use `npm start` to start the app.
App can be seen at: localhost:3000
