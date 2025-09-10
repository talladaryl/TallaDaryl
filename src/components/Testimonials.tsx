import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ulrich from "@/assets/ulrich.jpeg";
import profilePhoto from "@/assets/profile-photos.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-fade-in-up");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".observe-animation");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Charles ENOL",
      role: "Consultant informatique",
      avatar: profilePhoto,
      content:
        "Travail de qualité professionnelle avec un souci du détail impressionnant",
      rating: 5,
    },
    {
      id: 2,
      name: "TCHIENGANG Yvan",
      role: "Développeur full-stack",
      avatar: profilePhoto,
      content: "Expert technique avec une excellente communication",
      rating: 5,
    },
    {
      id: 3,
      name: "ULRICH",
      role: "Développeur & admin réseau",
      avatar: ulrich,
      content: "Très concentré, performance, rigueur et discipline",
      rating: 5,
    },
  ];

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding bg-gradient-to-b from-muted/10 to-background overflow-hidden"
    >
      <div className="container-custom text-center">
        {/* Header */}
        <div className="mb-16 observe-animation">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ce que disent mes <span className="text-gradient">clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction de mes clients est ma priorité. Découvrez leurs
            retours sur nos collaborations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto observe-animation">
          <div className="card-modern rounded-3xl p-10 bg-background/30 backdrop-blur-md border border-accent/20 shadow-neon hover:shadow-neon-lg transition-all duration-500">
            {/* Background decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-accent/20 to-neon/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-neon/20 to-accent/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-accent text-accent mr-1 animate-pulse"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl text-foreground font-light mb-8 animate-fade-in-up">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-2 border-accent/40 shadow-neon"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors duration-300 hover:text-accent-foreground"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-accent scale-125"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors duration-300 hover:text-accent-foreground"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 observe-animation">
          <div className="text-center animate-fade-in-up">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Clients satisfaits</div>
          </div>
          <div className="text-center animate-fade-in-up">
            <div className="text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-muted-foreground">Projets livrés</div>
          </div>
          <div className="text-center animate-fade-in-up">
            <div className="text-4xl font-bold text-gradient mb-2">5⭐</div>
            <div className="text-muted-foreground">Note moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
