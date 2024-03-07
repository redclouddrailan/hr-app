import React from 'react';
import { HeaderWithoutAuth } from '../../components/HeaderWithoutAuth/HeaderWithoutAuth';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderWithoutAuth />
      {children}
      <div>footer</div>
    </section>
  );
}
