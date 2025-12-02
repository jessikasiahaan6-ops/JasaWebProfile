import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@assets/generated_images/modern_digital_agency_hero_background_with_abstract_tech_elements.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 dark:from-background/95 dark:via-background/80 dark:to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Jasa Pembuatan Website #1 Indonesia
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
            Bangun Citra <br />
            <span className="text-gradient">Digital Bisnis</span> <br />
            Anda Bersama Kami
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Kami membantu bisnis Anda tumbuh dengan website Toko Online dan Company Profile yang profesional, cepat, SEO-friendly, dan memikat pelanggan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" className="rounded-full text-base h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8 bg-white/50 backdrop-blur-sm hover:bg-white dark:bg-black/20 dark:hover:bg-black/40">
              Lihat Portofolio
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            {["Gratis Domain & Hosting", "SEO Optimized", "Garansi 30 Hari"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
            {/* Abstract decorative elements can go here if needed, 
                but the background image does a lot of the heavy lifting. 
                Maybe a floating card or mockup. */}
            <div className="relative z-10 p-6 glass-card rounded-2xl max-w-md ml-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
                  WS
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Project Status</h4>
                  <p className="text-xs text-muted-foreground">Website Redesign</p>
                </div>
                <span className="ml-auto px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">Completed</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[100%]" />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Performance</span>
                  <span className="font-bold text-foreground">100%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%]" />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>SEO Score</span>
                  <span className="font-bold text-foreground">98/100</span>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
