

const cardcontainer = document.getElementById("buy-cards-container")

fetch("../model/items.json").then(res => res.json()).then((res) => {
    // runs async, when we get back the json, load it into the DOM here
    // console.log(Object.keys(res))
    // console.log(Object.keys(res["cooler 1"]))

    

    for (const key of Object.keys(res)) {

        const card = document.createElement("div")
        card.classList.add("product-card")

        var item = document.createElement("div")
        item.classList.add("item-contents")
        
        card.innerHTML += `<p>${key}</p>`

        for (const ikey of Object.keys(res[key])) {
            if (ikey == "price") continue;
            var p = document.createElement("p")
            item.innerHTML += `<p>${ikey} ${res[key][ikey]}</p>`
        }

        
        document.getElementById("buy-cards-container").append(card)

        var orderbutton  = document.createElement("a")

        orderbutton.classList.add("order-button")

        orderbutton.setAttribute("href", `mailto:twostatebeefalo@gmail.com?subject=Order of ${key}&body=Item(s): ${key}%0A%0AName: %0A%0APhone number: %0A%0AAddress: %0A%0A%0A`)

        orderbutton.innerText  = `Order by Email`


        var pricething = document.createElement("p")
        pricething.classList.add("price")
        pricething.innerHTML = `$${res[key]["price"]}`


        card.appendChild(item)
        card.appendChild(pricething)

        pricething.appendChild(orderbutton)


    }
    
    

})
