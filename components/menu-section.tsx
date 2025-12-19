import { ShoppingBag, Flame, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    name: "Porchetta Classico",
    description: "Slow-roasted pork with herbs, rosemary, and crispy skin",
    price: "€8",
    image: "/placeholder.svg?height=300&width=400",
    badge: "BESTSELLER",
    badgeColor: "bg-primary",
  },
  {
    name: "Mortadella e Pistacchio",
    description: "Bologna mortadella with pistachio and stracciatella",
    price: "€9",
    image: "/placeholder.svg?height=300&width=400",
    badge: "POPULAR",
    badgeColor: "bg-accent",
  },
  {
    name: "Prosciutto Crudo",
    description: "Aged prosciutto with fresh mozzarella and arugula",
    price: "€10",
    image: "/placeholder.svg?height=300&width=400",
    badge: null,
    badgeColor: null,
  },
  {
    name: "Capocollo Piccante",
    description: "Spicy cured pork neck with pecorino romano",
    price: "€9",
    image: "/placeholder.svg?height=300&width=400",
    badge: "SPICY",
    badgeColor: "bg-destructive",
    icon: Flame,
  },
  {
    name: "Vegetariano",
    description: "Grilled vegetables, fresh tomatoes, and buffalo mozzarella",
    price: "€8",
    image: "/placeholder.svg?height=300&width=400",
    badge: "VEGGIE",
    badgeColor: "bg-green-500",
    icon: Leaf,
  },
  {
    name: "Tonno e Carciofi",
    description: "Italian tuna with marinated artichokes and olives",
    price: "€9",
    image: "/placeholder.svg?height=300&width=400",
    badge: null,
    badgeColor: null,
  },
]

const drinks = [
  { name: "Acqua Naturale / Frizzante", price: "€2" },
  { name: "Coca-Cola / Fanta", price: "€3" },
  { name: "Birra Peroni", price: "€4" },
  { name: "Vino della Casa", price: "€5" },
  { name: "Caffè Espresso", price: "€1.5" },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">OUR MENU</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Handcrafted <span className="gradient-text">Perfection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, authentic, delicious. Made fresh daily with the finest Roman ingredients.
          </p>
        </div>

        {/* Menu Grid with Photos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.badge && (
                  <div
                    className={`absolute top-4 left-4 ${item.badgeColor} px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1`}
                  >
                    {item.icon && <item.icon className="w-3 h-3" />}
                    {item.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">{item.name}</h3>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

                {/* Order button */}
                <Button
                  asChild
                  className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 font-semibold transition-all duration-300"
                >
                  <a href="tel:+393246370889">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Order Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Drinks Section */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              <span className="text-accent">Drinks</span> & Beverages
            </h3>
            <div className="space-y-4">
              {drinks.map((drink) => (
                <div
                  key={drink.name}
                  className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                >
                  <span className="text-foreground">{drink.name}</span>
                  <span className="text-primary font-semibold">{drink.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 glow-button"
          >
            <a href="tel:+393246370889">
              <ShoppingBag className="w-6 h-6 mr-2" />
              ORDER NOW - Call Us!
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Call +39 324 637 0889 to place your order</p>
        </div>
      </div>
    </section>
  )
}
