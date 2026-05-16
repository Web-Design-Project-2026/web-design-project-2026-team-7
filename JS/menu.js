let menuMatcha =document.getElementById("matcha");
let menuCoffe =document.getElementById("coffee");
let menuBites =document.getElementById("bites");
let menuTreats =document.getElementById("treats");
const menu = document.getElementById("items");

menuMatcha.addEventListener("click", matcha);
menuCoffe.addEventListener("click", coffee);
menuBites.addEventListener("click", bites);
menuTreats.addEventListener("click", treats); 

function matcha() {
    menu.style.backgroundColor = "var(--dark-green)";
    menu.style.color = "var(--pink)";

    menu.innerHTML = `
                <div id="one">
                    <h1>HOT MATCHA</h1>
                    <div class="menu-item">
                        <p>• Matcha Latte</p>
                        <p class="price">52</p>
                    </div>
                    <div class="menu-item">
                        <p>• Hojicha Latte - roasted Japanesse tea</p>
                        <p class="price">55</p>
                    </div>
                    <div class="menu-item">
                        <p>• Black Seasame Matcha Latte</p>
                        <p class="price">58</p>
                    </div>
                    <div class="menu-item">
                        <p>• Uji Matcha Special (premium ceremonial)</p>
                        <p class="price">69</p>
                    </div>
                </div>
                <div id="two">
                    <h1>COLD MATCHA</h1>
                    <div class="menu-item">
                        <p>• Iced Matcha Latte</p>
                        <p class="price">54</p>
                    </div>
                    <div class="menu-item">
                        <p>• Iced Strawberry Matcha</p>
                        <p class="price">59</p>
                    </div>
                    <div class="menu-item">
                        <p>• Iced Mango Matcha</p>
                        <p class="price">62</p>
                    </div>
                    <div class="menu-item">
                        <p>• Cloud Matcha</p>
                        <p class="price">66</p>
                    </div>
                </div>
                <div id="three">
                    <h1>SEASONAL SPECIALS</h1>
                    <div class="menu-item">
                        <p>• Sakura Matcha Latte - floral cherry blossom-inspired</p>
                        <p class="price">65</p>
                    </div>
                    <div class="menu-item">
                        <p>• Yuzu Matcha Sparkler - citrus + sparkling matcha</p>
                        <p class="price">68</p>
                    </div>
                    <div class="menu-item">
                        <p>• Dirty Matcha - espresso + matcha</p>
                        <p class="price">60</p>
                    </div>
                </div>
                <div id="four">
                    <p>Available with oat, almond, or coconut milk.</p>
                    <p>We use ceremonial matcha sourced from Japan.</p>
                </div>
                `;
}

function coffee() {
    menu.style.backgroundColor = "var(--pink)";
    menu.style.color = "var(--dark-green)";
    
    menu.innerHTML = `
                <div id="one">
                    <h1>HOT COFFEE</h1>
                    <div class="menu-item">
                        <p>• Espresso</p>
                        <p class="price">35</p>
                    </div>
                    <div class="menu-item">
                        <p>• Cappuccino</p>
                        <p class="price">49</p>
                    </div>
                    <div class="menu-item">
                        <p>• Flat White</p>
                        <p class="price">52</p>
                    </div>
                    <div class="menu-item">
                        <p>• Chai Latte</p>
                        <p class="price">58</p>
                    </div>
                    <div class="menu-item">
                        <p>• Americano</p>
                        <p class="price">39</p>
                    </div>
                    <div class="menu-item">
                        <p>• Hand Drip Coffee (Japanese pour-over)</p>
                        <p class="price">65</p>
                    </div>
                </div>
                <div id="two">
                    <h1>COLD COFFEE</h1>
                    <div class="menu-item">
                        <p>• Iced Americano</p>
                        <p class="price">42</p>
                    </div>
                    <div class="menu-item">
                        <p>• Iced Latte</p>
                        <p class="price">52</p>
                    </div>
                    <div class="menu-item">
                        <p>• Iced Shaken Espresso</p>
                        <p class="price">58</p>
                    </div>
                </div>
                <div id="three">
                    <h1>SIGNATURE COFFEE</h1>
                    <div class="menu-item">
                        <p>• Dalgona Coffee - whipped coffee foam over milk</p>
                        <p class="price">69</p>
                    </div>
                    <div class="menu-item">
                        <p>• Sakura Vanilla Latte - soft floral vanilla latte</p>
                        <p class="price">65</p>
                    </div>
                    <div class="menu-item">
                        <p>• Miso Caramel Latte</p>
                        <p class="price">72</p>
                    </div>
                </div>
                <div id="four">
                    <p>Available with oat, almond, or coconut milk.</p>
                </div>
                `;
}

