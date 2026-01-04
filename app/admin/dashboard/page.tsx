"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    canva_link: "",
  });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      fetchTemplates();
    }
  }, [user]);

  const checkAuth = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/admin/login");
      } else {
        setUser(session.user);
      }
    } catch (err) {
      console.error("Auth error:", err);
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  const fetchTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from("cv_templates")
        .select("*")
        .order("id", { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (err) {
      console.error("Error fetching templates:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.image_url || !formData.canva_link) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    try {
      if (editingId) {
        // Update existing template
        const { data, error } = await supabase
          .from("cv_templates")
          .update({
            title: formData.title,
            image_url: formData.image_url,
            canva_link: formData.canva_link,
          })
          .eq("id", editingId)
          .select();

        if (error) {
          console.error("Update error:", error);
          throw error;
        }
        
        console.log("Update response:", data);
        alert("Cập nhật thành công!");
      } else {
        // Insert new template
        const { data, error } = await supabase
          .from("cv_templates")
          .insert({
            title: formData.title,
            image_url: formData.image_url,
            canva_link: formData.canva_link,
          })
          .select();

        if (error) {
          console.error("Insert error:", error);
          throw error;
        }
        
        console.log("Insert response:", data);
        alert("Thêm thành công!");
      }

      resetForm();
      await fetchTemplates();
    } catch (err) {
      alert("Lỗi: " + (err as any).message);
      console.error(err);
    }
  };

  const handleEdit = (template: any) => {
    setEditingId(template.id);
    setFormData({
      title: template.title,
      image_url: template.image_url,
      canva_link: template.canva_link,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bạn chắc chắn muốn xóa?")) return;

    try {
      const { error } = await supabase
        .from("cv_templates")
        .delete()
        .eq("id", id);

      if (error) throw error;
      alert("Xóa thành công!");
      fetchTemplates();
    } catch (err) {
      alert("Lỗi: " + (err as any).message);
      console.error(err);
    }
  };

  const resetForm = () => {
    setFormData({ title: "", image_url: "", canva_link: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/admin/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg text-gray-600">Đang kiểm tra...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-10">
    
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          
        </div>

        <div>
            <div>
            <div className="text-3xl font-bold text-slate-800">
              Quản lý CV
            </div>
            <div className="text-sm text-slate-500 mt-1">
              {user?.email}
            </div>
          </div>
    
          <button
            onClick={handleLogout}
            className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Đăng xuất
          </button>
        </div>
    
        {/* Action */}
        <div className="mb-8">
          <button
            onClick={() => (showForm ? resetForm() : setShowForm(true))}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow"
          >
            {showForm ? "✕ Hủy" : "+ Thêm CV mới"}
          </button>
        </div>
    
        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow p-8 mb-12 max-w-2xl">
            <div className="text-xl font-semibold mb-6">
              {editingId ? "Sửa CV" : "Thêm CV mới"}
            </div>
        
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="text-sm font-medium mb-1">Tên CV</div>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>
                
              <div>
                <div className="text-sm font-medium mb-1">Link ảnh</div>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                />
              </div>
                
              <div>
                <div className="text-sm font-medium mb-1">Link Canva</div>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.canva_link}
                  onChange={(e) =>
                    setFormData({ ...formData, canva_link: e.target.value })
                  }
                />
              </div>
                
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                {editingId ? "Cập nhật" : "Thêm CV"}
              </button>
            </form>
          </div>
        )}
    
        {/* List */}
        <div>
          <div className="text-xl font-semibold mb-6">
            Danh sách CV ({templates.length})
          </div>
      
          {templates.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center text-slate-500 shadow">
              Chưa có CV nào
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                  <div className="h-44 bg-slate-50 flex items-center justify-center rounded-t-2xl">
                    <img
                      src={template.image_url}
                      className="max-h-full object-contain"
                    />
                  </div>
                
                  <div className="p-5">
                    <div className="font-semibold text-slate-800 mb-4 line-clamp-2">
                      {template.title}
                    </div>
                
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(template)}
                        className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDelete(template.id)}
                        className="flex-1 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}