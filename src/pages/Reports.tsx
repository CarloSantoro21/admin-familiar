import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";

export default function Reports() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Reportes</h1>
        <p className="text-muted-foreground">
          Analiza el rendimiento de tu negocio
        </p>
      </div>

      <Card className="shadow-soft">
        <CardHeader className="text-center py-12">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-accent">
            <BarChart3 className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl">Módulo de Reportes</CardTitle>
          <CardDescription className="max-w-md mx-auto">
            Los reportes y análisis estarán disponibles una vez completados los módulos principales. 
            Aquí podrás ver gráficos y estadísticas detalladas de tu negocio.
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