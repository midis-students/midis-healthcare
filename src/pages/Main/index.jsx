import Navigation from '@/components/Navigation';
import DashboardPage from '../Dashboard';

export default function MainPage() {
  return (
    <>
      <Navigation />
      <main>
        <DashboardPage />
      </main>
    </>
  );
}
