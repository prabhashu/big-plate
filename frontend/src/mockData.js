// Mock data for Big Plate Restaurant

export const restaurantInfo = {
  name: "Big Plate",
  tagline: "Big flavors, fresh ingredients, and portions that never disappoint",
  phone: "(555) 123-4567",
  email: "hello@bigplate.com",
  address: "123 Main Street, Downtown District",
  city: "Metropolitan City",
  hours: {
    weekday: "11:00 AM - 10:00 PM",
    weekend: "10:00 AM - 11:00 PM"
  },
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#"
  }
};

export const menuItems = {
  starters: [
    {
      id: 1,
      name: "Crispy Wings Platter",
      description: "Buffalo, BBQ, or garlic parmesan - served with ranch and celery",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7"
    },
    {
      id: 2,
      name: "Loaded Nachos Supreme",
      description: "House-made tortilla chips, melted cheese, jalapeños, sour cream, guacamole",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d"
    },
    {
      id: 3,
      name: "Artisan Bruschetta",
      description: "Toasted ciabatta, fresh tomatoes, basil, balsamic glaze",
      price: 10.99,
      image: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg"
    }
  ],
  mains: [
    {
      id: 4,
      name: "The Big Plate Burger",
      description: "Double patty, aged cheddar, caramelized onions, special sauce, brioche bun, served with fries",
      price: 18.99,
      featured: true,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      id: 5,
      name: "Grilled Ribeye Steak",
      description: "12oz ribeye, garlic butter, roasted vegetables, mashed potatoes",
      price: 32.99,
      featured: true,
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e"
    },
    {
      id: 6,
      name: "Truffle Mushroom Pasta",
      description: "Fettuccine, wild mushrooms, truffle cream sauce, parmesan",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
    },
    {
      id: 7,
      name: "Grilled Salmon Bowl",
      description: "Atlantic salmon, quinoa, avocado, edamame, sesame ginger dressing",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
    },
    {
      id: 8,
      name: "BBQ Pulled Pork Sandwich",
      description: "Slow-cooked pork, house BBQ sauce, coleslaw, pickles, texas toast",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1619899704888-ba02f2a6f58f"
    },
    {
      id: 9,
      name: "Vegetarian Buddha Bowl",
      description: "Roasted vegetables, chickpeas, tahini dressing, mixed greens, quinoa",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1623073284788-0d846f75e329"
    }
  ],
  desserts: [
    {
      id: 10,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake, molten center, vanilla ice cream",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51"
    },
    {
      id: 11,
      name: "New York Cheesecake",
      description: "Classic cheesecake, berry compote, whipped cream",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1533134242820-b8f80e451e2e"
    }
  ],
  drinks: [
    {
      id: 12,
      name: "Big Plate Signature Lemonade",
      description: "Fresh squeezed lemons, mint, house-made syrup",
      price: 5.99
    },
    {
      id: 13,
      name: "Craft Sodas",
      description: "Rotating selection of artisan sodas",
      price: 4.99
    },
    {
      id: 14,
      name: "Fresh Brewed Iced Tea",
      description: "Sweetened or unsweetened",
      price: 3.99
    }
  ]
};

export const features = [
  {
    title: "Fresh Ingredients",
    description: "Locally sourced produce daily",
    icon: "leaf"
  },
  {
    title: "Generous Portions",
    description: "We live up to our name—no one leaves hungry",
    icon: "utensils"
  },
  {
    title: "Great Atmosphere",
    description: "Perfect for families, friends, and foodies",
    icon: "heart"
  }
];

export const services = [
  {
    title: "Private Dining & Parties",
    subtitle: "Celebrate with Us",
    description: "Planning a birthday, anniversary, or office gathering? We have the space to host you. Let us take care of the food while you enjoy the company. We offer customizable set menus for groups of 10 or more.",
    icon: "users",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    title: "Takeout & Delivery",
    subtitle: "Big Flavors at Home",
    description: "Can't make it to the restaurant? No problem. Get your favorite Big Plate dishes delivered right to your doorstep. We ensure our packaging keeps your meal hot and fresh.",
    icon: "truck",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2"
  },
  {
    title: "Catering",
    subtitle: "Let Us Cater Your Event",
    description: "Bring the Big Plate experience to your wedding, corporate event, or home party. We offer buffet and plated catering options tailored to your budget.",
    icon: "chefHat",
    image: "https://images.pexels.com/photos/248413/pexels-photo-248413.jpeg"
  }
];

// Mock reservation submissions (stored in localStorage)
export const saveReservation = (reservation) => {
  const existing = JSON.parse(localStorage.getItem('reservations') || '[]');
  const newReservation = {
    ...reservation,
    id: Date.now(),
    createdAt: new Date().toISOString()
  };
  existing.push(newReservation);
  localStorage.setItem('reservations', JSON.stringify(existing));
  return newReservation;
};

export const getReservations = () => {
  return JSON.parse(localStorage.getItem('reservations') || '[]');
};