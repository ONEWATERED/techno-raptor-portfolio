
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [adminCredentials, setAdminCredentials] = useState({ email: "admin@example.com", password: "admin123" });
  const [vendorCredentials, setVendorCredentials] = useState({ email: "vendor@example.com", password: "vendor123" });
  const [userCredentials, setUserCredentials] = useState({ email: "user@example.com", password: "user123" });
  
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin("admin", adminCredentials.email, adminCredentials.password);
  };
  
  const handleVendorLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin("vendor", vendorCredentials.email, vendorCredentials.password);
  };
  
  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin("user", userCredentials.email, userCredentials.password);
  };
  
  const handleLogin = async (role: "admin" | "vendor" | "user", email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password, role);
      toast({
        title: "Login successful",
        description: `You've logged in as a ${role}`,
        variant: "default",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-secondary/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Dhruman<span className="text-accent">Rathod</span>
          </h1>
          <p className="text-muted-foreground mt-2">Select your role to continue</p>
        </div>
        
        <div className="bg-card rounded-xl p-6 shadow-lg">
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6 w-full">
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="vendor">Vendor</TabsTrigger>
              <TabsTrigger value="user">User</TabsTrigger>
            </TabsList>
            
            <TabsContent value="admin">
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    placeholder="Email" 
                    value={adminCredentials.email}
                    onChange={(e) => setAdminCredentials({...adminCredentials, email: e.target.value})}
                  />
                  <Input 
                    type="password" 
                    placeholder="Password" 
                    value={adminCredentials.password}
                    onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login as Admin"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="vendor">
              <form onSubmit={handleVendorLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    placeholder="Email" 
                    value={vendorCredentials.email}
                    onChange={(e) => setVendorCredentials({...vendorCredentials, email: e.target.value})}
                  />
                  <Input 
                    type="password" 
                    placeholder="Password" 
                    value={vendorCredentials.password}
                    onChange={(e) => setVendorCredentials({...vendorCredentials, password: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login as Vendor"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="user">
              <form onSubmit={handleUserLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    placeholder="Email" 
                    value={userCredentials.email}
                    onChange={(e) => setUserCredentials({...userCredentials, email: e.target.value})}
                  />
                  <Input 
                    type="password" 
                    placeholder="Password" 
                    value={userCredentials.password}
                    onChange={(e) => setUserCredentials({...userCredentials, password: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login as User"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>For demo purposes, you can use the pre-filled credentials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
