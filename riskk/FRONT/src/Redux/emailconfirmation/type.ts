export interface Confirmation {
  confirmationId?: number;
  confirmationToken: string;
  sentDate: Date;
  isConfirmed: boolean;
  userId?: number;
  paymentId?: number;
}
