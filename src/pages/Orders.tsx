import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package } from "lucide-react";

export default function Orders() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Pedidos</h1>
        <p className="text-muted-foreground">
          Gestiona tus pedidos de compra y venta
        </p>
      </div>

      <Card className="shadow-soft">
        <CardHeader className="text-center py-12">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-accent">
            <ShoppingCart className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl">Módulo de Pedidos</CardTitle>
          <CardDescription className="max-w-md mx-auto">
            Esta funcionalidad estará disponible en la Fase 2 del desarrollo. 
            Aquí podrás gestionar pedidos de compra y venta, asociarlos con productos y clientes.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-12">
          <Badge variant="secondary" className="bg-gradient-accent">
            Próximamente
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
}