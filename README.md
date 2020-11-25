# Template Render Lite

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This package is used as a simple template engine that can replace values in a simple template text using Regex.

### Features
 - Tiny library < 1kb
 - simple to use

### How to install
```
yarn add template-render-lite
```
or 
```
npm install template-render-lite
```
### Example 

```javascript
import templateRender from "template-render-lite"

const inovice = {
    name:"User",
    year:2020,
    price:15.99,
    priceSymbol:"$"
}
const template = "Hello '{name}', total price = {price}{priceSymbol} || year {year}, {thisWillNotChange}"

console.log(templateRender(template,inovice))
```
Output
```
Hello 'User', total price = 15.99$ || year 2020, thisWillNotChange
```

