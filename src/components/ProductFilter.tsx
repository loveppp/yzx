import { useMemo, useState } from 'react';

export interface ProductItem {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  moldApplication: string;
  materials: string[];
  heroImage: string;
  href: string;
}

export interface CategoryOptionGroup {
  groupLabel: string;
  options: { value: string; label: string }[];
}

interface ProductFilterProps {
  products: ProductItem[];
  labels: {
    filterTitle: string;
    filterIndustry: string;
    filterCategory: string;
    filterMaterial: string;
    all: string;
    resultCount: string;
    viewDetails: string;
    customTag: string;
  };
  industries: { value: string; label: string }[];
  categoryGroups: CategoryOptionGroup[];
}

export default function ProductFilter({
  products,
  labels,
  industries,
  categoryGroups,
}: ProductFilterProps) {
  const [industry, setIndustry] = useState('');
  const [category, setCategory] = useState('');
  const [material, setMaterial] = useState('');

  const materials = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.materials.forEach((m) => set.add(m)));
    return Array.from(set).sort();
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (industry && p.moldApplication !== industry) return false;
      if (category && p.category !== category) return false;
      if (material && !p.materials.includes(material)) return false;
      return true;
    });
  }, [products, industry, category, material]);

  const selectClass =
    'mt-1.5 w-full border border-borui-navy/20 bg-white px-3 py-2.5 text-sm text-borui-navy';

  return (
    <div>
      <div className="rounded border border-borui-navy/10 bg-white p-4 md:p-5">
        <h2 className="font-serif text-lg text-borui-navy">{labels.filterTitle}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="text-sm font-medium text-borui-navy">{labels.filterIndustry}</label>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className={selectClass}>
              <option value="">{labels.all}</option>
              {industries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-borui-navy">{labels.filterCategory}</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass}>
              <option value="">{labels.all}</option>
              {categoryGroups.map((g) => (
                <optgroup key={g.groupLabel} label={g.groupLabel}>
                  {g.options.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="text-sm font-medium text-borui-navy">{labels.filterMaterial}</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)} className={selectClass}>
              <option value="">{labels.all}</option>
              {materials.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="mt-4 text-sm text-borui-steel">
          {labels.resultCount.replace('{n}', String(filtered.length))}
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <a
            key={product.slug}
            href={product.href}
            className="group overflow-hidden border border-borui-navy/10 bg-white transition-shadow hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-borui-light">
              <img
                src={product.heroImage}
                alt={product.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-base text-borui-navy">{product.name}</h3>
                <span className="tag-custom shrink-0 text-[10px]">{labels.customTag}</span>
              </div>
              <p className="mt-1 text-xs text-borui-steel">{product.categoryLabel}</p>
              <p className="mt-2 text-xs text-borui-brass">{labels.viewDetails} →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
