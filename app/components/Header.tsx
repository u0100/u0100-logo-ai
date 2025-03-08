import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { domain } from "@/app/lib/domain";

export default function Header({ className }: { className: string }) {
  const { user } = useUser();

  return (
    <header className={`relative w-full ${className}`}>
      <div className="flex items-center justify-between bg-[#141414] px-4 py-2 md:mt-4">
        <Link href="https://vadim-s-portfolio.vercel.app/" className="flex items-left">
            На главную
        </Link>
        {/* Logo - left on mobile, centered on larger screens Company Logo Generator
        <div className="flex flex-grow justify-start xl:justify-center">
          <div className="flex items-center">
            Company Logo Generator
          </div>
        </div>*/}
        {/* Credits Section */}
        <div className="absolute right-8 flex items-center space-x-2 md:top-20 lg:top-8">
          <SignedOut>
            <SignInButton
              mode="modal"
              signUpForceRedirectUrl={domain}
              forceRedirectUrl={domain}
            />
          </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata.remaining === "BYOK" ? (
              <p>Ваш API ключ</p>
            ) : (
              <p>Кредиты: {`${user?.unsafeMetadata.remaining ?? 3}`}</p>
            )}
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
