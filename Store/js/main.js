/* Storage */
var Prodcts = {

    /* Chatgories */
    Minecraft:{

        Coal:{
            Name: "Coal Ore",
            Discreption: "Coal is an Ore.",
            Picture: "./assets/Prodcts/Minecraft/Coal_Ore.png",
            Price: 210,
        },

        Iron:{
            Name: "Iron Ore",
            Discreption: "Iron is an Ore.",
            Picture: "./assets/Prodcts/Minecraft/Iron_Ore.png",
            Price: 25,
        },

        Gold:{
            Name: "Gold Ore",
            Discreption: "Gold is an Ore.",
            Picture: "./assets/Prodcts/Minecraft/Gold_Ore.png",
            Price: 20,
        },
        
        Diamond:{
            Name: "Diamond Ore",
            Discreption: "Diamond is an Ore.",
            Picture: "./assets/Prodcts/Minecraft/Diamond_Ore.png",
            Price: 120,
        },
    },
}


/* First Slider */
$('.slider-one')
.not(".slick-intialized")
.slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
});
