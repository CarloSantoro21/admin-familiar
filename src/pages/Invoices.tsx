import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export default function Invoices() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Facturación</h1>
        <p className="text-muted-foreground">
          Genera y gestiona tus facturas
        </p>
      </div>

      <Card className="shadow-soft">
        <CardHeader className="text-center py-12">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-accent">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl">Módulo de Facturación</CardTitle>
          <CardDescription className="max-w-md mx-auto">
            Esta funcionalidad estará disponible en la Fase 3 del desarrollo. 
            Aquí podrás generar facturas en formato Word (.docx) y controlar el estado de pagos.
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