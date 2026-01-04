"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLink() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check initial auth state
    checkAuth();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
      setIsLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const checkAuth = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    } catch (error) {
      console.error("Error checking auth:", error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      router.push("/admin/dashboard");
    } else {
      router.push("/admin/login");
    }
  };

  if (isLoading) {
    return (
      <span className="text-gray-700 font-medium cursor-pointer border-l border-gray-300 pl-8">
        Admin
      </span>
    );
  }

  if (isLoggedIn) {
    return (
      <button
        onClick={handleLoginClick}
        className="text-gray-700 hover:text-blue-600 font-medium transition border-l border-gray-300 pl-8"
      >
        Admin
      </button>
    );
  }

  return (
    <button
      onClick={handleLoginClick}
      className="text-gray-700 hover:text-blue-600 font-medium transition border-l border-gray-300 pl-8"
    >
      Admin
    </button>
  );
}
