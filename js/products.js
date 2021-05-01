
// Array for the product images
var imageP= "images/icecream_";
var product_images_arr =[imageP+"strawberry_cheesecake.png",
    imageP+"cookie_dough.png", imageP+"honeycomb.png", imageP+"rum_raisins.png", imageP+"original_vanilla.png", imageP+"christmas_pudding.png", imageP+"creme_brulee.png", imageP+"mint_choc.png", imageP+"mint_oreo_blitz.png", imageP+"sea_salt_caramel.png"];

// Array for the product names
var product_name_arr =["Strawberry Cheesecake", "Cookie Dough", "Honeycomb", "Rum & Raisin", "Original Vanilla", "Christmas Pudding", "Creme Brulee", "Mint Chocolate", "Mint Oreo Blitz", "Sea Salt Caramel"];

//function loops through each product in the products arrays displayed above
//the products image, name, and price is displayed
//this function is called on the produts.html page
function displayProduct(){
    for(x=0; x<product_images_arr.length; x++){

        //creating the products box div, and adding class name to it
        var productSection = document.getElementById("products");
        var productBox = document.createElement("div");
        productSection.appendChild(productBox);
        productBox.classList.add("product_box");

        // creating the image element and adding the img path
        var imageVar = document.createElement("img");
        imageVar.classList.add("product_image")
        imageVar.src = product_images_arr[x];
        productBox.appendChild(imageVar);

        // creating the h4 element and adding the product name as the text
        var nameVar = document.createElement("h4");
        nameVar.innerHTML = product_name_arr[x];
        productBox.appendChild(nameVar);

        

        //***************************************  product/price dropdown **************************************** */
      


        //select element - for the price/product dropdown
        var selectTag = document.createElement("select");
        selectTag.classList.add("product_list");
        selectTag.setAttribute("id", x);
        selectTag.onchange = function() {getPrice(this, this.id)};

        //first option group
        var optGroup1 = document.createElement("optgroup");
        optGroup1.setAttribute("label", "Cones");
        optGroup1.classList.add("home_delivery_prod");

        // 1 scoop option 
        var option1 = document.createElement("option");
        option1.setAttribute("value", "€3.00");
        option1.text = "1 Scoop";
        option1.setAttribute("selected", "selected");

        optGroup1.appendChild(option1);

        // 2 scoos option 
        var option2 = document.createElement("option");
        option2.setAttribute("value", "€3.30");
        option2.text = "2 Scoops";
        optGroup1.appendChild(option2);

        // 3 scoops option 
        var option3 = document.createElement("option");
        option3.setAttribute("value", "€3.50");
        option3.text = "3 Scoops";
        optGroup1.appendChild(option3);



        //2nd option group
        var optGroup2 = document.createElement("optgroup");
        optGroup2.setAttribute("label", "Tubs");
        optGroup2.classList.add("wholesale_prod");

        // 250ml tub option 
        var option4 = document.createElement("option");
        option4.setAttribute("value", "€4.00");
        option4.text = "250ml Tub";
        optGroup2.appendChild(option4);

        // 500ml tub option
        var option5 = document.createElement("option");
        option5.setAttribute("value", "€6.00");
        option5.text = "500ml Tub";
        optGroup2.appendChild(option5);

        // 1L tub option
        var option6 = document.createElement("option");
        option6.setAttribute("value", "€10.00");
        option6.text = "1L tub";
        optGroup2.appendChild(option6);


        selectTag.appendChild(optGroup1);
        selectTag.appendChild(optGroup2);
        productBox.appendChild(selectTag);

        var priceVar = document.createElement("h3");
        priceVar.innerHTML = "€3.00";
        // priceVar.setAttribute("id", "price_html_tag_");
        priceVar.setAttribute("id", "price_element"+x);
        productBox.appendChild(priceVar);

    }
}

function getPrice(sel, id){
    var priveVal= sel.options[sel.selectedIndex].value;
    var priceEl = document.getElementById("price_element"+id)
    priceEl.innerHTML = priveVal;
    productBox.appendChild(priceEl);
}


//************************   og html code for the drop down -> refactored into proper DOM manipulation  */
{/* <select name="product_list" id="product_list">
<option value="none" selected="selected"> -- choose one --
<optgroup label="Scoops" id="home_delivery_prod" class="home_delivery_prod">
  <option value="1">1 Scoop
  <option value="2">2 Scoops
  <option value="3">3 Scoops
</optgroup>
<optgroup label="Tubs" id="wholesale_prod" class="wholesale_prod">
  <option value="250">250ml Tub
  <option value="500">500ml Tub
  <option value="1000">1KG Tub
</optgroup>
</select> */}