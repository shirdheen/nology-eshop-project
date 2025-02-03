## Demo and Snippets

- **Hosted Link:**
- **Screenshots:**

## Requirements/Purpose

### MVP

- Display a catalogue of desserts fetched from Firebase Firestore.
- Users can view a detailed dessert page with variant selection and stock tracking.
- A shopping cart pagwe with add, remove, and update quantity functionalities.
- The cart page refreshes on checkout.
- Track and updates stock dynamically as items are added/removed from the cart.
- A carousel in the homepage showing featured desserts.

### Purpose

- This project is a React-based e-commerce website for a dessert shop. It allows customers to explore a variety of desserts, add items to cart, and proceed to checkout while dynamically updating the stock.

### Stacks Used

- **Frontend:** React.js, React Router, SCSS
- **State Management:** React Context API
- **Backend/Database:** Firebase Firestore

## Build Steps

1. Clone the repository

```bash
git clone
```

2. Install dependencies

```bash
npm install
```

3. Run the development server.

```bash
npm run dev
```

## Design Goals/Approach

- **Design Goals:**

  - Create an aesthetic and enganging dessert shop interface.
  - Ensure seamless user experience (UX) with smooth animations and transitions
  - Maintain clean and modular code structure with reusable components.

- **Implementation Choices:**
  - React Roter for navigation between pages.
  - Context API for managing cart state across the application.
  - SCSS modules for styling with maintainable and scoped CSS.
  - Firebase Firestore to store and fetch real-time data of desserts.

## Features

- **Desserts Showcase Page:** Displays all desserts dynamically from Firestore.
- **Dessert Details Page:** Shows description, image, variants, stock and price.
- **Dynamic Stock Updates:** Adjusts stock when items are added/removed from the cart.
- **Shopping Cart Page:** Add, update, or remove items before checkout.
- **Favourite Labels:** Highlights top-selling desserts.
- **Carousel Component:** Showcases featured desserts with smooth transitions.

## Known Issues

- UI needs optimisation on certain screen sizes.

## Bugs to be Fixed

## Future Goals

- User authentication, allowing users to create accounts and save carts.
- Payment integration
- Wishlist feature
