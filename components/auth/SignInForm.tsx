"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { EyeIcon, GoogleIcon, MicrosoftIcon } from "./icons";

const inputClass =
  "h-11 w-full rounded-md border border-auth-border bg-white px-3.5 font-plex text-sm text-auth-ink-soft outline-none transition placeholder:text-auth-placeholder focus:border-auth-orange focus:ring-2 focus:ring-auth-orange/20";

const socialClass =
  "flex h-12 w-full items-center gap-5 rounded-md border border-auth-border bg-white px-4 font-poppins text-sm font-medium text-auth-ink transition hover:border-auth-orange/50 hover:bg-auth-bg";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: connect to the authentication API.
  }

  return (
    <div className="flex-1 rounded-2xl bg-white px-6 pb-6 pt-6shadow-[0px_10px_30px_-18px_rgba(15,30,60,0.14),0px_0px_0px_1px_rgba(240,243,247,1)] sm:px-[33px]">
      <h2 className="font-manrope text-4xl font-extrabold leading-10 text-auth-ink">Welcome back!</h2>
      <p className="mt-2 font-plex text-base text-auth-muted">Sign in to your Zoiko Mobility account.</p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-plex text-sm font-medium text-auth-ink-soft">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="name@company.com"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="font-plex text-sm font-medium text-auth-ink-soft">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              className={`${inputClass} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((shown) => !shown)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              className="absolute right-1 top-1 flex size-9 items-center justify-center rounded-lg text-auth-link transition hover:bg-auth-bg"
            >
              <EyeIcon open={!showPassword} className="size-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 pt-1">
          <label className="flex cursor-pointer items-center gap-2.5 font-plex text-sm text-auth-ink-soft">
            <input
              type="checkbox"
              name="remember"
              defaultChecked
              className="size-5 cursor-pointer rounded-sm accent-auth-orange"
            />
            Remember me for 30 days
          </label>
          <Link href="/reset-password" className="font-plex text-sm text-auth-orange hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="h-12 w-full rounded-md bg-auth-orange font-plex text-base font-semibold text-white shadow-[0px_8px_18px_-10px_rgba(228,103,18,0.7)] transition hover:bg-auth-orange-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-auth-orange"
        >
          Log In
        </button>
      </form>

      <div className="mt-5 flex items-center gap-2.5 pb-1">
        <span className="h-px flex-1 bg-auth-border" />
        <span className="font-plex text-xs text-auth-divider-text">or continue with</span>
        <span className="h-px flex-1 bg-auth-border" />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button type="button" className={socialClass}>
          <MicrosoftIcon className="size-7 shrink-0" />
          <span className="flex-1 text-left">Continue with Microsoft</span>
          <span aria-hidden className="text-base text-auth-link">
            ›
          </span>
        </button>
        <button type="button" className={socialClass}>
          <GoogleIcon className="size-7 shrink-0 p-0.5" />
          <span className="flex-1 text-left">Continue with Google</span>
          <span aria-hidden className="text-base text-auth-link">
            ›
          </span>
        </button>
      </div>

      <p className="mt-6 text-center font-plex text-base text-auth-ink-soft">
        New to Zoiko Mobility?{" "}
        <Link href="/register" className="font-semibold text-auth-orange hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
