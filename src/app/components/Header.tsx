"use client";

import { Logo } from "./Logo";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-700 pt-20 pb-32 shadow-md">
        <div className="flex flex-row justify-between items-center px-52">
          <Logo />
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