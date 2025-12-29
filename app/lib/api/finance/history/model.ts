export type FinanceTransactions = {
  results: [
    {
      transaction: {
        id: string;
        description: string;
        amount: number;
        type: "debit" | "credit" | "transfer";
        timestamp: string;
        category: {
          id: string;
          name: string;
        };
        operator: {
          id: string;
          name: string;
        };
        account: {
          id: string;
          name: string;
        };
        contact: {
          id: string | null;
          name: string | null;
        };
        payment: any | null;
        linked: any | null;
      };
    }
  ];
};
