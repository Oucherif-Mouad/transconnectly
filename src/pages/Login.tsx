
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { AuthForm } from '@/components/auth/AuthForm';

const Login = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12">
        <AuthForm type="login" />
      </div>
    </Layout>
  );
};

export default Login;
