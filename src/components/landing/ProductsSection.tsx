import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import proteinPowder from "@/assets/protein-powder.png";
import creatine from "@/assets/creatine.png";
import preWorkout from "@/assets/pre-workout.png";
import massGainer from "@/assets/mass-gainer.png";

const products = [
  {
    name: "Action Whey",
    category: "Protein Powder",
    description: "30g protein, 5g BCAAs, ultra-fast absorption for maximum muscle recovery.",
    price: "$49.99",
    image: proteinPowder,
    badge: "Best Seller",
  },
  {
    name: "Action Creatine",
    category: "Creatine Monohydrate",
    description: "Micronized for superior absorption. Boost strength, power, and endurance.",
    price: "$34.99",
    image: creatine,
    badge: null,
  },
  {
    name: "Action Pre",
    category: "Pre-Workout",
    description: "Explosive energy, laser focus, and skin-splitting pumps every session.",
    price: "$44.99",
    image: preWorkout,
    badge: "New Formula",
  },
  {
    name: "Action Mass",
    category: "Mass Gainer",
    description: "1,250 calories, 50g protein. The ultimate formula for serious size gains.",
    price: "$59.99",
    image: massGainer,
    badge: null,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Premium <span className="text-gradient">Performance</span> Fuel
          </h2>
          <p className="text-muted-foreground text-lg">
            Scientifically formulated supplements trusted by athletes worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded-full">
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 bg-gradient-to-b from-muted/50 to-background flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {/* Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[64px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary uppercase tracking-wider font-medium">
                  {product.category}
                </span>
                <h3 className="font-display text-xl font-bold mt-1 mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button variant="hero" size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
