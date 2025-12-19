import { Sparkles, Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider">
            <span className="text-muted-foreground">Some of the </span>
            <span className="gradient-text">Best Rome Experiences</span>
          </h3>
          <p className="text-xl md:text-2xl text-accent mt-2 font-medium">From Our Atelier to Your Table</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden neon-border">
                  <img
                    src="/3.jpg"
                    alt="Chef preparing sandwich"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-primary/20">
                  <img
                    src="/7.jpg"
                    alt="Fresh ingredients"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden border border-primary/20">
                  <img
                    src="/plat 1.jpg"
                    alt="Restaurant interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden neon-border">
                  <img
                    src="/pic2.jpg"
                    alt="Deli counter"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">OUR STORY</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Taste of <span className="gradient-text">Roman Tradition</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                At Dar Maestro, we believe that a great sandwich tells a story. Nestled in the historic Testaccio
                neighborhood, our paninoteca celebrates the authentic flavors of Roman cuisine.
              </p>
              <p>
                Every sandwich we craft uses the freshest local ingredients—from crusty bread baked that morning to
                cured meats and cheeses sourced from trusted Roman suppliers.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Top Rated</div>
                  <div className="text-sm text-muted-foreground">4.7 on Tripadvisor</div>
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Loved By All</div>
                  <div className="text-sm text-muted-foreground">Locals & Tourists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
