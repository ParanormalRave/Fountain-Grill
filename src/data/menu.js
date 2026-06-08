// Full menu sourced from https://fountaingrillva.com/menus/
// Organized by tab -> sections -> items. Each item: { name, price, description? }

export const menuTabs = [
  { key: 'food', label: 'Food Menu' },
  { key: 'drink', label: 'Drink Menu' },
  { key: 'kids', label: "Kid's Menu" },
  { key: 'catering', label: 'Catering Menu' },
];

export const menu = {
  food: {
    note: 'Sub Parmesan truffle fries or sweet potato fries +$2.00 · House or Caesar Salad +$4.99',
    sections: [
      {
        title: 'Appetizers',
        items: [
          { name: 'Fried Mozzarella', price: '$12.99', description: 'Hand-breaded fresh mozzarella with housemade marinara.' },
          { name: 'Chicken Egg Rolls', price: '$12.99', description: 'Handmade with chargrilled chicken, black beans & corn, Southwest Ranch.' },
          { name: 'Parmesan Truffle Fries', price: '$8.99', description: 'Crispy fries with Parmesan, truffle oil & parsley, Southwest Ranch.' },
          { name: 'Boom Boom Shrimp', price: '$13.99', description: 'Hand-breaded fried shrimp tossed in our housemade Boom Boom sauce.' },
        ],
      },
      {
        title: 'Wings',
        note: 'Choice of Ranch or Bleu Cheese · Sauces: Mild, Medium, Hot, Old Bay, Lemon Pepper, Korean, Naked with Seasoning, Plain',
        items: [
          { name: 'Boneless Wings (8)', price: '$11.50' },
          { name: 'Boneless Wings (12)', price: '$15.50' },
          { name: 'Bone-In Wings (6)', price: '$12.99' },
          { name: 'Bone-In Wings (12)', price: '$20.99' },
        ],
      },
      {
        title: 'Hand-Crafted Burgers',
        note: '7 oz. Angus patties with lettuce, tomato & onion. One side included.',
        items: [
          { name: 'Classic Cheeseburger', price: '$14.99', description: 'Classic burger with melted Cheddar.' },
          { name: 'Bacon Cheddar Burger', price: '$16.99', description: 'Crispy bacon and Cheddar on brioche.' },
          { name: 'Bleu Cheese Bacon Burger', price: '$16.99', description: 'Bacon and Bleu cheese crumbles on brioche.' },
          { name: 'Baja Burger', price: '$17.99', description: 'Pepper Jack, chorizo, jalapeños & chipotle mayo on brioche.' },
          { name: 'Provolone Onion Burger', price: '$15.99', description: 'Provolone with caramelized onions on brioche.' },
          { name: 'Cowboy Burger', price: '$17.99', description: 'BBQ sauce, Cheddar, bacon & a fried egg on brioche.' },
          { name: 'Fountain Burger', price: '$17.99', description: 'Sun-dried tomato aioli, bacon & Pepper Jack on brioche.' },
          { name: 'Impossible Burger', price: '$17.99', description: 'Plant-based patty with Cheddar & caramelized onions on brioche.' },
        ],
      },
      {
        title: 'Sandwiches',
        note: 'One side included.',
        items: [
          { name: "Jason's Chicken Sandwich", price: '$17.99', description: 'Grilled chicken, bacon, American cheese, BBQ & lettuce.' },
          { name: 'California Chicken Sandwich', price: '$18.99', description: 'Grilled chicken, bacon, guacamole, Pepper Jack & chipotle mayo.' },
          { name: 'Chicken Parmesan Sandwich', price: '$16.99', description: 'Hand-breaded chicken, marinara & Provolone.' },
          { name: 'Philly Cheesesteak', price: '$15.99', description: 'Lettuce, tomatoes, grilled onions & mayo.' },
          { name: 'Grilled Cheese', price: '$14.99', description: 'American, Cheddar, bacon & grilled tomatoes on sourdough.' },
          { name: 'French Dip', price: '$16.99', description: 'Steak tenderloin, caramelized onions & Provolone on a sub roll.' },
          { name: 'Turkey BLT', price: '$16.99', description: 'Turkey, bacon, lettuce, tomato & mayo on sourdough. Add cheese +$1.50.' },
          { name: 'Classic Reuben', price: '$18.99', description: 'Corned beef, Swiss, sauerkraut & Thousand Island on rye.' },
        ],
      },
      {
        title: 'Entrees',
        items: [
          { name: 'BBQ Ribs', price: '$18.99', description: 'Baby back ribs with signature BBQ sauce. One side.' },
          { name: 'BBQ Ribs + Grilled Shrimp', price: '$26.99', description: 'Ribs paired with seasoned grilled shrimp. One side.' },
          { name: 'Beef Steak Tenderloin', price: '$23.99', description: 'With mashed potatoes & sautéed green beans.' },
          { name: 'Plank Salmon', price: '$25.99', description: 'Cedar plank-grilled salmon. Two sides.' },
          { name: 'Fish & Chips', price: '$23.99', description: 'Beer-battered Cod with fries, tartar sauce & lemon.' },
        ],
      },
      {
        title: 'Pasta',
        items: [
          { name: 'Blackened Chicken Alfredo', price: '$18.99', description: 'Creamy alfredo, linguini & blackened chicken.' },
          { name: 'Pesto Pasta with Shrimp', price: '$21.99', description: 'Shrimp, sun-dried tomatoes & linguini in creamy pesto.' },
          { name: 'Chicken Parmesan', price: '$20.99', description: 'Hand-breaded chicken, marinara & Provolone over linguine.' },
        ],
      },
      {
        title: 'Bowls',
        items: [
          { name: 'Korean Salmon Bowl', price: '$23.99', description: 'Glazed salmon over rice with lettuce, beans, corn & guacamole.' },
          { name: 'Chicken Bowl', price: '$18.99', description: 'Grilled chicken over rice with lettuce, beans, corn, guacamole & chimichurri.' },
          { name: 'Shrimp Bowl', price: '$19.99', description: 'Grilled shrimp over rice with lettuce, beans, corn, guacamole & chimichurri.' },
          { name: 'Steak Bowl', price: '$22.99', description: 'Steak tenderloin over rice with lettuce, beans, corn, guacamole & chimichurri.' },
        ],
      },
      {
        title: 'Salads',
        note: 'Add Chicken +$5.99 · Salmon +$10.99 · Grilled Shrimp (8) +$7.99',
        items: [
          { name: 'Cobb Salad', price: '$17.99', description: 'Romaine, chicken, eggs, tomatoes, bacon, cheese, croutons & Ranch.' },
          { name: 'House Salad', price: '$9.99', description: 'Mixed greens, tomatoes, cabbage, onion, croutons, cucumber & cheese.' },
          { name: 'Caesar Salad', price: '$9.99', description: 'Romaine, croutons & shaved Parmesan.' },
          { name: 'Greek Salad', price: '$13.99', description: 'Romaine, tomatoes, cucumbers, olives, onions, banana pepper, feta & vinaigrette.' },
          { name: 'BBQ Chopped Salad', price: '$18.99', description: 'Romaine, tomatoes, cheese, corn, beans, cucumbers, BBQ chicken & BBQ Ranch.' },
        ],
      },
      {
        title: 'Soup & Sides',
        items: [
          { name: 'Soup of the Day', price: '$8.99', description: 'Served with crackers.' },
          { name: 'Fries', price: '$4.99' },
          { name: 'Sweet Potato Fries', price: '$5.99' },
          { name: 'Rice', price: '$4.99' },
          { name: 'Mashed Potatoes', price: '$4.99' },
          { name: 'Green Beans', price: '$4.99' },
          { name: 'Broccoli', price: '$4.99' },
          { name: 'Coleslaw', price: '$4.99' },
        ],
      },
      {
        title: 'Desserts',
        items: [
          { name: 'Banana Cake', price: '$8.99' },
          { name: 'Chocolate Mousse Cake', price: '$8.99' },
          { name: 'Dessert of the Day', price: 'Ask your server' },
        ],
      },
    ],
  },

  drink: {
    sections: [
      {
        title: 'Happy Hour',
        items: [
          { name: 'Margarita', price: '$6.99' },
          { name: 'House Wine', price: '$5.99' },
          { name: 'House Rail', price: '$4.99' },
          { name: 'Miller Lite', price: '$4.99' },
          { name: 'Mimosa', price: '$6.50' },
        ],
      },
      {
        title: 'Signature Cocktails',
        items: [
          { name: 'Signature Margarita' },
          { name: 'Spicy Coconut Margarita' },
          { name: 'Signature Mojito' },
          { name: 'Bourbon Peach Punch' },
        ],
      },
      {
        title: 'Traditional Cocktails',
        items: [
          { name: 'Cosmopolitan' },
          { name: 'Margarita' },
          { name: 'Mojito' },
          { name: 'Old Fashioned' },
          { name: 'Moscow Mule' },
          { name: 'Long Island Iced Tea' },
          { name: 'Lemon Drop Martini' },
          { name: 'Manhattan' },
          { name: 'Orange Crush' },
        ],
      },
      {
        title: 'Beer on Tap',
        items: [
          { name: 'Allagash White' },
          { name: 'Pacifico' },
          { name: 'Miller Lite' },
          { name: 'Solace Partly Cloudy IPA' },
          { name: 'Lagunitas IPA' },
          { name: 'Seasonal Draft' },
        ],
      },
      {
        title: 'Bottled Beer',
        items: [
          { name: 'Bud Light' },
          { name: 'Coors Light' },
          { name: 'Heineken' },
          { name: 'Corona Extra' },
          { name: 'Stella Artois' },
          { name: 'Michelob Ultra' },
          { name: 'Angry Orchard' },
          { name: 'White Claw (Mango / Blackberry)' },
          { name: 'Guinness' },
          { name: 'Raspberry Empress' },
        ],
      },
      {
        title: 'Wine — White & Rosé',
        items: [
          { name: 'House Chardonnay' },
          { name: 'House Pinot Grigio' },
          { name: 'Juggernaut Chardonnay' },
          { name: 'Oko Organic Pinot Grigio' },
          { name: 'Overstone Sauvignon Blanc' },
          { name: 'Prosecco' },
          { name: 'Mon Amour Rosé' },
        ],
      },
      {
        title: 'Wine — Red',
        items: [
          { name: 'House Cabernet Sauvignon' },
          { name: 'House Merlot' },
          { name: 'Juggernaut Pinot Noir' },
          { name: 'Juggernaut Cabernet Sauvignon' },
        ],
      },
    ],
  },

  kids: {
    note: 'Sides: fries, mashed potatoes or green beans. Upgrade to truffle fries, sweet potato fries or mac & cheese +$2.00.',
    sections: [
      {
        title: 'For the Kids',
        items: [
          { name: 'Classic Hamburger', price: '$10.99', description: 'A well-done plain burger with one side.' },
          { name: 'Cheeseburger', price: '$11.99', description: 'Well-done cheeseburger with one side.' },
          { name: 'Chicken Bites', price: '$8.99', description: 'Fried chicken bites with one side.' },
          { name: 'Grilled Cheese', price: '$7.99', description: 'Served with a side of your choosing.' },
          { name: 'Linguini with Marinara', price: '$7.99', description: 'Pasta with housemade marinara & Parmesan. Add chicken +$6.99.' },
          { name: 'Linguini with Butter', price: '$7.99', description: 'Pasta in a butter sauce. Add chicken +$6.99.' },
          { name: 'House Salad with Grilled Chicken', price: '$9.99', description: 'Mixed greens, cheese, tomatoes, croutons, cucumbers & Ranch.' },
        ],
      },
    ],
  },

  catering: {
    note: 'Prices exclude sales tax. Pick-Up, Full-Service & Delivery Deluxe available. Please give 48 hours notice for cancellations.',
    sections: [
      {
        title: 'Appetizers (Feeds 10)',
        items: [
          { name: 'Chicken Egg Rolls', price: '$65', description: 'Char-grilled chicken, black beans & corn, Southwest Ranch.' },
          { name: 'Shrimp Cocktail', price: '$50', description: 'Poached chilled grilled shrimp with homemade cocktail sauce.' },
          { name: 'Caprese Skewers', price: '$30', description: 'Mozzarella, cherry tomato & basil with balsamic glaze.' },
          { name: 'Boom Boom Shrimp', price: '$70', description: 'Fried shrimp with Boom Boom sauce.' },
        ],
      },
      {
        title: 'Wings',
        note: 'Choice of Ranch or Bleu Cheese · Mild, Medium, Hot, BBQ, Korean, Lemon Pepper, Old Bay, Naked, Plain',
        items: [
          { name: 'Bone-In Wings (50)', price: '$85' },
          { name: 'Bone-In Wings (100)', price: '$160' },
          { name: 'Boneless Wings (50)', price: '$60' },
          { name: 'Boneless Wings (100)', price: '$115' },
        ],
      },
      {
        title: 'Sandwiches (Min. 10, per person)',
        items: [
          { name: 'Turkey BLT', price: '$13', description: 'Roasted turkey, bacon, lettuce & tomato on sourdough.' },
          { name: 'California Chicken Sandwich', price: '$16', description: 'Grilled chicken, bacon, Pepper Jack, guacamole, lettuce & chipotle mayo.' },
          { name: "Jason's Chicken Sandwich", price: '$15', description: 'Grilled chicken, bacon, Cheddar, lettuce, tomato & BBQ.' },
        ],
      },
      {
        title: 'Burger Bar (Min. 10, per person)',
        note: 'American cheese, lettuce, tomato, onion & condiments.',
        items: [
          { name: 'Classic Cheeseburger', price: '$12', description: 'Add Bacon +$1.99 · Grilled Onions +$1 · Guacamole +$3.99.' },
          { name: 'Impossible Burger', price: '$15', description: 'Add Grilled Onions +$1 · Guacamole +$3.99.' },
        ],
      },
      {
        title: 'Entrees (Feeds 10)',
        items: [
          { name: 'BBQ Ribs', price: '$160', description: 'With BBQ sauce.' },
          { name: 'Grilled Chicken', price: '$90', description: 'With BBQ sauce.' },
          { name: 'Plank Salmon', price: '$230', description: 'With Korean sauce.' },
          { name: 'Linguini Pasta', price: '$100', description: 'Alfredo, Marinara or Pesto. Add Chicken +$90 · Shrimp +$100.' },
          { name: 'Chicken Parmesan', price: '$180', description: 'Breaded chicken, tomato sauce & Provolone over linguine.' },
          { name: 'Grilled Shrimp', price: '$90', description: 'With cocktail sauce & lemons.' },
          { name: 'Beef Tenderloin Steak', price: '$230', description: 'With steak sauce.' },
        ],
      },
      {
        title: 'Packages (Min. 10, per person)',
        note: 'Entree + 1 side + Caesar or House salad, served family-style.',
        items: [
          { name: 'Cheeseburger', price: '$17' },
          { name: 'Impossible Burger', price: '$20' },
          { name: 'Turkey BLT', price: '$19' },
          { name: 'Grilled Chicken Sandwich', price: '$20' },
          { name: 'Plank Salmon', price: '$28' },
          { name: 'Beef Tenderloin Steak', price: '$26' },
          { name: 'Grilled Chicken Breast', price: '$16' },
          { name: 'BBQ Ribs', price: '$21' },
          { name: 'Grilled Shrimp', price: '$17' },
          { name: 'Chicken Parmesan', price: '$23' },
        ],
      },
      {
        title: 'Bowls (Min. 10, per person)',
        note: 'Rice, lettuce, black beans, guacamole & chimichurri.',
        items: [
          { name: 'Korean Salmon', price: '$24' },
          { name: 'Chicken', price: '$19' },
          { name: 'Shrimp', price: '$20' },
          { name: 'Steak', price: '$23' },
        ],
      },
      {
        title: 'Salads (Feeds 10)',
        note: 'Add Chicken +$90 · Salmon +$230 · Shrimp +$100 · Steak +$230',
        items: [
          { name: 'House Salad', price: '$50', description: 'Mixed greens, tomatoes, cabbage, red onion, croutons, cucumber & cheese.' },
          { name: 'Caesar Salad', price: '$50', description: 'Romaine, croutons & Parmesan.' },
          { name: 'Greek Salad', price: '$70', description: 'Romaine, tomatoes, cucumbers, kalamata olives, red onion, banana pepper & feta.' },
          { name: 'Charred Cobb Salad', price: '$90', description: 'Romaine, grilled chicken, eggs, tomatoes, bacon, cheese, croutons & Ranch.' },
          { name: 'BBQ Chopped Salad', price: '$90', description: 'Romaine, tomatoes, cheese, corn, beans, cucumbers, BBQ chicken & BBQ Ranch.' },
        ],
      },
      {
        title: 'Sides (Feeds 10)',
        items: [
          { name: 'Coleslaw', price: '$35' },
          { name: 'Green Beans', price: '$40' },
          { name: 'Mashed Potatoes', price: '$50' },
          { name: 'Jasmine Rice', price: '$35' },
          { name: 'Broccoli', price: '$35' },
        ],
      },
      {
        title: 'Desserts & Beverages',
        items: [
          { name: 'Chocolate Chip Cookies', price: '$15' },
          { name: 'Chocolate Mousse Cake', price: '$90' },
          { name: 'Banana Cake', price: '$90' },
          { name: 'Bottled Water', price: '$2' },
          { name: 'Assorted Canned Soda', price: '$3', description: 'Coke, Diet Coke, Sprite.' },
          { name: 'Bottled Root Beer', price: '$4' },
          { name: 'Case of Bottled Water', price: '$24' },
        ],
      },
    ],
  },
};

export default menu;
