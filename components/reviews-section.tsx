import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const reviews = [
  {
    text: "Juiciest porchetta I've tried in Rome. All ingredients are super high quality, I don't think there's another sandwich place that tops this. Traditional flavors, great prices, friendly service.",
    author: "Claire Smith",
    source: "Google",
    rating: 5,
    images: ["/reviews/unnamed.jpg", "/reviews/unnamed-1.jpg"], // Claire has 2 photos
  },
  {
    text: "Visited Rome from Canada, and we ate at this panini shop multiple times over our stay. The store owner is kind, humble, and friendly. He gave us tons of tips for exploring Rome and the sandwiches were amazing!",
    author: "Jake Eickmeier",
    source: "Google",
    rating: 5,
    images: ["/reviews/unnamed-2.jpg"],
  },
  {
    text: "We stumbled on this little place in Testaccio our first day in Rome. HIGHLY RECOMMENDED, great sandwich on a fresh bun, great conversation with Maestro himself. Worth looking for!",
    author: "Mike O",
    source: "Google",
    rating: 5,
    images: ["/reviews/unnamed-3.jpg"],
  },
  {
    text: "Bread could be slightly better, but great porchetta and fresh ingredients, from an enthusiastic owner. Would go again.",
    author: "Richard Q",
    source: "Google",
    rating: 5,
    images: [], // No photos
  },
  {
    text: "Scrumptious Italian sandwiches with a super friendly owner! Highly recommended! Dar Maestro! 👌🥪",
    author: "Hadi Re",
    source: "Google",
    rating: 5,
    images: ["/reviews/unnamed-4.jpg"],
  },
  {
    text: "Amazing craft and fresh sandwiches. Taste make my day 🙌",
    author: "Pawel",
    source: "Google",
    rating: 5,
    images: ["/reviews/unnamed-5.jpg", "/reviews/unnamed-6.jpg", "/reviews/unnamed-7.jpg"], // Pawel has 3 photos
  },
  {
    text: "Ottima paninoteca aperta da poco nel quartiere. Ottimi i panini con porchetta, vari salumi e molta scelta di verdure. Tutti ingredienti freschi e genuini. Proprietario molto simpatico e gentile!",
    author: "Filippo Marinelli",
    source: "Google",
    rating: 5,
    images: [],
  },
  {
    text: "Il gestore, Franco Franchino è stato stra simpatico. Panini buoni, pieni e con prodotti di qualità. Attento ai bisogni del cliente. Lunga vita a Dar Maestro e a Franco Franchino",
    author: "Gabriele Coviello",
    source: "Google",
    rating: 5,
    images: [],
  },
  {
    text: "Oltre al locale molto curato, Il maestro è anche uno chef formidabile ed è sempre attento alle combinazioni di gusti dei suoi panini. Ti accoglie con il sorriso, il profumo della porchetta Cioli e del pane fresco di Testaccio.",
    author: "Alessandro Selvaggi",
    source: "Google",
    rating: 5,
    images: [],
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-accent">REVIEWS</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>

          {/* Rating display */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${i < 4 ? "text-primary fill-primary" : "text-primary/50 fill-primary/50"}`}
                />
              ))}
            </div>
            <span className="text-4xl font-bold text-foreground">4.7</span>
            <span className="text-muted-foreground">/ 5</span>
          </div>
          <p className="text-muted-foreground mt-2">Based on 90+ reviews</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 relative group hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              <div className="mb-4">
                <p className="font-semibold text-foreground text-sm mb-2">{review.author}</p>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-4 flex-grow text-sm">"{review.text}"</p>

              {/* Review images */}
              {review.images && review.images.length > 0 && (
                <div className={`grid gap-2 ${review.images.length === 1 ? 'grid-cols-1' : review.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                  {review.images.map((imageSrc, imgIndex) => (
                    <div key={imgIndex} className="rounded-lg overflow-hidden border border-border/50 aspect-video bg-muted/20 relative">
                      <Image
                        src={imageSrc}
                        alt={`${review.author}'s review photo ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <p className="text-muted-foreground text-sm">Read all our reviews:</p>
          <Button
            asChild
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
          >
            <a href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" target="_blank" rel="noopener noreferrer">
              Read on Google
            </a>
          </Button>
          <Button asChild variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 bg-transparent">
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer">
              Read on Tripadvisor
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
