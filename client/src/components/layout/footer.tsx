import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 max-w-md">
            <a href="/" className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight text-white mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Zap size={20} fill="currentColor" />
              </div>
              WebCraft<span className="text-primary">Studio</span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Partner digital terpercaya untuk transformasi bisnis Anda. Kami menghadirkan website berkualitas tinggi yang menggabungkan estetika desain dan keandalan teknologi.
            </p>
            <div className="flex gap-4">
              {/* Social Icons could go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Layanan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Jasa Website Toko Online</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jasa Company Profile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Web Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jasa SEO & Optimasi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portofolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Harga</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2024 WebCraft Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
