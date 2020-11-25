# Template Render Lite

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This package used as a simple template engine that can replace values in a simple template text.

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
    name:"My name",
    year:2020,
    price:15.99,
    priceSymbol:"$"
}
const template = "hello {name}, total price = {price}{priceSymbol} || year {year}"

console.log(templateRender(template,inovice))
```
Output
```
hello My name, total price = 15.99$ || year 2020 
```

