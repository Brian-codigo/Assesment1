function changeContent(option) {
    const info = document.getElementById("info");
     const imgContainer = document.getElementById("display-image-container");

    let imageSrc = '';
    let captionText = '';

    if (option === "mountain") {
        info.innerHTML = `<h3>El Ávila Mountain</h3>
                          <p>El Ávila Mountain, officially known as Waraira Repano National Park, is one of Caracas' most iconic natural landmarks and a must-visit destination for anyone exploring Venezuela’s capital. Towering over the city with an elevation of 2,765 meters (9,072 feet) at its highest peak, this lush, green mountain range forms a breathtaking backdrop that separates Caracas from the Caribbean Sea. El Ávila is much more than just a mountain; it is a haven for nature lovers, adventure seekers, and those looking to escape the city's fast-paced life. The park boasts an extensive network of hiking trails of varying difficulty, attracting both casual walkers and experienced climbers. One of the most popular ways to experience El Ávila is through the Teleférico de Caracas, a cable car that takes visitors up the mountain, offering stunning panoramic views of the city and, on clear days, even the Caribbean coastline.</p>`;
        imageSrc = "images/Teleferico.jpg";
        captionText = "The stunning El Ávila Mountain."; // Replace with actual image path

    } else if (option === "coast") {
        info.innerHTML = `<h3>Caribbean Coast</h3>
                          <p>The Caribbean coast near Caracas is a breathtaking paradise where golden sands, turquoise waters, and lush green mountains come together to create a perfect escape from the bustling city. Just a short drive from the capital, this stunning coastline offers a variety of pristine beaches, each with its own charm. Popular destinations like La Guaira, Playa Los Caracas, and Chichiriviche de la Costa provide opportunities for sunbathing, swimming, and snorkeling in crystal-clear waters. For adventure seekers, scuba diving and surfing are also popular activities in certain areas, where the waves and marine life make for an exhilarating experience. </p>`;
        imageSrc = "images/coast.jpg";
        captionText = "The pristine beaches of the Caribbean Coast.";
    
    } else if (option === "plaza") {
        info.innerHTML = `<h3>Plaza Bolívar</h3>
                          <p>Plaza Bolívar, located in the heart of Venezuela's capital, Caracas, is a must-visit destination for anyone seeking to immerse themselves in the country’s rich history and vibrant culture. Named after the nation's revered liberator, Simón Bolívar, the plaza is a historic symbol of Venezuela's fight for independence. Surrounded by colonial-era architecture, lush greenery, and vibrant sculptures, it offers a peaceful retreat amidst the bustling city. Visitors can explore the impressive Bolívar Monument, visit the nearby Catedral de Caracas, or simply enjoy the lively atmosphere of the square, making it a perfect blend of history, art, and local life. Whether you're a history enthusiast or a curious traveler, Plaza Bolívar is an essential part of any Venezuelan journey.</p>`;
        imageSrc = "images/plaza.jpg";
        captionText = "Plaza Bolívar, the historic heart of Caracas.";
    } else if (option === "food") {
        info.innerHTML = `<h3>Venezuelan Food</h3>
                          <p>Caracas offers a delightful array of food that reflects the country’s diverse culinary traditions. From street food to fine dining, the city’s cuisine blends indigenous, Spanish, and African influences, creating a rich and flavorful dining experience. A must-try dish is <b>arepas</b>, a versatile cornmeal bread that can be filled with a variety of ingredients such as cheese, ham, shredded beef, or black beans. Another local favorite is <b>pabellón criollo</b>, a hearty dish featuring shredded beef, rice, black beans, and fried plantains – a true representation of Venezuelan comfort food. For something sweet, try <b>tres leches cake</b> or <b>dulce de lechosa</b>, a traditional papaya dessert. Caracas also boasts a lively café culture, with places serving rich Venezuelan coffee and pastries like cachitos. Whether you're enjoying a casual meal or a gourmet experience, the food in Caracas will give you a true taste of Venezuelan culture.</p>`;
        imageSrc = "images/Arepas.jpg";
        captionText = "Delicious traditional Venezuelan dishes.";
    }

    // Create figure and figcaption elements dynamically
    imgContainer.innerHTML = `
        <figure>
            <img src="${imageSrc}" alt="${captionText}">
            <figcaption>${captionText}</figcaption>
        </figure>
    `;
}