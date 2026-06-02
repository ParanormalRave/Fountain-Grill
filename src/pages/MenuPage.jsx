import { useParams, Link } from 'react-router-dom'

// const menuData = {
//   food: [
//     { name: 'Classic Eggs Benedict', price: '$14', description: 'Two poached eggs, Canadian bacon, hollandaise sauce on a toasted English muffin.' },
//     { name: 'Buttermilk Pancakes', price: '$12', description: 'Tall stack of fluffy pancakes served with maple syrup and fresh berries.' },
//     { name: 'Garden Omelette', price: '$13', description: 'Three-egg omelette with spinach, mushrooms, onions, and Swiss cheese.' },
//     { name: 'Avocado Toast', price: '$11', description: 'Smashed avocado, cherry tomatoes, and red pepper flakes on sourdough.' },
//   ],
//   drink: [
//     { name: 'Signature Burger', price: '$16', description: 'Half-pound beef patty, cheddar, lettuce, tomato, and our secret sauce.' },
//     { name: 'Grilled Chicken Caesar', price: '$15', description: 'Romaine lettuce, parmesan, croutons, and grilled chicken breast.' },
//     { name: 'Turkey Club Sandwich', price: '$14', description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo.' },
//     { name: 'Quinoa Power Bowl', price: '$14', description: 'Roasted vegetables, chickpeas, and lemon-tahini dressing.' },
//   ],
//   kids: [
//     { name: 'Grilled Ribeye Steak', price: '$32', description: '12oz steak served with garlic mashed potatoes and seasonal vegetables.' },
//     { name: 'Pan-Seared Salmon', price: '$26', description: 'Atlantic salmon with lemon-herb butter and wild rice pilaf.' },
//     { name: 'Mushroom Risotto', price: '$22', description: 'Arborio rice with wild mushrooms, parmesan, and truffle oil.' },
//     { name: 'Pasta Primavera', price: '$20', description: 'Fresh fettuccine with seasonal vegetables in a light garlic cream sauce.' },
//   ],
//   Catering: [
//     { name: 'Warm Chocolate Lava Cake', price: '$9', description: 'Served with vanilla bean gelato and raspberry coulis.' },
//     { name: 'Classic New York Cheesecake', price: '$8', description: 'With a graham cracker crust and fresh strawberry topping.' },
//     { name: 'Apple Tart Tatin', price: '$9', description: 'Caramelized apples on puff pastry with cinnamon whipped cream.' },
//     { name: 'Seasonal Sorbet', price: '$7', description: 'Three scoops of our daily rotating flavors.' },
//   ]
// };

const MenuPage = () => {
  // const { category } = useParams();
  // const currentCategory = category || 'food';
  // const items = menuData[currentCategory] || [];

  return (
    <div className='h-100vh'>

    </div>
    // <div className="bg-secondary min-h-screen py-20 px-4">
    //   <div className="max-w-4xl mx-auto">
    //     <div className="flex justify-center gap-4 mb-12 flex-wrap">
    //       {Object.keys(menuData).map((cat) => (
    //         <Link
    //           key={cat}
    //           to={`/menu/${cat}`}
    //           className={`px-6 py-2 rounded-full font-semibold transition-all ${
    //             currentCategory === cat
    //             ? 'bg-primary text-secondary shadow-md'
    //             : 'bg-neutral-light text-accent hover:bg-neutral-dark hover:text-secondary'
    //           }`}
    //         >
    //           {cat.charAt(0).toUpperCase() + cat.slice(1)}
    //         </Link>
    //       ))}
    //     </div>

    //     <h1 className="text-5xl font-serif font-bold text-accent text-center mb-16 capitalize">
    //       {currentCategory} Menu
    //     </h1>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    //       {items.map((item, index) => (
    //         <div key={index} className="border-b border-neutral-light pb-6">
    //           <div className="flex justify-between items-baseline mb-2">
    //             <h3 className="text-xl font-bold text-accent">{item.name}</h3>
    //             <span className="text-primary font-bold">{item.price}</span>
    //           </div>
    //           <p className="text-neutral-dark italic">{item.description}</p>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="mt-20 text-center">
    //       <Link to="/" className="text-primary font-semibold hover:underline">
    //         ← Back to Home
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MenuPage
