export interface Payment {
  paymentId?: number;
  amount: number;
  paymentDate: Date;
  inscriptionId?: number;
  paymentMethodeId?: number;
  invoiceId?: number;

}
