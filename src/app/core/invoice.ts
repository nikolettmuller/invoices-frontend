export interface Invoice{ 
    invoiceId: number;
    customerName: string;
    issueDate: string;
    dueDate: string;
    totalInHuf: number;
    totalInEur: number;
}