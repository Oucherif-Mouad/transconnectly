
import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, User, Lock, CreditCard, Settings as SettingsIcon, HelpCircle, LogOut } from 'lucide-react';

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Paramètres</h2>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="border bg-background">
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Profil
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Sécurité
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Facturation
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Notifications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informations de Profil</CardTitle>
                <CardDescription>
                  Gérez vos informations personnelles et professionnelles.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>RT</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">Transport Rungis</h3>
                    <p className="text-sm text-muted-foreground">transporteur@rungis.fr</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Entreprise de Transport
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        Vérifié
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="companyName">
                        Nom de l'entreprise
                      </label>
                      <input 
                        id="companyName" 
                        className="w-full rounded-md border border-input px-3 py-2"
                        defaultValue="Transport Rungis"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <input 
                        id="email" 
                        type="email" 
                        className="w-full rounded-md border border-input px-3 py-2"
                        defaultValue="transporteur@rungis.fr"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="phone">
                        Téléphone
                      </label>
                      <input 
                        id="phone" 
                        className="w-full rounded-md border border-input px-3 py-2"
                        defaultValue="+33 1 23 45 67 89"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="address">
                        Adresse
                      </label>
                      <input 
                        id="address" 
                        className="w-full rounded-md border border-input px-3 py-2"
                        defaultValue="1 Rue de Rungis, 94150 Rungis"
                      />
                    </div>
                  </div>
                  <Button>Sauvegarder les modifications</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Sécurité</CardTitle>
                <CardDescription>
                  Gérez vos paramètres de sécurité et de connexion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Les options de sécurité seront disponibles prochainement.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Facturation</CardTitle>
                <CardDescription>
                  Gérez vos informations de paiement et consultez l'historique de facturation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Les options de facturation seront disponibles prochainement.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Configurez comment vous souhaitez être notifié.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Les préférences de notifications seront disponibles prochainement.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