function bites() {
    menu.style.backgroundColor = "var(--light-green)";
    menu.style.color = "var(--white)";
    
    menu.innerHTML = `
                <div id="one">
                    <h1>SIGNATURE SANDOS</h1>
                    <div class="menu-item">
                        <p>• Chili Oil Egg Drop - soft eggs with a gentle<br> chili heat</p>
                        <p class="price">79</p>
                    </div>
                    <div class="menu-item">
                        <p>• Yuzu Avocado Melt - creamy avocado with fresh citrus notes (vegan)</p>
                        <p class="price">82</p>
                    </div>
                    <div class="menu-item">
                        <p>• Miso Corn & Cheese Toastie - sweet corn with a subtle umami twist</p>
                        <p class="price">78</p>
                    </div>
                </div>
                <div id="two">
                    <h1>LIGHT BITES</h1>
                    <div class="menu-item">
                        <p>• Onigiri Set - rice balls with <br> seasonal fillings</p>
                        <p class="price">65</p>
                    </div>
                    <div class="menu-item">
                        <p>• Onsen Egg Toast - soft-boiled<br> egg on toast</p>
                        <p class="price">59</p>
                    </div>
                    <div class="menu-item">
                        <p>• Pickled Veg Plate (vegan)</p>
                        <p class="price">55</p>
                    </div>
                </div>
                <div id="three">
                    <h1>GRILLED SANDWITCHES</h1>
                    <div class="menu-item">
                        <p>• Miso Butter Egg Drop - soft eggs with rich miso butter</p>
                        <p class="price">83</p>
                    </div>
                    <div class="menu-item">
                        <p>• Tamago Melt - creamy egg salad with melted cheese</p>
                        <p class="price">76</p>
                    </div>
                    <div class="menu-item">
                        <p>• Miso Mushroom Melt - savory mushrooms with a hint of umami (vegan option available)</p>
                        <p class="price">81</p>
                    </div>
                    <div class="menu-item">
                        <p>• Avocado Sesame Toastie - creamy avocado with toasted seasame (vegan)</p>
                        <p class="price">74</p>
                    </div>
                </div>
                `;
}

function treats() {
    menu.style.backgroundColor = "var(--white)";
    menu.style.color = "var(--light-green)";
    
    menu.innerHTML = `
                <div id="one">
                    <h1>SWEET BREAKFAST</h1>
                    <div class="menu-item">
                        <p>• Honey Butter French Toast - fluffy French toast topped with whipped butter & honey glaze</p>
                        <p class="price">79</p>
                    </div>
                    <div class="menu-item">
                        <p>• Matcha Pancakes - soft pancakes served with fresh seasonal fruit</p>
                        <p class="price">85</p>
                    </div>
                    <div class="menu-item">
                        <p>• Berry Granola Bowl (vegan option available)</p>
                        <p class="price">72</p>
                    </div>
                    <div class="menu-item">
                        <p>• Acai Bowl (vegan)</p>
                        <p class="price">88</p>
                    </div>
                </div>
                <div id="two">
                    <h1>PASTRIES</h1>
                    <div class="menu-item">
                        <p>• Almond Croissant</p>
                        <p class="price">42</p>
                    </div>
                    <div class="menu-item">
                        <p>• Matcha Croissant</p>
                        <p class="price">45</p>
                    </div>
                    <div class="menu-item">
                        <p>• Pistachio Bun</p>
                        <p class="price">38</p>
                    </div>
                    <div class="menu-item">
                        <p>• Butter croissant</p>
                        <p class="price">36</p>
                    </div>
                </div>
                <div id="three">
                    <h1>JAPANESE DESSERTS</h1>
                    <div class="menu-item">
                        <p>• Matcha Tiramisu</p>
                        <p class="price">68</p>
                    </div>
                    <div class="menu-item">
                        <p>• Ube Cheesecake Slice - creamy purple sweet potato cheesecake with a soft earthy sweetness</p>
                        <p class="price">74</p>
                    </div>
                    <div class="menu-item">
                        <p>• Classic Matcha Soft Serve</p>
                        <p class="price">62</p>
                    </div>
                </div>
                `;
}