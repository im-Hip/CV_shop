"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: result, error: err } = await supabase
          .from("cv_templates")
          .select();

        if (err) throw err;
        setData(result || []);
      } catch (e) {
        console.error("Error:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen pt-32 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lỗi khi tải dữ liệu
          </h1>
          <p className="text-lg text-gray-600">
            Vui lòng kiểm tra kết nối internet
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Tạo CV Chuyên Nghiệp
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-10">
              Hàng trăm mẫu CV đẹp. Tải xuống trong 5 phút.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-lg font-semibold text-lg md:text-xl transition shadow-lg hover:shadow-xl">
              Khám Phá Ngay
            </button>
          </div>
          
          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-5/6 bg-white rounded-lg shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                    <span className="text-6xl">📄</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-sm md:text-base text-gray-600">Mẫu CV</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-sm md:text-base text-gray-600">Người dùng</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-sm md:text-base text-gray-600">Hài lòng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Mẫu CV Nổi Bật
          </h2>

          {loading ? (
            <div className="text-center text-gray-600 py-12">Đang tải...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {data?.slice(0, 6).map((cv: any) => (
                <div
                  key={cv.id}
                  className="bg-white rounded-lg md:rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-200 flex flex-col h-full"
                >
                  <div className="relative w-full bg-gray-100 flex items-center justify-center p-4" style={{ minHeight: '350px' }}>
                    <img
                      src={cv.image_url}
                      alt={cv.title}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 line-clamp-2">
                      {cv.title}
                    </h3>
                    <a
                      href={cv.canva_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:py-3 rounded-lg font-semibold transition text-center text-sm md:text-base"
                    >
                      Xem Chi Tiết
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}