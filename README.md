### `npm install`

Install npm package that needed.<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `For different level of recipient`

Change the Cart.js file in src/components/cart/
const loginMember to 1 = Associate, 2 = Platinum , 3 = Diamond

#### `Adding / update product `

Update the productReducer.js file in src/store/reducers/
```sh
const initialState = {
  products: [
     ...
  ]
};
```
#### ` Adding / update member and discount `

Update the memberReducer.js file in src/store/reducers/
```sh
const initialState = {
  members: [
     ...
  ]
};
```

#### `Adding / update special product offer `

Update the specialReducer.js file in src/store/reducers/
```sh
const initialState = {
  specials: [
     ...
  ]
};
```