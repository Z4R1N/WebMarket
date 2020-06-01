function SizeFunction(x){
    if(x.matches){
        alert("This webiste doesent support your device sizes!")
        console.log("smal")
        window.location.href = "http://www.google.com";
    }
}
var x = window.matchMedia("(max-width: 1000px)")
SizeFunction(x)
x.addListener(SizeFunction)


var CurrentDocument = document.title;

var Prodcts = [
    Coal = {
        Name: "Coal Ore",
        Discreption: "Coal is an Ore.",
        Picture: "./assets/Products/Coal_Ore.png",
        Price: 210,
    },

    Iron = {
        Name: "Iron Ore",
        Discreption: "Iron is an Ore.",
        Picture: "./assets/Products/Iron_Ore.png",
        Price: 25,
    },

    Gold = {
        Name: "Gold Ore",
        Discreption: "Gold is an Ore.",
        Picture: "./assets/Products/Gold_Ore.png",
        Price: 20,
    },
    
    Diamond = {
        Name: "Diamond Ore",
        Discreption: "Diamond is an Ore.",
        Picture: "./assets/Products/Diamond_Ore.png",
        Price: 120,
    },
]


if(localStorage.getItem("Check") == "false"){

    localStorage.setItem("Online", "false");

    localStorage.setItem("Check", "true");
}
else if(localStorage.getItem("Check") != "true"){
    localStorage.setItem("Check", "false");
    
    console.log("Created new");
    window.location.reload()
}

if (CurrentDocument != "Admin: Arab Professional"){
    if (localStorage.getItem("Online") == "true" || localStorage.getItem("Online") == "Admin"){
        var Signing_In_container = document.getElementById("signing_in");
        Signing_In_container.style.display = 'none';
    
        console.log("red");
    }
}

/** Changing content in the product website. */
function ProdctClicked(Item){
    localStorage.setItem("ProductName", Prodcts[Item].Name);
    localStorage.setItem("ProductDiscreption", Prodcts[Item].Discreption);
    localStorage.setItem("ProductPicture", Prodcts[Item].Picture);
    localStorage.setItem("ProductPrice", Prodcts[Item].Price + "kr");

    window.location.href = "product.html?/" + localStorage.getItem("ProductName");;
}

if(CurrentDocument === "Admin: Arab Professional"){
    if(localStorage.getItem("Online") != "Admin"){
        window.location.href = "http://www.google.com";
    }
}

if(CurrentDocument === "Product: Arab Professional"){
    document.getElementById("ProductName").innerHTML = localStorage.getItem("ProductName");
    document.getElementById("ProductDiscreption").innerHTML = localStorage.getItem("ProductDiscreption");
    document.getElementById("ProductPicture").src = localStorage.getItem("ProductPicture");
    document.getElementById("ProductPrice").innerHTML = localStorage.getItem("ProductPrice");
}

if(CurrentDocument === "Collection: Arab Professional"){
    /** Cloneing the Itemcards in the collection. */
    var OriginalCard = document.querySelector("#OriginalCard");
    var OriginalCardName = document.querySelector("#OriginalCardName");
    var OriginalCardPicture = document.querySelector("#OriginalCardPicture");
    var OriginalCardDiscreption = document.querySelector("#OriginalCardDiscreption");



    for(i = 0; i < Prodcts.length; i++){
        let ProductName = Prodcts[i].Name;
        let ProductPicture = Prodcts[i].Picture;     

        OriginalCardName.innerHTML = ProductName;
        OriginalCardPicture.src = ProductPicture;
        OriginalCardDiscreption.innerHTML = ProductPicture;

        var clone = OriginalCard.cloneNode(true);
    
        clone.id = i;
    
        clone.innerHTML = OriginalCard.innerHTML;
        clone.classList.add("VisibleCard");
        OriginalCard.after(clone);
    }
}