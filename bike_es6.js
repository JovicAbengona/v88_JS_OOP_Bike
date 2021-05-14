document.addEventListener("DOMContentLoaded", function(){
    class Bike{
        constructor(price, max_speed){
            this.name = `Bike ${bikeCounter}`;
            this.price = `$ ${price}`;
            this.max_speed = max_speed;
            this.miles = 0;
        }

        drive(){
            this.miles += 10;
        }

        reverseBike(){
            (this.miles > 0) ? this.miles -= 5 : null;
        }

        displayInfo(){
            bikes_div.innerHTML = "";
            let counter = 0;
            for(let bike of bikes){
                bikes_div.innerHTML += `<div class="bike">
                                            <h3>${bike.name}</h3>
                                            <p>Price: ${bike.price}</p>
                                            <p>Max Speed: ${bike.max_speed}</p>
                                            <p>Miles: ${bike.miles}</p>
                                            <div class="bikeBtns">
                                                <button id="${counter}" class="reverse">Reverse</button>
                                                <button id="${counter}" class="drive">Drive</button>
                                            </div>
                                        </div>`;
                counter++;
            }
        }
    }

    let bikes = [];
    let bikeCounter = 1;
    const bikes_div = document.querySelector("#bikes_div");

    function updateBikeCounter(){
        document.querySelector("#bikeCounter").innerHTML = bikeCounter;
    }

    updateBikeCounter();

    document.querySelector("#price, #max_speed").onchange = function(){
        document.querySelector("#message").innerHTML = "";
    };

    document.addEventListener("click", function(e){
        if(e.target.classList == "drive"){
            bikes[e.target.id].drive();
            bikes[e.target.id].displayInfo();
        }
        else if(e.target.classList == "reverse"){
            bikes[e.target.id].reverseBike();
            bikes[e.target.id].displayInfo();
        }
    });

    document.querySelector("button").addEventListener("click", function(){
        let price = document.querySelector("#price");
        let max_speed = document.querySelector("#max_speed");

        if(price.value != "" && max_speed.value != ""){
            bikes.push(new Bike(price.value, max_speed.value));
            bikes[bikes.length - 1].displayInfo();
            bikeCounter++;
            price.value = "";
            max_speed.value = "";
            price.focus();
            updateBikeCounter();
        }
        else
            document.querySelector("#message").innerHTML = "Price or Max Speed can't be empty!";
    });
});
