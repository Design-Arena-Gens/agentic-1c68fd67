import PhraseCard, { type Phrase } from '@/components/PhraseCard';

const phrases: Phrase[] = [
  { id: 'greet-1', sq: 'P?rsh?ndetje!', en: 'Hello!', cat: 'P?rsh?ndetje' },
  { id: 'greet-2', sq: 'Mir?m?ngjes!', en: 'Good morning!', cat: 'P?rsh?ndetje' },
  { id: 'greet-3', sq: 'Mir?mbr?ma!', en: 'Good evening!', cat: 'P?rsh?ndetje' },
  { id: 'polite-1', sq: 'Ju lutem', en: 'Please', cat: 'Mir?sjellje' },
  { id: 'polite-2', sq: 'Faleminderit', en: 'Thank you', cat: 'Mir?sjellje' },
  { id: 'polite-3', sq: 'M? falni', en: 'Excuse me / Sorry', cat: 'Mir?sjellje' },
  { id: 'basic-1', sq: 'Si jeni?', en: 'How are you?', cat: 'Bised?' },
  { id: 'basic-2', sq: 'Un? quhem ...', en: 'My name is ...', cat: 'Bised?' },
  { id: 'basic-3', sq: 'Nga jeni?', en: 'Where are you from?', cat: 'Bised?' },
  { id: 'help-1', sq: 'A mund t? m? ndihmoni?', en: 'Can you help me?', cat: 'Ndihm?' },
  { id: 'help-2', sq: 'Nuk e kuptoj', en: "I don't understand", cat: 'Ndihm?' },
  { id: 'help-3', sq: 'A flisni anglisht?', en: 'Do you speak English?', cat: 'Ndihm?' },
];

export default function Page() {
  return (
    <main className="flex flex-col gap-8">
      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-2">M?so dhe flet shqip</h2>
        <p className="text-gray-600">Kliko ?D?gjo? p?r t? d?gjuar shqiptimin n? shqip. Z?ri shqiptar p?rdoret kur ?sht? i disponuesh?m n? pajisjen tuaj.</p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {phrases.map(p => (
          <PhraseCard key={p.id} phrase={p} />)
        )}
      </section>
    </main>
  );
}
