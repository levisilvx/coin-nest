"use client";

import { useState } from "react";
import { createServer, Model } from "miragejs";

import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TransactionsTable } from "./components/TransactionsTable";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export default function Home() {
  createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Desenvolvimento de Website',
            type: 'deposit',
            category: 'Dev',
            amount: 7000,
            createdAt: new Date('2024-03-05 13:57:22'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Casa',
            amount: 1100,
            createdAt: new Date('2024-03-19 09:42:22'),
          },
          {
            id: 3,
            title: 'Feira',
            type: 'withdraw',
            category: 'Casa',
            amount: 600,
            createdAt: new Date('2024-03-22 15:26:22')
          },
        ]
      })
    },

    routes() {
      this.namespace = 'api';

      this.get('transactions', () => {
        return this.schema.all('transaction');
      })

      this.post('./transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data);
      })
    }
  })

  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="">
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Summary />
        <TransactionsTable />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TransactionsProvider>
    </div>
  );
}
