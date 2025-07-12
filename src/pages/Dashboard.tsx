import { Package, TrendingUp, ShoppingCart, FileText, AlertTriangle, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product, Order, Invoice, DashboardStats } from "@/types";
import { useMemo } from "react";

export default function Dashboard() {
  const [products] = useLocalStorage<Product[]>('business-products', []);
  const [orders] = useLocalStorage<Order[]>('business-orders', []);
  const [invoices] = useLocalStorage<Invoice[]>('business-invoices', []);

  const stats: DashboardStats = useMemo(() => {
    const lowStockProducts = products.filter(p => p.quantity <= p.minStock).length;
    const salesOrders = orders.filter(o => o.type === 'sale');
    const totalRevenue = salesOrders.reduce((sum, order) => sum + order.total, 0);
    const pendingOrders = orders.filter(o => o.status === 'pending').length;
    const pendingInvoices = invoices.filter(i => i.status === 'pending').length;

    return {
      totalProducts: products.length,
      lowStockProducts,
      totalSales: salesOrders.length,
      totalRevenue,
      pendingOrders,
      pendingInvoices,
    };
  }, [products, orders, invoices]);

  const recentProducts = products.slice(-5).reverse();
  const recentOrders = orders.slice(-5).reverse();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Resumen general de tu negocio
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-accent border-0 shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Productos</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">
              productos en inventario
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-accent border-0 shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stock Bajo</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.lowStockProducts}</div>
            <p className="text-xs text-muted-foreground">
              productos necesitan reposición
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-accent border-0 shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalSales}</div>
            <p className="text-xs text-muted-foreground">
              pedidos de venta realizados
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-accent border-0 shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              ${stats.totalRevenue.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              ingresos por ventas
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-accent border-0 shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Pendientes</CardTitle>
            <ShoppingCart className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.pendingOrders}</div>
            <p className="text-xs text-muted-foreground">
              pedidos por procesar
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-accent border-0 shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Facturas Pendientes</CardTitle>
            <FileText className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.pendingInvoices}</div>
            <p className="text-xs text-muted-foreground">
              facturas sin cobrar
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Products */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Productos Recientes
            </CardTitle>
            <CardDescription>
              Últimos productos añadidos al inventario
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentProducts.length > 0 ? (
              <div className="space-y-3">
                {recentProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">${product.price}</p>
                      <Badge variant={product.quantity <= product.minStock ? "destructive" : "secondary"}>
                        Stock: {product.quantity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">
                No hay productos registrados
              </p>
            )}
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Pedidos Recientes
            </CardTitle>
            <CardDescription>
              Últimos pedidos registrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentOrders.length > 0 ? (
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-foreground">
                        {order.type === 'sale' ? 'Venta' : 'Compra'} #{order.id.slice(-6)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">${order.total.toFixed(2)}</p>
                      <Badge 
                        variant={
                          order.status === 'delivered' ? 'default' :
                          order.status === 'pending' ? 'secondary' : 'destructive'
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">
                No hay pedidos registrados
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}