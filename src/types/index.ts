// Tipos principales para la aplicación de gestión empresarial

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  price: number;
  minStock: number;
  sku: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
}

export interface Order {
  id: string;
  type: 'purchase' | 'sale';
  customerId?: string;
  products: OrderProduct[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface OrderProduct {
  productId: string;
  quantity: number;
  price: number;
}

export interface Invoice {
  id: string;
  orderId: string;
  customerId: string;
  number: string;
  status: 'pending' | 'paid' | 'overdue';
  total: number;
  createdAt: string;
  dueDate: string;
  paidAt?: string;
}

export interface DashboardStats {
  totalProducts: number;
  lowStockProducts: number;
  totalSales: number;
  totalRevenue: number;
  pendingOrders: number;
  pendingInvoices: number;
}