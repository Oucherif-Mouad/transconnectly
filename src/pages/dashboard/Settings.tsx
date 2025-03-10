
import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, User, ShieldCheck, CreditCard, LogOut } from 'lucide-react';

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Paramètres</h2>
        <p className="text-muted-foreground">Gérez vos préférences et informations de compte</p>
      </div>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-background border">
          <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Profil
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Facturation
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Sécurité
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Informations du Profil</CardTitle>
              <CardDescription>Mettez à jour vos informations personnelles et professionnelles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>TR</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm" className="mb-2">Changer la photo</Button>
                  <p className="text-xs text-muted-foreground">JPG, GIF ou PNG. 1MB maximum.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Nom de l'entreprise</Label>
                  <Input id="companyName" defaultValue="Transport Rungis" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="transporteur@rungis.fr" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" defaultValue="+33 1 23 45 67 89" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Input id="address" defaultValue="1 Rue de Rungis, 94150 Rungis" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Description de l'entreprise</Label>
                  <textarea 
                    id="bio" 
                    className="w-full min-h-[100px] p-2 rounded-md border border-input bg-background"
                    defaultValue="Transporteur spécialisé dans la livraison de produits alimentaires frais depuis le Marché de Rungis."
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Enregistrer les modifications</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de Notifications</CardTitle>
              <CardDescription>Contrôlez comment et quand vous recevez des notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notifications par Email</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Nouvelles réservations</p>
                      <p className="text-sm text-muted-foreground">Recevez un email lorsqu'une nouvelle réservation est effectuée</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Modifications de réservation</p>
                      <p className="text-sm text-muted-foreground">Recevez un email en cas de modification d'une réservation</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Paiements reçus</p>
                      <p className="text-sm text-muted-foreground">Recevez un email lorsqu'un paiement est reçu</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Newsletter</p>
                      <p className="text-sm text-muted-foreground">Recevez nos actualités et offres promotionnelles</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-sm font-medium mb-3">Notifications Push</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Activer les notifications push</p>
                        <p className="text-sm text-muted-foreground">Recevez des alertes en temps réel sur votre appareil</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button>Enregistrer les préférences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Informations de Facturation</CardTitle>
              <CardDescription>Gérez vos méthodes de paiement et préférences de facturation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Méthodes de Paiement</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Carte Visa se terminant par 4242</p>
                        <p className="text-sm text-muted-foreground">Expire le 12/2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Modifier</Button>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-3">Ajouter une méthode de paiement</Button>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Informations de Facturation</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Raison sociale</Label>
                      <Input id="companyName" defaultValue="Transport Rungis SAS" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="siret">Numéro SIRET</Label>
                      <Input id="siret" defaultValue="123 456 789 00012" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vatNumber">Numéro de TVA</Label>
                      <Input id="vatNumber" defaultValue="FR 12 123456789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingEmail">Email de facturation</Label>
                      <Input id="billingEmail" type="email" defaultValue="compta@rungis-transport.fr" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Enregistrer</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Sécurité du Compte</CardTitle>
              <CardDescription>Gérez vos paramètres de sécurité et authentification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Mot de Passe</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmer le nouveau mot de passe</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="mt-2">Mettre à jour le mot de passe</Button>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium mb-3">Authentification à Deux Facteurs</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Activer l'authentification à deux facteurs</p>
                    <p className="text-sm text-muted-foreground">Renforcez la sécurité de votre compte avec une vérification supplémentaire</p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium mb-3">Sessions Actives</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Paris, France</p>
                      <p className="text-sm text-muted-foreground">Chrome sur Windows • Actuellement actif</p>
                    </div>
                    <Button variant="outline" size="sm">Déconnecter</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Lyon, France</p>
                      <p className="text-sm text-muted-foreground">Safari sur macOS • Dernière activité il y a 2 jours</p>
                    </div>
                    <Button variant="outline" size="sm">Déconnecter</Button>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button variant="destructive" className="flex items-center">
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnecter toutes les sessions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;
