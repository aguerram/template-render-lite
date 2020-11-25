const templateRender = require("./index")




test("check templateRender if working properly",()=>{
    const inovice = {
        name:"User",
        year:2020,
        price:15.99,
        priceSymbol:"$"
    }
    const template = "Hello '{name}', total price = {price}{priceSymbol} || year {year}, {thisWillNotChange}"

    const expectedResults = "Hello 'User', total price = 15.99$ || year 2020, thisWillNotChange"

    expect(templateRender(template,inovice)).toEqual(expectedResults)

})

