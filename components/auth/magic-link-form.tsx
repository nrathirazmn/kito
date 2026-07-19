import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function MagicLinkForm() {
  return (
    <form className="space-y-3">
      <Input
        type="email"
        placeholder="Enter your email"
      />

      <Button
        type="submit"
        variant="outline"
        className="w-full"
      >
        Continue with Email
      </Button>
    </form>
  );
}