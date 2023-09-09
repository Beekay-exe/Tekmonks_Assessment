# TekMonks Task Time.com latest stories API


This is a simple API that scrapes the latest stories from [Time.com](https://time.com) using Node.js with Express, Axios, and Cheerio.

## Usage

1. Clone the repository:

```
git clone https://github.com/Beekay-exe/Tekmonks_task
```
## Install Dependencies

```
npm install
yarn install
```

## Start the server

```
yarn dev
```
The API will be accessible at http://localhost:3000.

## Endpoints

GET /getTimeStories
Returns the latest 6 stories from Time.com in JSON format.

```
[
  {
    "title": "Story Title 1",
    "url": "https://time.com/story1"
  },
  {
    "title": "Story Title 2",
    "url": "https://time.com/story2"
  },
  // ...
]
```

## Dependencies

<ul><li>Express: A fast, unopinionated, minimalist web framework for Node.js.</li>
<li>Axios: Promise-based HTTP client for the browser and Node.js.</li>
<li>Cheerio: Fast, flexible, and lean implementation of core jQuery for the server.</li></ul>
