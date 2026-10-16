'use client';
import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { properti } from '@/lib/data';

const TAB = [['Dijual', 'Dijual'], ['Disewakan', 'Disewa']];

// Di ponsel kartu digeser ke samping (sesuai janji "semudah geser layar"); di layar lebar menjadi grid.
export default function Rekomendasi() {
  const [tab, setTab] = useState('Dijual');
  const [diganti, setDiganti] = useState(false);
  const list = properti.filter((p) => p.status === tab).slice(0, 6);
  const pilih = (t) => { setTab(t); setDiganti(true); };

  return (
    <div>
      <div role="group" aria-label="Jenis penawaran" className="inline-flex rounded-full border border-black/10 bg-white p-1">
        {TAB.map(([t, l]) => (
          <button key={t} type="button" aria-pressed={tab === t} onClick={() => pilih(t)} className={`min-h-10 rounded-full px-5 py-2 text-sm font-semibold transition ${tab === t ? 'bg-forest text-white' : 'text-muted hover:text-ink'}`}>{l}</button>
        ))}
      </div>
      <ul key={tab} className="-mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:thin] sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3" aria-label={`Listing ${tab === 'Dijual' ? 'dijual' : 'disewakan'} pilihan`}>
        {list.map((p) => (
          <li key={p.id} className={`w-[78%] shrink-0 snap-start sm:w-auto ${diganti ? 'kartu-muncul' : ''}`}><PropertyCard item={p} /></li>
        ))}
      </ul>
      <p className="mt-1 text-xs text-muted sm:hidden">Geser untuk melihat {list.length} listing.</p>
    </div>
  );
}
