import type { Metadata } from "next";
import { AuthFooter, AuthTabs, SignInAside, SignInForm } from "@/components/auth";

export const metadata: Metadata = {
  title: "Sign In | Zoiko Mobility",
  description: "Sign in to your Zoiko Mobility account.",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen bg-auth-bg">
      <SignInAside />

      <section className="flex flex-1 items-center justify-center px-4 py-8 sm:p-12 lg:items-stretch">
        <div className="flex w-full max-w-[473px] flex-col items-center rounded-3xl bg-white px-4 pb-5 pt-[5px] shadow-[0px_24px_60px_-30px_rgba(15,30,60,0.18),0px_1px_2px_0px_rgba(15,30,60,0.04)] sm:px-5">
          <AuthTabs active="login" />
          <div className="flex w-full flex-1 flex-col pt-1">
            <SignInForm />
          </div>
          <AuthFooter />
        </div>
      </section>
    </div>
  );
}
