"use client"
import { adminLogin,userLogin } from '@/api/admin/adminAuthRequest';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
import { authGuard } from '@/utils/authGuard';
import PublicRoute from '@/components/layout/PublicLayout';



interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await adminLogin(formData);
      localStorage.setItem('token', response.token);

      // Display a success message to the user
      toast({
        title: "Login Successful",
        variant: "success",
      });

      // Redirect to the dashboard
      router.push("/admin/dashboard");
    } catch (error:any) {
      // Handle login errors here
      console.error("Login error:", error);
      
      const message = error.response.data.message;
      console.log(message);
      
      // Display an error message to the user
      toast({
        title: "Login Error",
        variant: "destructive",
        description: message,
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <PublicRoute>
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border-2"
            required
          />
        </div>
        <button type="submit" className="border-2 px-4 bg-slate-500">Login</button>
      </form>
    </div>
    </PublicRoute>
  );
};

export default LoginPage;
