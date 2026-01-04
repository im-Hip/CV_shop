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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        {/* Header/Navigation */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CV</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CVShop</h1>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Trang Chủ</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Mẫu CV</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Về Chúng Tôi</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium">Liên Hệ</button>
              <AdminLink />
            </div>
          </nav>
        </header>

        {children}

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
        <footer className="bg-gray-900 text-white mt-20 py-12">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-bold mb-4">CV Shop</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Giúp bạn tạo CV chuyên nghiệp để nắm bắt cơ hội sự nghiệp.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Sản Phẩm</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition">Mẫu CV</a></li>
                  <li><a href="#" className="hover:text-white transition">Công Cụ</a></li>
                  <li><a href="#" className="hover:text-white transition">Hướng Dẫn</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Công Ty</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition">Về Chúng Tôi</a></li>
                  <li><a href="#" className="hover:text-white transition">Liên Hệ</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Pháp Lý</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition">Điều Khoản</a></li>
                  <li><a href="#" className="hover:text-white transition">Bảo Mật</a></li>
                  <li><a href="#" className="hover:text-white transition">Cookies</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 CV Shop. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
