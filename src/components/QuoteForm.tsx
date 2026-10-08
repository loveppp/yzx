import { useEffect, useState } from 'react';

const QUOTE_PRODUCT_KEY = 'yzx-quote-product';

export interface QuoteFormLabels {
  name: string;
  company: string;
  email: string;
  phone: string;
  whatsapp: string;
  category: string;
  message: string;
  file: string;
  submit: string;
  success: string;
  selectCategory: string;
  product: string;
  sending: string;
  error: string;
  messageHint: string;
}

interface QuoteFormProps {
  labels: QuoteFormLabels;
  categories: { value: string; label: string }[];
  initialCategory?: string;
  product?: string;
}

export default function QuoteForm({ labels, categories, initialCategory = '', product = '' }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [productLine, setProductLine] = useState(product);

  useEffect(() => {
    setProductLine(product);
  }, [product]);

  useEffect(() => {
    function applyStoredProduct() {
      try {
        const stored = sessionStorage.getItem(QUOTE_PRODUCT_KEY);
        if (stored) {
          setProductLine(stored);
          sessionStorage.removeItem(QUOTE_PRODUCT_KEY);
        }
      } catch {
        /* ignore */
      }
    }

    applyStoredProduct();
    window.addEventListener('yzx-quote-product-set', applyStoredProduct);
    return () => window.removeEventListener('yzx-quote-product-set', applyStoredProduct);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError('');
    const form = e.currentTarget;
    try {
      const response = await fetch('/api/quote', { method: 'POST', body: new FormData(form) });
      if (!response.ok) throw new Error('Unable to send');
      setSubmitted(true);
    } catch {
      setError(labels.error);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <p className="rounded border border-borui-brass/30 bg-borui-light px-6 py-8 text-center text-borui-navy">
        {labels.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {productLine && (
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-slate-600">{labels.product}</span>
          <input readOnly name="product" value={productLine} className="mt-1 w-full border border-borui-navy/20 bg-borui-light px-3 py-3 text-base" />
        </label>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-slate-600">{labels.name}</span>
          <input
            required
            name="name"
            type="text"
            className="mt-1 w-full border border-borui-navy/20 bg-white px-3 py-3 text-base focus:border-borui-brass focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-slate-600">{labels.company}</span>
          <input
            name="company"
            type="text"
            className="mt-1 w-full border border-borui-navy/20 bg-white px-3 py-3 text-base focus:border-borui-brass focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-slate-600">{labels.email}</span>
          <input
            required
            name="email"
            type="email"
            className="mt-1 w-full border border-borui-navy/20 bg-white px-3 py-3 text-base focus:border-borui-brass focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-slate-600">{labels.phone}</span>
          <input
            name="phone"
            type="tel"
            className="mt-1 w-full border border-borui-navy/20 bg-white px-3 py-3 text-base focus:border-borui-brass focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-slate-600">{labels.whatsapp}</span>
          <input
            name="whatsapp"
            type="text"
            className="mt-1 w-full border border-borui-navy/20 bg-white px-3 py-3 text-base focus:border-borui-brass focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-slate-600">{labels.category}</span>
          <select
            name="category"
            defaultValue={initialCategory}
            className="mt-1 w-full border border-borui-navy/20 bg-white px-3 py-3 text-base focus:border-borui-brass focus:outline-none"
          >
            <option value="">{labels.selectCategory}</option>
            {categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-xs uppercase tracking-wider text-slate-600">{labels.message}</span>
        <textarea
          name="message"
          rows={4}
          placeholder={labels.messageHint}
          className="mt-1 w-full border border-borui-navy/20 bg-white px-3 py-3 text-base focus:border-borui-brass focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-wider text-slate-600">{labels.file}</span>
        <input
          name="file"
          type="file"
          accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png"
          className="mt-1 w-full text-sm text-slate-600 file:mr-4 file:border-0 file:bg-borui-navy file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-wider file:text-white"
        />
      </label>
      {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
      <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto disabled:cursor-wait disabled:opacity-60">
        {sending ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
