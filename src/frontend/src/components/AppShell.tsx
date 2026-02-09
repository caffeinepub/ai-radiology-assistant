import { Outlet } from '@tanstack/react-router';
import TopNav from './TopNav';
import Footer from './Footer';

export default function AppShell() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
