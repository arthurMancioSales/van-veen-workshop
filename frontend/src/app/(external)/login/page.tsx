import { Lock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/features/auth/components/loginForm";

export default function Login() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-950 text-gray-50">
      <Card className="w-full max-w-md border border-gray-700 bg-gray-900 shadow-lg">
        <CardHeader className="text-center">
          <Lock className="mx-auto mb-4 h-12 w-12 text-purple-400" />
          <CardTitle className="text-3xl font-bold text-white">
            Acesso Restrito
          </CardTitle>
          <p className="text-gray-400">
            Por favor, insira a senha para acessar o dashboard.
          </p>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
