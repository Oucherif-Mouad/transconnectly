
import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowDown, Download, ArrowRight, Calendar, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Dummy data for earnings chart
const earningsData = [
  { month: 'Jan', earnings: 4000 },
  { month: 'Feb', earnings: 3000 },
  { month: 'Mar', earnings: 2000 },
  { month: 'Apr', earnings: 2780 },
  { month: 'Mai', earnings: 1890 },
  { month: 'Jun', earnings: 2390 },
  { month: 'Jul', earnings: 3490 },
  { month: 'Aug', earnings: 4000 },
  { month: 'Sep', earnings: 3000 },
  { month: 'Oct', earnings: 2000 },
  { month: 'Nov', earnings: 2780 },
  { month: 'Dec', earnings: 1890 },
];

// Dummy data for booking types pie chart
const bookingTypeData = [
  { name: 'Camion Frigorifique', value: 400 },
  { name: 'Fourgon', value: 300 },
  { name: 'Camionnette', value: 300 },
  { name: 'Camion Plateau', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const CHART_BLUE = '#0EA5E9'; // Updated to match theme blue

// Dummy data for recent transactions
const recentTransactions = [
  { id: 'TX-001', date: '14 Mai 2024', description: 'Réservation Camion Frigorifique', amount: '+250.00 €', status: 'Réussi' },
  { id: 'TX-002', date: '14 Mai 2024', description: 'Réservation Fourgon', amount: '+180.00 €', status: 'Réussi' },
  { id: 'TX-003', date: '13 Mai 2024', description: 'Maintenance Camionnette', amount: '-50.00 €', status: 'En Cours' },
  { id: 'TX-004', date: '13 Mai 2024', description: 'Réservation Camion Plateau', amount: '+220.00 €', status: 'Réussi' },
  { id: 'TX-005', date: '12 Mai 2024', description: 'Réservation Camion Frigorifique', amount: '+250.00 €', status: 'Réussi' },
];

const Earnings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Revenus</h2>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Télécharger
          </Button>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="details">Détails</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenus Totaux</CardTitle>
                  <CardDescription>Aperçu des revenus totaux</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45,389.50 €</div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <ArrowDown className="mr-1 h-4 w-4 text-green-500" />
                    +20.1% depuis le mois dernier
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={earningsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="earnings" fill={CHART_BLUE} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Types de Réservations</CardTitle>
                  <CardDescription>Répartition des types de réservations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={bookingTypeData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        {
                          bookingTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))
                        }
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <ul className="list-none pl-0 mt-4">
                    {bookingTypeData.map((item, index) => (
                      <li key={item.name} className="flex items-center mb-1">
                        <span className="inline-block w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Transactions Récentes</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/dashboard/transactions" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                      Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <CardDescription>Vos dernières transactions</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Montant
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Statut
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{transaction.id}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{transaction.date}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{transaction.description}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{transaction.amount}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <Badge className={cn(
                              transaction.status === 'Réussi' ? "bg-green-500" : "bg-amber-500"
                            )}>
                              {transaction.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="details">
            <p>Affichage détaillé des revenus (en construction)</p>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Earnings;
