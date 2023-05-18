"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";


const Nav = () => {
    const isUserLoggedIn = true;
    const[providers,setProviders] =useState(null);
    const [toggleDropdown, setToggleDropdown] =useState(false);

    useEffect(()=>{
        const setProviders = async () =>{
            const response = await getProviders();
            setProviders(response);
        }
        setProviders();
},[])
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="app logo"
          width={90}
          height={90}
          className="object-contain rounded-full"
        />
        <p className="logo_text">AI Cue Catalyst</p>
      </Link>

      {/*Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-cue" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.png"
                width={40}
                height={40}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_button"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/*Mobile Navigation*/}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.png"
              width={90}
              height={90}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-cue"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Cue
                </Link>
                <button 
                type="button"
                onClick={()=>{
                    setToggleDropdown(false);
                    signOut();
                }}
                className="mt-5 w-full black_btn"
                >Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_button"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav