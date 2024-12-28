// Sample data for the t-shirts
const tshirts = [
    {
        id: 1,
        name: "Classic Black T-Shirt",
        price: "$19.99",
        category: "men",
        imageUrl: "social/image/blackbacktshirt.jpg"
    },
    {
        id: 2,
        name: "White Graphic T-Shirt",
        price: "$22.99",
        category: "women",
        imageUrl: "https://via.placeholder.com/300x250?text=White+Graphic+T-Shirt"
    },
    {
        id: 3,
        name: "Unisex Logo T-Shirt",
        price: "$25.99",
        category: "unisex",
        imageUrl: "https://via.placeholder.com/300x250?text=Unisex+Logo+T-Shirt"
    },
    {
        id: 4,
        name: "Striped Blue T-Shirt",
        price: "$18.99",
        category: "men",
        imageUrl: "https://via.placeholder.com/300x250?text=Striped+Blue+T-Shirt"
    },
    {
        id: 5,
        name: "Pink Vintage T-Shirt",
        price: "$21.99",
        category: "women",
        imageUrl: "https://via.placeholder.com/300x250?text=Pink+Vintage+T-Shirt"
    },
    {
        id: 6,
        name: "Simple Gray T-Shirt",
        price: "$20.99",
        category: "unisex",
        imageUrl: "https://via.placeholder.com/300x250?text=Simple+Gray+T-Shirt"
    }
];

// Function to display the t-shirts
function displayTshirts(filteredCategory = "all") {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous items

    const filteredTshirts = filteredCategory === "all" 
        ? tshirts 
        : tshirts.filter(tshirt => tshirt.category === filteredCategory);

    filteredTshirts.forEach(tshirt => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${tshirt.imageUrl}" alt="${tshirt.name}">
            <div class="product-info">
                <div class="product-title">${tshirt.name}</div>
                <div class="product-price">${tshirt.price}</div>
            </div>
        `;

        container.appendChild(productCard);
    });
}

// Filter function based on category
function filterTshirts(category) {
    displayTshirts(category);
}

// Initial display
displayTshirts();
