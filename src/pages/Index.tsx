import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full gap-8">
            {/* Hero Content - Left Side */}
            <div className="flex-1 z-10">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                  Collaborate, Learn & Grow Together
                </h1>
                <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
                  Join the future of collaborative workspaces where teams unite to innovate, 
                  share knowledge, and achieve extraordinary results together.
                </p>
                <Button 
                  size="lg" 
                  variant="hero"
                  className="text-lg px-8 py-4 h-auto font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Hero Image - Right Side */}
            <div className="flex-1 relative h-full flex items-center justify-center">
              <div 
                className="w-full max-w-lg h-3/4 bg-cover bg-center rounded-2xl shadow-elegant transform rotate-3 hover:rotate-1 transition-smooth"
                style={{ backgroundImage: `url(${heroImage})` }}
              >
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Qadeer Raza
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;