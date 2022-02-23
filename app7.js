let dragonDamage=0




let button = document.createElement("button")
button.innerHTML = "Fire Attack";
button.addEventListener("click", function () {
        damageDealt("3", "Fire Attack")
        dragonDamage = dragonDamage + 3
    })

let button2 = document.createElement("button")
button2.innerHTML = "Ice Attack";
button2.addEventListener("click", function () {
        damageDealt("1", "Ice Attack")
        dragonDamage = dragonDamage + 1
    })

let button3 = document.createElement("button")
button3.innerHTML = "Poison Attack";
button3.addEventListener("click", function () {
        damageDealt("4", "Poison Attack")
        dragonDamage = dragonDamage + 4
    })


function damageDealt(damage,attackType){
    if (attackType==="Fire Attack"){
            dragonDamage=dragonDamage-1
    }
    if (attackType==="Ice Attack"){
            dragonDamage=dragonDamage+1
    }
    let ele=document.createElement("div");
    let nameEle=document.createElement("h1");
    nameEle.innerHTML="Dragon Damage:" +dragonDamage;
    ele.appendChild(nameEle);
    document.body.appendChild(ele);
    if (dragonDamage>10) {
        let ele = document.createElement("div");
        let nameEle = document.createElement("h1");
        nameEle.innerHTML = "User Wins";
        ele.appendChild(nameEle);
        document.body.appendChild(ele);
}}

//let button=document.createElement("Fire Attack")
//button.innerHTML="Fire Attack"

document.body.appendChild(button);
document.body.appendChild(button2);
document.body.appendChild(button3);

