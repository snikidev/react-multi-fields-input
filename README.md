# React npm package starter

This is a starter project for custom React components

## Start

To start the development run `yarn install` and then `yarn start`.

## Build

To build the project run

```
yarn run build 
yarn link
```

`yarn link` will be used to dev-test the component in any project while developing it

## Testing the component 

In any other project that would like to use run 

```yarn link rcomponents```

This would allow to import elements from the local directory, as in 

```
import { Sample } from 'rcomponents'
```

## Deploy to npm

To deploy the ready React components run 

```
yarn login
yarn publish
```
