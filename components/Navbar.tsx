import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {auth, signIn, signOut} from "@/auth";

async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-2 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/public">
          <Image src="/logo.svg" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/article/create">
                <span>Создать</span>
              </Link>

              <form action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}>
                <button type="submit">Выйти</button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={async () => {
              "use server";
              await signIn('github');
            }}>
              <button className="cursor-pointer" type="submit">Войти</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;