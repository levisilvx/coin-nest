import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useTransactions } from "../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount
    } else {
      acc.withdraws -= transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <section className="flex flex-row justify-between items-center px-8 sm:px-40 -mt-20 gap-5 lg:gap-10 overflow-x-auto sm:overflow-hidden">
      <div className="p-8 bg-zinc-100 rounded-md w-full">
        <span className="flex flex-row justify-between items-center gap-32 mb-8 text-xl">
          <strong className="text-zinc-500">Entradas</strong>
          <FaRegArrowAltCircleDown className="text-emerald-500" />

        </span>
        <p className="text-zinc-700 text-3xl sm:text-4xl">
          { new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits) }
        </p>
      </div>
      <div className="p-8 bg-zinc-100 rounded-md w-full">
        <span className="flex flex-row justify-between items-center gap-32 mb-8 text-xl">
          <strong className="text-zinc-500">Saídas</strong>
          <FaRegArrowAltCircleUp className="text-rose-500" />

        </span>
        <p className="text-zinc-700 text-3xl sm:text-4xl">
        { new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws) }
        </p>
      </div>
      <div className={`p-8 rounded-md w-full
        ${summary.total > 0 ? 'bg-emerald-500 transition-all' : 'bg-rose-500 transition-all'}`}
      >
        <span className="flex flex-row justify-between items-center gap-32 mb-8 text-xl">
          <strong className="text-zinc-100">Caixa</strong>
          <MdOutlineAttachMoney className="text-zinc-100" />

        </span>
        <p className={'text-zinc-100 text-3xl sm:text-4xl'}>
        { new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total) }
        </p>
      </div>
    </section>
  );
}