import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-secondary/80 border-t border-border">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to <span className="gradient-text">Order?</span>
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Call us now and taste the best Roman sandwiches in Testaccio!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 glow-button"
          >
            <a href="tel:+393246370889">
              <ShoppingBag className="w-6 h-6 mr-2" />
              ORDER NOW - +39 324 637 0889
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              <span className="gradient-text">DAR</span>
              <span className="text-foreground"> MAESTRO</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Authentic Roman sandwiches in the heart of Testaccio. Fresh ingredients, artisanal recipes, warm
              hospitality.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="#location" className="text-muted-foreground hover:text-primary transition-colors">
                Find Us
              </a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Via Giovanni Branca, 96</p>
              <p>00153 Rome, Italy</p>
              <p>
                <a href="tel:+393246370889" className="hover:text-primary transition-colors">
                  +39 324 637 0889
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dar Maestro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
