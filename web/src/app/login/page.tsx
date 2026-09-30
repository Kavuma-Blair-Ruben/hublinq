import { LoginForm } from "./login-form";
import { Logo } from "@/components/ui/Logo";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="login-brand-text">
            <Logo height={58} />
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
