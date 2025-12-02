import { ShoppingBag, Building2, Code, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    title: "Jasa Website Toko Online",
    description: "Ubah pengunjung menjadi pembeli dengan toko online yang cepat, aman, dan mudah dikelola. Terintegrasi dengan payment gateway dan ongkir otomatis.",
    features: ["Integrasi Payment Gateway", "Hitung Ongkir Otomatis", "Manajemen Stok Mudah", "Desain Mobile Responsive"]
  },
  {
    icon: <Building2 className="h-10 w-10 text-accent" />,
    title: "Jasa Website Company Profile",
    description: "Tingkatkan kredibilitas bisnis Anda di mata klien. Website profil perusahaan yang elegan, informatif, dan mencerminkan profesionalisme Anda.",
    features: ["Desain Premium & Elegan", "Halaman Profil Lengkap", "Galeri Portofolio", "Formulir Kontak Bisnis"]
  },
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: "Custom Web Application",
    description: "Butuh fitur khusus yang tidak ada di template biasa? Kami membangun aplikasi web custom sesuai kebutuhan operasional bisnis Anda.",
    features: ["Sistem Informasi Manajemen", "Dashboard Admin Custom", "Integrasi API Pihak Ketiga", "Skalabilitas Tinggi"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Solusi Digital Lengkap untuk Anda</h2>
          <p className="text-lg text-muted-foreground">
            Apapun jenis bisnis Anda, kami memiliki solusi website yang tepat untuk membantu Anda berkembang di era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden group">
              <CardHeader>
                <div className="mb-4 p-3 bg-white dark:bg-slate-800 w-fit rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:text-primary group-hover:bg-primary/5 transition-colors justify-between">
                  Pelajari Lebih Lanjut <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
