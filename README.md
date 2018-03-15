# React & Node.js Survey Tool

## Demo

![demo](https://user-images.githubusercontent.com/1861212/37477584-506b9e98-2878-11e8-9e8e-b7c3d2cc1551.gif)

Wanna test it ? This is [right here](https://serene-peak-17459.herokuapp.com/).

## Setup

### Installation

To install the required dependencies, run the command:

```
npm run setup
```

### Google Authentication

To enable Google Authentication, you will need to create an Google Plus API on [Google developers Console](https://console.developers.google.com/apis/dashboard).

This will generate the Client ID and Client Secret that you will need to provide in your environment variables list.

Do not forget to provide the following information:

*   Allowed JavaScript Origins: `http://localhost:5000`
*   Authorized redirection URI: `http://localhost:5000/auth/google/callback` and `http://localhost:3000/auth/google/callback`

### Stripe

To enable free test payments, you can create an account for free on [Stripe](https://dashboard.stripe.com).

On your dashboard, you will get a secret and a public key you will have to provide in your environment variables list.

#### TIP

To test payments, simply provide the following information:

*   Email: Any email will be fine
*   Card number: 4242 4242 4242 4242
*   Expiration date: Any date in the future
*   Security code: Any 3-digit code

More information on [Stripe Documentation Page](https://stripe.com/docs/testing#cards)

### Sendgrid

To send surveys to a recipients list, you will have to create an accoutn for free on [Sendgrid](https://app.sendgrid.com/)

First, go to Settings -> API Keys and create a new API Key. You will have to provide it in your environment variables list.

then go to Settings -> Mail Settings. From there:

*   Activate the `Event Notification` section
*   Provide in `HTTP POST URL` the value `[url]/api/surveys/webhooks`, where `url` is the URL ending with `@localtunnel.me` you'll see in your terminal when you run `npm run dev`.
*   In the `Select Actions`, only select `Clicked` checkbox
*   Validate your changes

### Environment variables

To run the the project in dev environment, you will have to create a `config/dev.js` file and use the same keys as in `config/prod.js`, with the following values:

*   googleClientID: Provided in your Google developers console
*   googleClientSecret: Provided in your Google developers console
*   mongoURI: Mongo DB access. For example, you can use a free DB on [mLab](https://mlab.com). The URI will have the following pattern: `mongodb://username:password@xxxxxxxx.mlab.com:33333/my_database`
*   cookieKey: A passphrase of your choice to encode/deserialize data
*   stripePublishableKey: Public key provided on your Stripe dashboard
*   stripeSecretKey: Secret key provided on your Stripe dashboard
*   sendGridKey: API key provided on your Sendgrid dashboard
*   redirectDomain: `http://localhost:3000`

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
*   Form validation and preview
