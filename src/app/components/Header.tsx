"use client";

import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-700 p-2 pb-32 shadow-lg">
        <div className="flex flex-row justify-between items-center mx-72">
          <Logo />
          <div>
            <button
              className="p-3 px-11 mt-12 font-bold text-md text-zinc-100 rounded-md
                 bg-indigo-600 border-indigo-500 
                 hover:bg-indigo-500 hover:border-indigo-400 transition-all"
              type="button">
              Nova Transação
            </button>
          </div>
        </div>
    </header>
  )
}