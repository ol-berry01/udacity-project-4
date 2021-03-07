# udacity-project-4

Project 4: Natural Language Processing - Udacity Front End Developer Nano-Degree Project https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011

## Introduction

The goal of this project is to write a web app that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

### Build Tools

- HTML
- CSS
- JavaScript
- Node
- Express
- Webpack
- [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis)

## Basic Setup

### Prerequisites

Ensure that both Node and NPM are installed on your machine the following commands in the terminal.

```
node -v
npm -v
```

### Installation

1. Install the project dependencies

```
npm install
```

2. Signup with [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis) and get a key for the Sentiment Analysis API

3. Create a new file in the root of the project called `.env` and add the following replacing the \* with your unique API key

```
API_KEY=**************************
```

4. Build the project

```
npm run build-prod
```

5. Start the project server

```
npm run start
```

6. View the project at the following address `http://localhost:8081/`
