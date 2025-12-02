import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    description: "Cocok untuk Landing Page atau UMKM pemula.",
    price: "Rp 1.5jt",
    features: [
      "1 Halaman Landing Page",
      "Desain Responsive",
      "Gratis Hosting 1 Tahun",
      "Gratis Domain .com 1 Tahun",
      "SSL Security (HTTPS)",
      "Revisi 2x"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Solusi terbaik untuk Company Profile bisnis.",
    price: "Rp 3.5jt",
    features: [
      "Hingga 10 Halaman",
      "Desain Premium Custom",
      "Optimasi SEO Basic",
      "Gratis Hosting & Domain",
      "Email Bisnis Profesional",
      "Integrasi WhatsApp",
      "Revisi 5x",
      "Support Prioritas"
    ],
    popular: true
  },
  {
    name: "E-Commerce",
    description: "Toko Online lengkap dengan fitur jualan.",
    price: "Rp 5.5jt",
    features: [
      "Produk Unlimited",
      "Fitur Keranjang & Checkout",
      "Integrasi Payment Gateway",
      "Hitung Ongkir Otomatis",
      "Panel Admin Mudah",
      "Laporan Penjualan",
      "Training Penggunaan",
      "Garansi Maintenance 3 Bulan"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Penawaran Terbaik Kami</h2>
          <p className="text-lg text-muted-foreground">
            Investasi cerdas untuk masa depan bisnis Anda. Transparan, tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-slate-200 dark:border-slate-800 flex flex-col ${plan.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'shadow-md'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Paling Laris
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mulai dari</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 p-0.5 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <Check className="h-3 w-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full rounded-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800'}`}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Pilih Paket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
