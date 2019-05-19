# visand-prous

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=popout-square&logo=javascript&logoColor=yellow)


**visand-prous** is an online **T-Shirt shop** which allows users to search, add items to their shopping cart, create order and pay for their orders successfully.

## Getting Started
To setup **visand**, the following should be installed on your machine.

- [Node.js](https://nodejs.org/en/download/current/) 6 and above
- [visand](https://github.com/chukwuemekachm/visand)
- [Git](https://git-scm.com/downloads)

You also need to setup
- [Facebook App](https://developers.facebook.com/)

If you don't have these already, click on any of them to install it on your local machine.

### Installation

If you have all the prerequisites you can use the steps below to setup **visand** locally.

##### Clone visand-prous
- Open your terminal and `cd` to the directory where you will like to download **visand**, then run
```sh
git clone https://github.com/chukwuemekachm/visand-prous.git
```
- Change to the **visand** directory
```sh
cd visand
```

##### Create and update the env variables
- Run the command below to create a `.env` file from the sample provided
```bash
touch .env
cp .env.sample .env
```
- Now update the environmental variables with the variables you want to use for your **visand-prous** installation.
```
*Note* Ensure that you've created all the required accounts for the sandboxes on visand above such as Paypal, SendGrid and Facebook.
Update .env with the sandbox keys
```

##### Install Dependencies
- Run the command below to install `node` dependencies
```bash
npm install
```

### Usage
- To start up your newly installed **visand-prous** run
```sh
npm run start
```

## Built With
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [styled-components](https://www.styled-components.com/)
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

## Author

* **Chima Chukwuemeka** [@chukwuemekachm](https://github.com/chukwuemekachm)


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/chukwuemekachm/visand/blob/develop/LICENSE) file for details
