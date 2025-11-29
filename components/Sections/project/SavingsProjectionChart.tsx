"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

interface SavingsProjectionChartProps {
  data: Array<{
    year: number
    savings: number
  }>
}

const chartConfig = {
  savings: {
    label: "Ahorro Acumulado",
    color: "hsl(var(--chart-1))",
  },
}

export function SavingsProjectionChart({ data }: SavingsProjectionChartProps) {
  // Formatear datos para el gráfico
  const chartData = data.map((item) => ({
    year: item.year,
    savings: item.savings / 1000000, // Convertir a millones para mejor visualización
  }))

  // Formatear el valor en el tooltip
  const formatCurrency = (value: number) => {
    return `$${(value * 1000000).toLocaleString('es-MX', { maximumFractionDigits: 0 })} MXN`
  }

  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="year"
            stroke="hsl(var(--muted-foreground))"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            label={{ value: 'Años', position: 'insideBottom', offset: -5, style: { textAnchor: 'middle' } }}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            label={{ value: 'Millones (MXN)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
            tickFormatter={(value) => `$${value.toFixed(1)}M`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium">Año {data.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {formatCurrency(data.savings)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="savings"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--primary))", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

