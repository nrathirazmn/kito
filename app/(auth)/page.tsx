import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Kito</h1>
          <p className="text-muted-foreground">
            One place for every group trip.
          </p>
        </div>

        <Button className="w-full">
          Continue with Apple
        </Button>

        <Button className="w-full">
          Continue with Google
        </Button>

        <Button variant="outline" className="w-full">
          Continue with Email
        </Button>
      </div>
    </main>
  );
}