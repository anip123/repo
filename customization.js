window.onload = displayContent();


function displayContent() {
    const params = new URLSearchParams(window.location.search);
    const destination = params.get('destination');
    const cuisine = params.get('cuisine');


    let content = "";
    let headerColor = ""; 
    let textColor = ""; 
    let backgroundColor = "";


if (destination === "rome" && cuisine === "asian") {
        content = "<h2>Rome - Asian Fusion Cuisine</h2><p>Discover the flavors of East Asia in the heart of Rome.</p>";
        headerColor = "#97333D"; 
        textColor = "#3C0D17"; 
        backgroundColor = "#9E99B5";
} else if (destination === "rome" && cuisine === "italian") {
    content = "<h2>Rome - Italian Cuisine</h2><p>Welcome to Rome! Enjoy the best Italian cuisine.</p>";
    headerColor = "#472F5B"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "rome" && cuisine === "mexican") {
    content = "<h2>Rome - Mexican Cuisine</h2><p>Spicy and flavorful Mexican dishes await you in Rome.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} 

else if (destination === "paris" && cuisine === "asian") {
    content = "<h2>Paris - Asian Fusion Cuisine</h2><p>Explore the authentic East Asian flavors in Paris.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "paris" && cuisine === "italian") {
    content = "<h2>Paris - Italian Cuisine</h2><p>Experience the exquisite Italian cuisine in the heart of Paris.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "paris" && cuisine === "mexican") {
    content = "<h2>Paris - Mexican Cuisine</h2><p>Discover the zest of Mexico in Paris.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

else if (destination === "yerevan" && cuisine === "asian") {
    content = "<h2>Yerevan - Asian Fusion Cuisine</h2><p>East Asian culinary excellence, now in Yerevan.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17"; 
} else if (destination === "yerevan" && cuisine === "italian") {
    content = "<h2>Yerevan - Italian Cuisine</h2><p>Italian gastronomy meets Armenian hospitality.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "yerevan" && cuisine === "mexican") {
    content = "<h2>Yerevan - Mexican Cuisine</h2><p>Yerevan welcomes the vibrant flavors of Mexico.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

else if (destination === "madrid" && cuisine === "asian") {
    content = "<h2>Madrid - Asian Fusion Cuisine</h2><p>Explore the wonders of East Asian cuisine in Madrid.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "madrid" && cuisine === "italian") {
    content = "<h2>Madrid - Italian Cuisine</h2><p>Italian culinary masterpieces await in Madrid.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "madrid" && cuisine === "mexican") {
    content = "<h2>Madrid - Mexican Cuisine</h2><p>The spirit of Mexico captured in Madrid's cuisine.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

else if (destination === "losangeles" && cuisine === "asian") {
    content = "<h2>Los Angeles - Asian Fusion Cuisine</h2><p>East Asian culinary traditions shine in Los Angeles.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "losangeles" && cuisine === "italian") {
    content = "<h2>Los Angeles - Italian Cuisine</h2><p>Experience Italy's finest in Los Angeles.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "losangeles" && cuisine === "mexican") {
    content = "<h2>Los Angeles - Mexican Cuisine</h2><p>Vibrant Mexican flavors thrive in Los Angeles.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

else if (destination === "salzburg" && cuisine === "asian") {
    content = "<h2>Salzburg - Asian Fusion Cuisine</h2><p>East Asian cuisine finds a home in Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "salzburg" && cuisine === "italian") {
    content = "<h2>Salzburg - Italian Cuisine</h2><p>Italian elegance in the streets of Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "salzburg" && cuisine === "mexican") {
    content = "<h2>Salzburg - Mexican Cuisine</h2><p>The bold flavors of Mexico arrive in Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

    const contentPlaceholder = document.getElementById('content-placeholder');
    contentPlaceholder.innerHTML = content || "<p>Content not found for the selected combination.</p>";

    document.getElementsByClassName("header_class")[0].style.backgroundColor = headerColor;
    //document.getElementById("paragraph_container").style.color = textColor;

    // const header = document.querySelector('.header'); 
    // if (header) {
    //     header.style.backgroundColor = headerColor;
    // }


    document.body.style.backgroundColor = backgroundColor; 
    //document.querySelector('.header').style.backgroundColor = headerColor; 
    document.body.style.color = textColor; 


    if (!headerColor) header.style.backgroundColor = "#EAEAEA"; 
    if (!textColor) document.body.style.color = "#000000"; 
    if (!backgroundColor) document.body.style.backgroundColor = "#FFFFFF"; 


}

document.addEventListener('DOMContentLoaded', function() {
    displayContent();
});