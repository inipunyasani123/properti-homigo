import PageHeader from '@/components/PageHeader';
import Bandingkan from '@/components/Bandingkan';
import { halaman } from '@/lib/seo';

export const metadata = halaman({
  judul: 'Bandingkan listing',
  deskripsi: 'Taruh dua atau tiga rumah, apartemen, atau kost berdampingan: pengeluaran per bulan, uang muka, harga per meter persegi, luas, dan fasilitas.',
  path: '/bandingkan',
});

export default function BandingkanPage() {
  return (
    <main className="relative z-10">
      <PageHeader kicker="Bandingkan" title="Dua pilihan, satu meja" subtitle="Pilih sampai tiga listing. Angka terbaik di tiap baris ditandai — tautan halaman ini bisa dibagikan apa adanya." />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Bandingkan />
        </div>
      </section>
    </main>
  );
}
