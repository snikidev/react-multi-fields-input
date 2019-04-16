# React npm package starter

This is a starter project for custom React components

## Start

To start the development run 

```
yarn install
npm i -g @storybook/cli
getstorybook
``` 

and then `yarn start`. In a separate terminal run `yarn run storybook` to test the component.

## Build

To build the project run

```
yarn run build 
yarn link
```

`yarn link` will be used to dev-test the component in any project while developing it

## Deploy to npm

To deploy the ready React components run 

```
yarn login
yarn publish
```
