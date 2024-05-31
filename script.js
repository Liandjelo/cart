document.body.style.fontFamily = "Helvetica, sans-serif";
document.body.style.backgroundColor = "#D8D2D0";


itemkey = [false, false, false, false];
//when clicking a cart button in mobile view or tablet view.
document.getElementsByTagName('button')[1]
    .addEventListener('click', () => {
        var card = document.getElementById('right-card');
        card.style.animation = "slide-up 1s ease-out";
        card.style.height = '90vh';
        document.getElementById('cart-close-button').addEventListener('click', () => {
            card.style.animation = "slide-down 1s ease-out";
            card.style.top = "";
            document.getElementById('cart-button').style.display = "";
            card.style.display = '';
        });
        card.style.top = '5vh';
        document.getElementById('cart-button').style.display = "none";

        var media = window.matchMedia('(max-width : 747px)');

        media.addEventListener('change', (e) => {

            if (e.matches) {

                document.getElementById('cart-button').style.display = "";

            }
            else {
                card.style.animation = "slide-down 1s ease-out";
                card.style.position = '';
                card.style.top = '';
                card.style.height = '';

            }
        });
    });

//lists of a food.
class restaurant {
    static meals = [
        [
            "images/pizza.jpg",
            "Pizza",
            `$8.99`,
            "#E388B5",
            "add-to-cart-Pizza",
            8.99
        ],
        [
            "images/burger.jpg",
            "Burger",
            `$7.89`,
            "#93E388",
            "add-to-cart-Burger",
            7.89
        ],
        [
            "images/fries.jpg",
            "Fries",
            `$8.99`,
            "#E1E388",
            "add-to-cart-Fries",
            8.99
        ],
        [
            "images/spaghetti.jpg",
            "Spaghetti",
            `$5.75`,
            "lightblue",
            "add-to-cart-Spaghetti",
            5.75
        ]
    ]
}

//to compute the result
class compute {
    static subtotal = 0;
    static tax = 0;
    static total = 0;
    static results = document.getElementsByClassName("results");
    static result(x, y, z) {
        var a = [x, y, z];

        Array.from(compute.results).forEach((b, c) => {
            b.textContent = `\$${a[c].toFixed(2)}`;
        });

    }
}
//to remove meals cart in right card.
class closebutton {
    static eventListener(x, y, z, a) {
        x.addEventListener('click', (e) => {
            document.getElementById("meals-cart").removeChild(y);
            compute.subtotal -= z;
            compute.tax = compute.subtotal * 0.13;
            compute.total = compute.subtotal + compute.tax;
            compute.result(compute.subtotal, compute.tax, compute.total);
            mealCards.removeItem(a);
            if (compute.subtotal <= 0 || compute.tax <= 0 || compute.total <= 0) {
                reset.removeResults();
            }
            reset.removeBackground();
        });

    }
}
//to reset the result in cart.
class reset {
    static removeResults() {
        compute.subtotal = 0;
        compute.tax = 0;
        compute.total = 0;
        Array.from(compute.results).forEach((b) => {
            b.textContent = `$0.00`;

        });
    }
    static removeBackground() {
        var background;
        if (itemkey[0]) {
            if (mealCards.pizza.length < 1) {
                background = document.getElementsByClassName('Pizza')[0];
                background.style.animation = "slide-out 0.8s ease-in";
                background.style.marginLeft = "308px";
                itemkey[0] = false;
            }
        }
        if (itemkey[1]) {
            if (mealCards.burger.length < 1) {
                background = document.getElementsByClassName('Burger')[0];
                background.style.animation = "slide-out 0.8s ease-in";
                background.style.marginLeft = "308px";
                itemkey[1] = false;
            }
        }
        if (itemkey[2]) {
            if (mealCards.fries.length < 1) {
                background = document.getElementsByClassName('Fries')[0];
                background.style.animation = "slide-out 0.8s ease-in";
                background.style.marginLeft = "308px";
                itemkey[2] = false;
            }
        }
        if (itemkey[3]) {
            if (mealCards.spaghetti.length < 1) {
                background = document.getElementsByClassName('Spaghetti')[0];
                background.style.animation = "slide-out 0.8s ease-in";
                background.style.marginLeft = "308px";
                itemkey[3] = false;
            }
        }







    }
}

//to specify the length of a meal.
class mealCards {
    static pizza = [];
    static burger = [];
    static fries = [];
    static spaghetti = [];

