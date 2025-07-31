import { Lock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/features/auth/components/loginForm";

export default function Login() {
  return (
    <div className="bg-background relative ml-2 flex min-h-[100dvh] flex-1 items-center justify-center overflow-clip px-4 md:ml-8 md:px-14 lg:ml-12 ">
      <Card className="bg-primary20 border-primary35 w-full max-w-md border shadow-lg">
        <CardHeader className="text-center">
          <Lock className="text-accent mx-auto mb-4 h-12 w-12" />
          <CardTitle className="text-3xl font-bold">Acesso Restrito</CardTitle>
          <p className="">
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
