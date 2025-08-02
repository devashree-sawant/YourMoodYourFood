document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");
  const suggestionSection = document.getElementById("suggestions");
  const foodList = document.getElementById("food-list");
  const suggestionTitle = document.getElementById("suggestion-title");

  // Simulate loader delay
  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 2000);

  const moodSuggestions = {
    happy: [
      { name: "Ice Cream", image: "https://source.unsplash.com/200x200/?icecream", link: "https://zomato.com" },
      { name: "Waffles", image: "https://source.unsplash.com/200x200/?waffle", link: "https://zomato.com" },
    ],
    lazy: [
      { name: "Maggi", image: "https://source.unsplash.com/200x200/?maggi,noodles", link: "https://zomato.com" },
      { name: "Instant Pasta", image: "https://source.unsplash.com/200x200/?pasta", link: "https://zomato.com" },
    ],
    sad: [
      { name: "Chocolate Cake", image: "https://source.unsplash.com/200x200/?chocolatecake", link: "https://zomato.com" },
      { name: "Cheesy Fries", image: "https://source.unsplash.com/200x200/?cheesefries", link: "https://zomato.com" },
    ],
    party: [
      { name: "Pizza", image: "https://source.unsplash.com/200x200/?pizza", link: "https://zomato.com" },
      { name: "Mocktails", image: "https://source.unsplash.com/200x200/?mocktail", link: "https://zomato.com" },
    ],
    craving: [
      { name: "Donuts", image: "https://source.unsplash.com/200x200/?donut", link: "https://zomato.com" },
      { name: "Brownies", image: "https://source.unsplash.com/200x200/?brownie", link: "https://zomato.com" },
    ],
    healthy: [
      { name: "Salad Bowl", image: "https://source.unsplash.com/200x200/?salad", link: "https://zomato.com" },
      { name: "Smoothie", image: "https://source.unsplash.com/200x200/?smoothie", link: "https://zomato.com" },
    ],
    chill: [
      { name: "Burger", image: "https://source.unsplash.com/200x200/?burger", link: "https://zomato.com" },
      { name: "Fries", image: "https://source.unsplash.com/200x200/?fries", link: "https://zomato.com" },
    ],
    excited: [
      { name: "Tacos", image: "https://source.unsplash.com/200x200/?tacos", link: "https://zomato.com" },
      { name: "Nachos", image: "https://source.unsplash.com/200x200/?nachos", link: "https://zomato.com" },
    ],
    hungry: [
      { name: "Biryani", image: "https://source.unsplash.com/200x200/?biryani", link: "https://zomato.com" },
      { name: "Paneer Tikka", image: "https://source.unsplash.com/200x200/?paneer", link: "https://zomato.com" },
    ]
  };

  const moodButtons = document.querySelectorAll(".mood-btn");
  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      const foods = moodSuggestions[mood];

      suggestionTitle.textContent = `Top Picks for "${mood.charAt(0).toUpperCase() + mood.slice(1)}" Mood 🍽️`;
      foodList.innerHTML = ""; // Clear old suggestions

      foods.forEach(food => {
        const foodCard = document.createElement("div");
        foodCard.style.width = "200px";
        foodCard.style.background = "#fff4e6";
        foodCard.style.borderRadius = "10px";
        foodCard.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        foodCard.style.overflow = "hidden";
        foodCard.style.textAlign = "center";
        foodCard.innerHTML = `
          <img src="${food.image}" alt="${food.name}" style="width: 100%; height: 150px; object-fit: cover;">
          <h4 style="margin: 0.5rem 0;">${food.name}</h4>
          <a href="${food.link}" target="_blank" style="display: inline-block; background: #ffb347; color: white; padding: 0.5rem 1rem; border-radius: 5px; text-decoration: none;">Order</a>
        `;
        foodList.appendChild(foodCard);
      });

      suggestionSection.style.display = "block";
    });
  });
});
