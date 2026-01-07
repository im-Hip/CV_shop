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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lỗi khi tải dữ liệu
          </h1>
          <p className="text-lg text-gray-600">
            Vui lòng kiểm tra kết nối internet
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tạo CV Chuyên Nghiệp
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10">
              Hàng trăm mẫu CV đẹp. Tải xuống trong 5 phút.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition">
              Khám Phá Ngay
            </button>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="w-3/4 h-5/6 bg-white rounded-lg shadow-xl flex items-center justify-center">
                <span className="text-6xl">📄</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-600">500+</div>
            <p className="text-gray-600">Mẫu CV</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600">50K+</div>
            <p className="text-gray-600">Người dùng</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600">95%</div>
            <p className="text-gray-600">Hài lòng</p>
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mẫu CV Nổi Bật
        </h2>

        {loading ? (
          <div className="text-center text-gray-600">Đang tải...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.slice(0, 6).map((cv) => (
              <div
                key={cv.id}
                className="bg-white rounded-xl shadow-md border flex flex-col"
              >
                <div className="h-[350px] bg-gray-100 flex items-center justify-center">
                  <img
                    src={cv.image_url}
                    alt={cv.title}
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold">{cv.title}</h3>
                  <a
                    href={cv.canva_link}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-center font-semibold"
                  >
                    Xem Chi Tiết
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ABOUT CVSHOP – CLEAN & PROFESSIONAL */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/046/884/830/original/a-colorful-illustration-depicts-a-diverse-team-of-people-working-together-on-a-desktop-computer-they-are-engaging-in-conversation-and-collaborating-on-a-project-free-vector.jpg"
                alt="Đội ngũ CVShop"
                className="w-full max-w-xl rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                CVShop được xây dựng với mục tiêu giúp người tìm việc tạo ra những bản CV
                chuyên nghiệp, hiện đại và phù hợp với tiêu chuẩn tuyển dụng thực tế.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Chúng tôi kết hợp kinh nghiệm thiết kế, hiểu biết thị trường lao động
                và các tiêu chí ATS để mang lại giá trị thực sự cho ứng viên.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Thiết kế chuyên nghiệp
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Được xây dựng bởi đội ngũ có kinh nghiệm tuyển dụng
                  </p>
                </div>

                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Tối ưu ATS
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Phù hợp với hệ thống sàng lọc CV hiện nay
                  </p>
                </div>

                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Dễ dàng chỉnh sửa
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Chỉnh sửa trực tiếp trên Canva
                  </p>
                </div>

                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Luôn cập nhật
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Theo sát xu hướng tuyển dụng mới
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
