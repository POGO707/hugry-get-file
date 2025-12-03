export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Rolls' | 'Chicken' | 'Veg' | 'Burgers' | 'Kids' | 'Beverages' | 'Shawarma' | 'Wraps' | 'Chinese' | 'Biryani' | 'Starters';
  bestseller?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: 'Google' | 'Zomato' | 'Swiggy';
}

export interface NavLink {
  label: string;
  path: string;
}