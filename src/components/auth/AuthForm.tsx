
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

export type AuthFormProps = {
  type?: 'login' | 'signup';
};

export const AuthForm: React.FC<AuthFormProps> = ({ type = 'login' }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(type);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'client' // Changed default to 'client' instead of 'rungis'
  });
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would check the user's role from the login response
      // For now, navigate to the role-based router which will handle the redirection
      navigate('/dashboard');
      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté"
      });
    }, 1500);
  };
  
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call - in a real app you would store the user's role in your authentication system
    setTimeout(() => {
      setIsLoading(false);
      
      // Redirect based on account type
      const dashboardRoute = signupData.accountType === 'transport' ? '/transporteur' : '/client';
      navigate(dashboardRoute);
      
      toast({
        title: "Compte créé avec succès",
        description: `Bienvenue sur votre tableau de bord ${signupData.accountType === 'transport' ? 'transporteur' : 'client'}`
      });
    }, 1500);
  };
  
  const handleAccountTypeChange = (type: string) => {
    setSignupData(prev => ({ ...prev, accountType: type }));
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div 
        className="p-6 bg-white rounded-xl shadow-glass-lg border border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 w-full mb-6">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="signup">Inscription</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  name="email"
                  type="email"
                  placeholder="Entrez votre email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="login-password">Mot de passe</Label>
                  <Button variant="link" className="p-0 h-auto text-sm" onClick={() => navigate('/forgot-password')}>
                    Mot de passe oublié?
                  </Button>
                </div>
                <Input
                  id="login-password"
                  name="password"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Connexion en cours...' : 'Se connecter'}
              </Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-muted-foreground">ou continuer avec</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" type="button" className="w-full">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="signup">
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">Nom complet</Label>
                <Input
                  id="signup-name"
                  name="name"
                  placeholder="Entrez votre nom"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="Entrez votre email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-password">Mot de passe</Label>
                <Input
                  id="signup-password"
                  name="password"
                  type="password"
                  placeholder="Créez un mot de passe"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-confirm-password">Confirmer le mot de passe</Label>
                <Input
                  id="signup-confirm-password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirmez votre mot de passe"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Type de compte</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={signupData.accountType === 'client' ? 'default' : 'outline'}
                    className="w-full"
                    onClick={() => handleAccountTypeChange('client')}
                  >
                    Client
                  </Button>
                  <Button
                    type="button"
                    variant={signupData.accountType === 'transport' ? 'default' : 'outline'}
                    className="w-full"
                    onClick={() => handleAccountTypeChange('transport')}
                  >
                    Transporteur
                  </Button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Création du compte...' : 'Créer un compte'}
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                En vous inscrivant, vous acceptez nos{' '}
                <Button variant="link" className="p-0 h-auto text-sm" onClick={() => navigate('/terms')}>
                  Conditions d'utilisation
                </Button>{' '}
                et{' '}
                <Button variant="link" className="p-0 h-auto text-sm" onClick={() => navigate('/privacy')}>
                  Politique de confidentialité
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};
