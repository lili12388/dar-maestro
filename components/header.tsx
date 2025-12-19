"use client"

import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Find Us" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Only hide/show on desktop (screens wider than 768px)
      if (window.innerWidth >= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Scrolling down - hide immediately
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show immediately
          setIsVisible(true)
        }
      } else {
        // Always visible on mobile
        setIsVisible(true)
      }

      setIsScrolled(currentScrollY > 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed left-0 right-0 z-50 glass-card transition-all duration-300 ${
        isVisible ? "top-0" : "-top-32"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#" className="flex items-center gap-2 md:gap-3">
            <Image 
              src="/logooo.png" 
              alt="Dar Maestro Logo" 
              width={360} 
              height={120}
              className="h-16 md:h-24 w-auto -ml-4 md:-ml-8"
              priority
            />
            <span className="font-serif text-xl md:text-2xl font-bold gradient-text">
              DAR MAESTRO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold glow-button"
            >
              <a href="tel:+393246370889">
                <ShoppingBag className="w-5 h-5 mr-2" />
                ORDER NOW
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 w-full font-bold text-lg glow-button">
                <a href="tel:+393246370889">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  ORDER NOW
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