    static addItem(x) {
        if (x == 'Pizza') {
            this.pizza.push(x);
            itemkey[0] = true;
        }
        else if (x == 'Burger') {
            this.burger.push(x);
            itemkey[1] = true;
        }
        else if (x == 'Fries') {

            this.fries.push(x);
            itemkey[2] = true;
        }
        else if (x == 'Spaghetti') {
            this.spaghetti.push(x);
            itemkey[3] = true;
        }

    }
    static removeItem(x) {
        if (x == 'Pizza') {
            this.pizza.pop();
        }
        else if (x == 'Burger') {
            this.burger.pop();
        }
        else if (x == 'Fries') {
            this.fries.pop();
        }
        else if (x == 'Spaghetti') {
            this.spaghetti.pop();
        }
    }
}
//to make element of two cards
restaurant.meals.forEach(element => {
    let card = document.createElement('div');
    card.style.height = "150px";
    card.style.display = "flex";
    document.getElementById('left-card').appendChild(card);

    let background = document.createElement('div');
    background.style.backgroundColor = element[3];
    background.style.marginTop = "10px";
    background.style.height = "90%";
    background.style.width = "100%"
    background.style.marginLeft = "308px";
    background.style.borderBottomLeftRadius = "10px";
    background.className = element[1];

    let container = document.createElement('div');
    container.style.display = "flex";
    container.style.gap = "15px";
    container.style.marginLeft = "18px";

    let imageContainer = document.createElement('div');
    let textContainer = document.createElement('div');


    let foodNameContainer = document.createElement('div');
    let priceContainer = document.createElement('div');

    let price = document.createElement('p');
    price.style.fontSize = "30px";
    price.textContent = element[2];
    price.style.lineHeight = "0";
    price.style.fontWeight = "800";
    priceContainer.appendChild(price);

    foodName = document.createElement('p');
    foodName.style.fontSize = "20px";
    foodName.textContent = element[1];
    foodNameContainer.appendChild(foodName);

    let image = document.createElement('img');
    image.src = element[0];
    image.width = '100';
    image.height = '100';
    image.style.borderRadius = "100px";
    var button = document.createElement('div');
    button.className = "buttons";
    button.style.width = "100px";
    button.style.backgroundColor = "#9633FF";
    button.style.borderRadius = "10px";

    let addToCart = document.createElement('p');
    addToCart.id = element[4];
    addToCart.style.fontSize = "15px";
    addToCart.style.color = "#fff";
    addToCart.textContent = "Add to Cart";
    addToCart.style.lineHeight = "1.5";
    addToCart.style.textAlign = "center";
    addToCart.style.cursor = "pointer";
    button.appendChild(addToCart);


    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
    container.appendChild(textContainer);

    textContainer.appendChild(foodNameContainer);
    textContainer.appendChild(priceContainer);
    textContainer.appendChild(button);
    card.appendChild(container);
    card.appendChild(background);

    container.style.position = "absolute";

    container.style.display = "flex";
    //to add button function a card.
    document.getElementById('left-card').addEventListener('click', (e) => {
        //to specify the value of a card.
        if (e.target.id == element[4]) {

            compute.subtotal += element[5];
            compute.tax = compute.subtotal * 0.13;
            compute.total = compute.subtotal + compute.tax;

            compute.result(compute.subtotal, compute.tax, compute.total);

            background.style.display = "block";
            background.style.animation = "slide-in 1s ease-out";
            background.style.marginLeft = "18px";
            let card = document.createElement('div');
            card.className = "cart-item";
            card.style.display = "flex";
            card.style.gap = "50px";
            card.style.alignItems = "center";
            card.style.justifyContent = "center";
            let image = document.createElement('img');
            image.src = element[0];
            image.height = "50";
            image.width = "50";
            image.style.borderRadius = "30px";

            let text = document.createElement('p');

            text.innerHTML = element[1] + "<br>" + `<span style= "font-size: 20px; font-weight: 900">${element[2]}</span>`;
            text.style.width = "75px";
            let button = document.createElement('div');


            let closeButton = document.createElement('p');

            closeButton.style.cursor = "pointer";
            closeButton.textContent = "x";
            closeButton.className = "cancelButton";

            button.appendChild(closeButton);
            card.appendChild(image);
            card.appendChild(text);
            card.appendChild(button);
            document.getElementById('meals-cart').appendChild(card);
            mealCards.addItem(element[1]);
            closebutton.eventListener(closeButton, card, element[5], element[1]);
        }
    });
});




