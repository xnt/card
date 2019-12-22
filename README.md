This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run

`npm start`

## Customize

Edit the contents of `$src/constants.js`... Admittedly I should've named it settings. Oh well.

- Change `imageUrl` to an image of you or your family
- Change the messages to fit your needs

There are a few other messages hard-coded in the components themselves, but that should be easy to figure out.

By default, the card is generated with 2 query string parameters:

1. `lang` is either `es` or `en` for _Spanish_ or _English_, respectively
2. `to` customizes the card's recipient

## Build

To generate a prod-style build that should be easier to deploy to your CDN or cloud provider or custom domain, do:

`npm run build`

And check the `build` folder. You can drag and drop this to netlify, for example

## License

[MIT](LICENSE.md)
