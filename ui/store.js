

const cardcontainer = document.getElementById("buy-cards-container")

fetch("../model/items.json").then(res => res.json()).then((res) => {
    // runs async, when we get back the json, load it into the DOM here
    // console.log(Object.keys(res))
    // console.log(Object.keys(res["cooler 1"]))


    for (const key of Object.keys(res)) {

        // the card element itself
        const card = document.createElement("div")
        card.classList.add("product-card")

        // item on the card 
        var item = document.createElement("div")
        item.classList.add("item-contents")
        
        // adds the name of the cooler as a p tag
        card.innerHTML += `<p>${key}</p>`

        // adds all the items in there, name, amount, weight
        for (const ikey of Object.keys(res[key])) {
            console.log(res[key][ikey])
            if (ikey == "price") continue;
            var p = document.createElement("p")
            item.innerHTML += `<p>${ikey} x${res[key][ikey][0]}, ${res[key][ikey][1]} lbs</p>`
        }

        
        document.getElementById("buy-cards-container").append(card)

        var orderbutton  = document.createElement("p")

        orderbutton.classList.add("order-button")

        // orderbutton.setAttribute("href", `mailto:twostatebeefalo@gmail.com?subject=Order of ${key}&body=Item(s): ${key} %0A%0AName: %0A%0APhone number: %0A%0AFedex Shipping Address: %0A%0A%0A When we receive this email, you will be sent a Quickbooks invoice that will allow you to select payment methods like credit cards, paypal, or venmo. Upon completion of your payment, your order will be shipped the next Monday or Tuesday.`)

        orderbutton.onclick = function() {
            window.open(`mailto:twostatebeefalo@gmail.com?subject=Order of ${key}&body=Item(s): ${key} %0A%0AName: %0A%0APhone number: %0A%0AFedex Shipping Address: %0A%0A%0AWhen we receive this email, you will be sent a Quickbooks invoice that will allow you to select payment methods like credit cards, paypal, or venmo. Upon completion of your payment, your order will be shipped the next Monday or Tuesday.`)
            window.location.replace("./email.html")
        }


        orderbutton.innerText  = `Order by Email`


        var pricething = document.createElement("p")
        pricething.classList.add("price")
        pricething.innerHTML = `$${res[key]["price"][0]}<br> Weight: ${res[key]["price"][1]} lbs`


        card.appendChild(item)
        card.appendChild(pricething)

        pricething.appendChild(orderbutton)


    }
    
    

})
