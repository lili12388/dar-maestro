const galleryImages = [
  { src: "/placeholder.svg?height=600&width=800", alt: "Porchetta sandwich", size: "large" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Dar Maestro storefront", size: "small" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Prosciutto sandwich", size: "small" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Restaurant interior", size: "medium" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Mortadella sandwich", size: "small" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Fresh ingredients", size: "medium" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary">GALLERY</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Glimpse of <span className="gradient-text">Dar Maestro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh ingredients, handcrafted sandwiches, and the warm atmosphere that makes our paninoteca special.
          </p>
        </div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="col-span-2 row-span-2">
            <div className="aspect-square rounded-2xl overflow-hidden group neon-border">
              <img
                src={galleryImages[0].src || "/placeholder.svg"}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden group border border-border/50 hover:border-primary/50 transition-colors duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
