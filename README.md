# React & Node.js Survey Tool

## Demo

(Coming soon ....)

## Setup

To install the required dependencies, run the command:

```
npm run setup
```

## Usage flow

*   User logs in / signs up via Google OAuth
*   User buy credits via Stripe
*   User spends credits to create a new Survey
*   User provides list of emails to send survey to
*   Survey is sent by email to surveyees
*   Surveyees provide feedback by clicking on link in email
*   User can see report of every sent survey

## Techs

*   Database: MongoDB
*   API: Express server
*   Authentication: PassportJS
*   Payment: Stripe
*   Frontend app: React + Redux
*   Email provider: Sendgrid

## Tech Features

*   Authentication via Google OAuth
*   Sessions with Passport
*   Securing env variables (API keys, ...)
*   Encoding & deserializing users
*   Enabling Cookies
*   Handle payments
*   Proxy for React app
*   Handle webhooks with tunneling in dev
*   Thunk middleware for redux
