import type { Metadata } from "next";
import "./globals.css";
import AdminLink from "@/app/components/AdminLink";

export const metadata: Metadata = {
  title: "CV Shop - Mẫu CV Thiết Kế Chuyên Nghiệp",
  description: "Khám phá hàng trăm mẫu CV đẹp mắt, chuyên nghiệp được thiết kế bởi các chuyên gia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/30 antialiased">
        {/* Header - ĐÃ ĐƯỢC TÁCH RỘNG, THOÁNG HƠN */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-slate-200/60 shadow-lg">
          <nav className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20"> {/* Tăng từ h-18 lên h-20 */}
              {/* Logo */}
              <a href="/" className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl blur-lg opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-white font-extrabold text-2xl tracking-tight">CV</span>
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500">
                  CVShop
                </span>
              </a>

              {/* Desktop Navigation - TĂNG KHOẢNG CÁCH, THOÁNG HƠN */}
              <div className="hidden md:flex items-center gap-8"> {/* Tăng gap từ 1 lên 8 */}
                {[
                  { name: "Trang Chủ", href: "/" },
                  { name: "Mẫu CV", href: "/templates" },
                  { name: "Về Chúng Tôi", href: "/about" },
                  { name: "Liên Hệ", href: "/contact" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-6 py-3 rounded-xl text-slate-700 font-medium overflow-hidden group/link"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover/link:text-blue-600">
                      {item.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                  </a>
                ))}
                <div className="ml-6"> {/* Tăng khoảng cách cho AdminLink */}
                  <AdminLink />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-3 rounded-xl hover:bg-slate-100 transition-all duration-300 group">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-6rem)] overflow-x-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            {children}
          </div>
        </main>


        {/* Footer - Giữ nguyên đẹp như trước */}
        <footer className="bg-gradient-to-t from-slate-900 to-slate-800 text-slate-300 mt-24">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-2xl">
                    <span className="text-white font-extrabold text-2xl">CV</span>
                  </div>
                  <span className="text-2xl font-bold text-white">CVShop</span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-xs">
                  Nền tảng cung cấp mẫu CV chuyên nghiệp hàng đầu, giúp bạn nổi bật và chinh phục mọi nhà tuyển dụng.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-white mb-6 text-lg">Liên Kết</h3>
                <ul className="space-y-3">
                  {["Trang Chủ", "Mẫu CV", "Về Chúng Tôi", "Liên Hệ"].map((text) => (
                    <li key={text}>
                      <a
                        href={text === "Trang Chủ" ? "/" : text === "Mẫu CV" ? "/templates" : `/${text.toLowerCase().replace(" ", "-")}`}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 group/footer"
                      >
                        <span className="w-0 h-px bg-blue-400 transition-all duration-500 group-hover/footer:w-8"></span>
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-bold text-white mb-6 text-lg">Hỗ Trợ</h3>
                <ul className="space-y-3">
                  {["Câu Hỏi Thường Gặp", "Hướng Dẫn", "Điều Khoản", "Chính Sách"].map((text) => (
                    <li key={text}>
                      <a href={`/${text.toLowerCase().replace(/ /g, "-")}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 group/footer">
                        <span className="w-0 h-px bg-blue-400 transition-all duration-500 group-hover/footer:w-8"></span>
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-white mb-6 text-lg">Liên Hệ</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 group/contact">
                    <div className="p-2 bg-blue-600/20 rounded-lg group-hover/contact:bg-blue-600/40 transition-colors duration-300">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-slate-300">contact@cvshop.vn</span>
                  </li>
                  <li className="flex items-center gap-3 group/contact">
                    <div className="p-2 bg-blue-600/20 rounded-lg group-hover/contact:bg-blue-600/40 transition-colors duration-300">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-slate-300">(028) 1234 5678</span>
                  </li>
                </ul>
                
                {/* Social Media Links */}
                <div className="mt-6 flex gap-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/people/UE-CV-Design/61586024881853/?open_field=website&sk=about_contact_and_basic_info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/40 transition-colors duration-300 group/social"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5 text-blue-400 group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@nguyn.xun.huy973?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/40 transition-colors duration-300 group/social"
                    title="TikTok"
                  >
                    <svg className="w-5 h-5 text-blue-400 group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.89 3.795a5.998 5.998 0 01-4.211-1.643V2.31a3.989 3.989 0 01-3.989 3.989v1.5H6.76a2.489 2.489 0 00-2.489 2.489v8.456a4.987 4.987 0 004.987 4.987h8.456a4.987 4.987 0 004.987-4.987V8.782a3.989 3.989 0 01-2.812 1.169v-1.5c.902 0 1.76-.195 2.532-.537zm-7.895 11.145a2.489 2.489 0 110-4.978 2.489 2.489 0 010 4.978z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
              <p className="text-slate-500 text-sm">
                &copy; 2026 <span className="text-blue-400 font-medium">CVShop</span>. Đã đăng ký bản quyền.
              </p>
            </div>
          </div>
        </footer>

        {/* Tawk.to Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/695a1b988b1523197d6fe856/1je49f855';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}