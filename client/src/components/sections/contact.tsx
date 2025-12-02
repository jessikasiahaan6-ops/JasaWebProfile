import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Mulai Proyek Anda Sekarang</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Siap untuk mentransformasi bisnis Anda? Hubungi kami untuk konsultasi gratis. Tim kami siap membantu Anda menemukan solusi digital terbaik.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email Kami</h4>
                  <p className="text-muted-foreground">hello@webcraftstudio.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">+62 812 3456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Alamat Studio</h4>
                  <p className="text-muted-foreground">Jakarta Selatan, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-xl bg-slate-50 dark:bg-slate-900">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nama Lengkap</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">No. WhatsApp</label>
                    <Input id="phone" placeholder="0812..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Layanan yang Diminati</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Website Toko Online</option>
                    <option>Company Profile</option>
                    <option>Custom Web App</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Pesan / Detail Proyek</label>
                  <Textarea id="message" placeholder="Ceritakan sedikit tentang kebutuhan website Anda..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full rounded-full text-lg font-bold py-6">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
