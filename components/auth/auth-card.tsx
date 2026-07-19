import { GoogleButton } from "./google-button";
import { MagicLinkForm } from "./magic-link-form";

export function AuthCard() {
  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-sm">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Kito</h1>

        <p className="mt-2 text-muted-foreground">
          Where every trip comes together.
        </p>
      </div>

      <div className="space-y-5">
        <GoogleButton />

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />

          <span className="text-sm text-muted-foreground">
            OR
          </span>

          <div className="h-px flex-1 bg-border" />
        </div>

        <MagicLinkForm />
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        No more scrolling through WhatsApp.
      </p>
    </div>
  );
}