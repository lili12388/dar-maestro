import { MapPin, Phone, Clock, ShoppingBag, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">LOCATION</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find <span className="gradient-text">Dar Maestro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're located in the heart of Testaccio, one of Rome's most authentic neighborhoods.
          </p>
        </div>

        {/* Restaurant Street View Photo */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-primary/30 shadow-2xl neon-border">
            <img
              src="/street view.jpg"
              alt="Dar Maestro Restaurant Street View"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                Visit Us in <span className="gradient-text">Testaccio</span>
              </h3>
              <p className="text-lg text-muted-foreground">Via Giovanni Branca, 96 - Rome's authentic neighborhood</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">{/* Map */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden neon-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.023449956857!2d12.473056476547943!3d41.87564537123038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a42f8b8e3b%3A0x7c8c8a8b8e8b8e8b!2sVia%20Giovanni%20Branca%2C%2096%2C%2000153%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dar Maestro location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-primary/50 transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Via Giovanni Branca, 96
                    <br />
                    00153 Rome, Italy
                    <br />
                    Testaccio neighborhood
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-accent/50 transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Phone</h3>
                  <a
                    href="tel:+393246370889"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    +39 324 637 0889
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-accent/50 transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Email</h3>
                  <a
                    href="mailto:info@darmaestro.it"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    info@darmaestro.it
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-primary/50 transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Saturday: 10:00 – 20:00
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold glow-button flex-1"
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
                className="border-accent/50 text-accent hover:bg-accent/10 bg-transparent flex-1"
              >
                <a href="https://maps.app.goo.gl/JzuLg4MRFtfs3Fik8" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
