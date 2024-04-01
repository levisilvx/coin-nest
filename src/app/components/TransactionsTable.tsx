"use client";

import { useTransactions } from "../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <div className="relative overflow-x-auto mx-72 mt-10">
      <div className="flex flex-col ">
        <div className="overflow-x-auto">
          <div className="block min-w-full py-2">
            <div className="overflow-hidden">
              <table className="w-full text-left text-sm font-light border-spacing-y-3 leading-9">
                <thead className="text-xs uppercase text-zinc-400 font-black">
                  <tr>
                    <th scope="col" className="px-6 py-4">Título</th>
                    <th scope="col" className="px-6 py-4">Valor</th>
                    <th scope="col" className="px-6 py-4">Categoria</th>
                    <th scope="col" className="px-6 py-4">Data</th>
                  </tr>
                </thead>
                <tbody className="font-medium text-zinc-600">
                  {transactions.map( transaction => {
                    return (
                      <tr key={transaction.id}
                        className="border-b-2 border-zinc-100">

                        <td className="px-6 py-4">
                          {transaction.title}
                        </td>
                        <td className={`px-6 py-4
                          ${transaction.type === 'deposit'
                          ? 'text-emerald-500'
                          : 'text-rose-500'}`}
                        >
                          { new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                          }).format(transaction.amount) }
                        </td>
                        <td className="px-6 py-4 text-zinc-400">
                          {transaction.category}
                        </td>
                        <td className="px-6 py-4 text-zinc-400">
                          {new Intl.DateTimeFormat('pt-BR').format(
                            new Date(transaction.createdAt)
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}