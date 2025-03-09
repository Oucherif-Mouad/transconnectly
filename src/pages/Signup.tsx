
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { AuthForm } from '@/components/auth/AuthForm';

const Signup = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12">
        <AuthForm type="signup" />
      </div>
    </Layout>
  );
};

export default Signup;
