import FlashMessage from '@/components/FlashMessage';
import LoginForm from '@/features/login/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <FlashMessage />
      <LoginForm />
    </div>
  );
}
