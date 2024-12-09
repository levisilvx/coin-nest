"use client";

import { Logo } from "./Logo";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-700 sm:pt-20 pt-10 pb-32 shadow-md w-full border-0">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center lg:px-52 md:px-32 ">
          <Logo/>
          <div>
            <button
              className="p-3 px-11
                font-bold text-md rounded-md
                bg-indigo-600 text-zinc-100 
                hover:brightness-110 transition-all"
              type="button"
              onClick={onOpenNewTransactionModal}>
              Nova Transação
            </button>
          </div>
        </div>
    </header>
  )
}