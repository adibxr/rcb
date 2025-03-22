
import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

const products: ProductProps[] = [
  {
    id: 1,
    name: "RCB Official 2023 Jersey",
    price: 1999,
    image: "https://shop.royalchallengers.com/cdn/shop/files/RCBJSY23.png",
    category: "Jerseys",
    isNew: true
  },
  {
    id: 2,
    name: "RCB Cap Red - Adult",
    price: 799,
    image: "https://shop.royalchallengers.com/cdn/shop/products/cap-red.png",
    category: "Caps"
  },
  {
    id: 3,
    name: "RCB Training T-Shirt",
    price: 1299,
    image: "https://shop.royalchallengers.com/cdn/shop/products/MG_4255.png",
    category: "Apparel",
    isSale: true,
    discount: 15
  },
  {
    id: 4,
    name: "RCB Virat Kohli Poster",
    price: 499,
    image: "https://shop.royalchallengers.com/cdn/shop/products/poster2.png",
    category: "Accessories"
  }
];

const ProductCard: React.FC<{ product: ProductProps; index: number }> = ({ product, index }) => {
  return (
    <div 
      className="group relative card-hover opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-rcb-darkgray">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Action buttons - appear on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <button className="p-2 rounded-full bg-white dark:bg-rcb-darkgray text-gray-700 dark:text-white hover:bg-rcb-red hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-white dark:bg-rcb-darkgray text-gray-700 dark:text-white hover:bg-rcb-red hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-white dark:bg-rcb-darkgray text-gray-700 dark:text-white hover:bg-rcb-red hover:text-white transition-colors">
            <Eye className="w-5 h-5" />
          </button>
        </div>
        
        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="inline-block bg-rcb-gold text-white text-xs px-2 py-1 rounded">New</span>
          )}
          {product.isSale && (
            <span className="inline-block bg-rcb-red text-white text-xs px-2 py-1 rounded">Sale</span>
          )}
        </div>
      </div>
      
      {/* Product info */}
      <div className="mt-4">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.category}</div>
        <h3 className="text-base font-medium">{product.name}</h3>
        <p className="mt-1 flex items-center">
          {product.isSale && product.discount ? (
            <>
              <span className="font-medium text-rcb-red">₹{(product.price * (1 - product.discount / 100)).toFixed(0)}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">₹{product.price}</span>
            </>
          ) : (
            <span className="font-medium">₹{product.price}</span>
          )}
        </p>
      </div>
    </div>
  );
};

const MerchandisePreview = () => {
  return (
    <section id="merchandise" className="section-container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-rcb-red uppercase tracking-wider mb-2 opacity-0 animate-fade-in">Official Store</p>
        <h2 className="section-heading opacity-0 animate-fade-in-delay-1">RCB Merchandise</h2>
        <p className="section-subheading opacity-0 animate-fade-in-delay-2">Show your support with official RCB merchandise.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-rcb-red to-rcb-red/80 text-white max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Get 10% Off Your First Order</h3>
          <p className="mb-6 text-white/90">Sign up for our newsletter and receive a 10% discount code for your first purchase from the RCB store.</p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white border border-white/30 focus:outline-none focus:border-white w-full"
            />
            <Button className="bg-white text-rcb-red hover:bg-white/90 font-medium px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 opacity-0 animate-fade-in-delay-4">
        <Button className="rcb-btn relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-rcb-red text-white hover:bg-rcb-red/90 transition-all shadow-lg">
          Visit Store
        </Button>
      </div>
    </section>
  );
};

export default MerchandisePreview;
