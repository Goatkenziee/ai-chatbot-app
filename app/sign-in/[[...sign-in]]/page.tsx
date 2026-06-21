import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="gradient-text text-4xl font-bold">ChatAI</h1>
          <p className="mt-2 text-muted-foreground">Sign in to your account</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-card border border-border rounded-xl shadow-xl",
              headerTitle: "text-foreground",
              headerSubtitle: "text-muted-foreground",
              socialButtonsBlockButton: "bg-muted border-border text-foreground hover:bg-muted/80",
              dividerLine: "bg-border",
              dividerText: "text-muted-foreground",
              formFieldLabel: "text-foreground",
              formFieldInput: "bg-background border-border text-foreground",
              footerActionLink: "text-primary hover:text-primary/80",
              formButtonPrimary: "bg-primary text-primary-foreground hover:opacity-90",
            },
          }}
        />
      </div>
    </div>
  );
}
