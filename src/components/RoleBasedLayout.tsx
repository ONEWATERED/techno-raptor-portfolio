
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import type { UserRole } from "@/contexts/AuthContext";

// Different components for different user roles
const AdminView = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar showAuth={true} />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
    <ChatButton />
  </div>
);

const VendorView = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar showAuth={true} />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
    {/* No ChatButton for vendors */}
  </div>
);

const UserView = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar showAuth={true} />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
    {/* No ChatButton for regular users */}
  </div>
);

const GuestView = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar showAuth={false} />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
    {/* No ChatButton for guests */}
  </div>
);

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

interface RoleBasedLayoutProps {
  children: React.ReactNode;
}

export const RoleBasedLayout = ({ children }: RoleBasedLayoutProps) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated || !user) {
    return <GuestView>{children}</GuestView>;
  }
  
  switch (user.role) {
    case "admin":
      return <AdminView>{children}</AdminView>;
    case "vendor":
      return <VendorView>{children}</VendorView>;
    case "user":
      return <UserView>{children}</UserView>;
    default:
      return <GuestView>{children}</GuestView>;
  }
};

export default RoleBasedLayout;
