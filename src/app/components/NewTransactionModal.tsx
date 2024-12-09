import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import { useTransactions } from '../hooks/useTransactions';

import { IoClose } from "react-icons/io5";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className=" bg-zinc-100 py-14 px-8 rounded-md w-screen sm:w-[40rem] h-auto relative"
      overlayClassName="bg-black bg-opacity-50
        fixed top-0 left-0 right-0 bottom-0 w-full h-full 
        flex flex-row justify-center items-center"
    >
      <button type="submit" onClick={onRequestClose}>
        <IoClose
          size={20}
          className='absolute top-6 right-6 border-0 m-0
            text-zinc-400 hover:text-zinc-500 transition-all'
        />
      </button>

      <form 
        onSubmit={handleCreateNewTransaction}
        className='flex flex-col justify-center items-start gap-3'>
        <p className='text-2xl font-semibold text-zinc-600 mb-3'>
          Cadastrar Transação
        </p>

        <input
          type="text"
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
          className='p-3 leading-10 rounded-md bg-zinc-200 w-full'
        />

        <input
          type="number"
          placeholder='Valor'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
          className='p-3 leading-10 rounded-md bg-zinc-200 w-full'
        />

        <div 
          className='flex flex-row justify-between gap-2
          font-semibold text-zinc-500 w-full'
        >
          <button
            type="button"
            onClick={() => { setType('deposit') }}
            className={`flex flex-row justify-center items-center gap-2
              px-8 h-14 rounded-md leading-10 w-full
              border-zinc-300 border 
              hover:border-emerald-500 transition-all
              ${type === 'deposit' ? "bg-emerald-500 text-white" : ''}`}
          >
            Entrada
            <FaRegArrowAltCircleDown
              size={20}
              className={`text-green-500 brightness-90
                ${type === 'deposit' ? 'text-white brightness-100' : ''}`}
            />
          </button>

          <button
            type="button"
            onClick={() => { setType('withdraw') }}
            className={`flex flex-row justify-center items-center gap-2
              px-8 h-14 rounded-md leading-10 w-full
              border-zinc-300 border
              hover:border-rose-500 transition-all
              ${type === 'withdraw' ? "bg-rose-500 text-white" : ''}`}
          >
            Saída
            <FaRegArrowAltCircleUp
              size={20}
              className={`text-red-500 brightness-95
                ${type === 'withdraw' ? 'text-white brightness-100' : ''}`}
            />
          </button>
        </div>

        <input
          type="text"
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
          className='p-3 leading-10 rounded-md bg-zinc-200 w-full'
        />

        <button
          type="submit"
          className='p-3 bg-emerald-500 leading-10 rounded-md 
            hover:brightness-110 transition-all w-full
           text-white font-bold'
        >
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}