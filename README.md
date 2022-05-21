
# Contest Dashboard

A web application to keep track of online contests

## API Reference

#### Get user info

```http
  GET /cf/info/:handles
```

| Authorization | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your codeforces API key |
| `api_secret` | `string` | **Required**. Your codeforces API secret |


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `handles`      | `string` | **Required**. Semicolon-separated list of handles
 

#### Get user rating

```http
  GET /cf/rating/:handle
```

| Authorization | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your codeforces API key |
| `api_secret` | `string` | **Required**. Your codeforces API secret |


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `handle`      | `string` | **Required**. individual user handle
 
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Appendix

Any additional information goes here


## Authors

- [@samnoon1971](https://www.github.com/samnoon1971)


## 🚀 About Me
I'm a full stack developer... I am also a problem solver who loves math and puzzles.


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Screenshots

Will be added soon.

## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Documentation

Will be added soon.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Installation

Install contest-dashboard with npm

```bash
  npm install contest-dashboard
  cd contest-dashboard
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/samnoon1971/Contest-Dashboard
```

Go to the project directory

```bash
  cd Contest-Dashboard
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility


## Feedback

If you have any feedback, please reach out to us at fake@fake.com


## Support

For support, email samnoonabrar@gmail.com


## Roadmap

- Additional browser support

- Add more integrations




## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samnoon/)

