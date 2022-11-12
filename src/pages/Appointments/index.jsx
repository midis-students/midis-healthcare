import Header from '@/components/Header';
import Table from '@/components/Table';

export default function AppointmentsPage() {
  return (
    <>
      <Headers />
      <Table title="Appointment Activity" data={data} />
    </>
  );
}
