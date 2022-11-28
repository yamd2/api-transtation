# Transaction API

This api is for our react transiction app which is at `.... link to raact app repo`

.... what this app is .....

## How to use

1. clone this project by running `git clone https://github.com/yamd2/api-transtation.git`
2. Run `cd api-transaction_aug_22`
3. Run `npm i`
4. Run `npm run dev`. You must have `nodemon` install in your system, otherwise run `npm i nodemon -g` to install globally.

Now the project will be server at `http://localhost:8000`

## API

This api server will have 2 api endpoints

1. User API
2. Transacting API

All the endpoint will foloow the following path `{rooturl}api/v1`

## User API

User api will use the following path `{rooturl}/api/v1/user`. This api will aloow client to create user, login and more.
| # | PATH | METHOD | IS PRIVATE | DESCRIPTION |
| - | ----- | ----- | ----------- | ----------- |
| 1. | `/` | POST | false | Create new user |

## Transaction API

User api will use the following path `{rooturl}/api/v1/transaction`. This api will aloow client to do CRUgD opearation on transaction table.

| # | PATH | METHOD | IS PRIVATE | DESCRIPTION |
| --- | ---- | ------ | ---------- | .--------------------------------------------------------------- |
| 1. | `/` | GET | true | Allow user to fetch their own transactions only. |
| 2. | `/` | POST | true | Allow user to post new transaction, data should be send as `{}` |
| 3. | `/` | PATCH | true | |
| 4. | `/` | DELETE | true | Allow user to selete their single or muliple transactions . |
