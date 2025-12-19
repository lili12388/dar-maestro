import { MapPin, ShoppingBag, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 md:pt-32 pb-24 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="gradient-text">PANINOTECA</span>
              <br />
              Lunch, Dinner Brunch, Drinks
            </h1>

            <p className="text-xl md:text-2xl font-bold text-primary italic">
              Ti senti cazzuto? Vieni a provare subito i panini Der Maestro! 🍔😋
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Discover the true taste of Rome. Fresh ingredients, artisanal recipes, and a warm welcome in the heart of
              Testaccio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-6 py-5 glow-button"
              >
                <a href="tel:+393246370889">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  ORDER NOW
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-6 py-5 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent bg-transparent neon-border"
              >
                <a href="https://maps.app.goo.gl/MEhGANgfC2fE76eK7" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.7</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">90+</div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto float-animation">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-primary/20">
                <img
                  src="/4.jpg"
                  alt="Delicious Roman sandwich"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 border border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Fresh Daily</div>
                    <div className="text-sm text-muted-foreground">Made to order</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
