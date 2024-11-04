export interface Invoice {
  InvoiceId?: number;
  InvoiceDate: Date;
  TotaleAmount: number;
  PaymentStatus: string;
  UserId?: number;
}
