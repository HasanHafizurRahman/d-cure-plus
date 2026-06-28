import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export interface SearchableSelectOption {
  value: string;
  label: string;
  searchText?: string;
}

interface SearchableSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: SearchableSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  emptyMessage?: string;
}

export default function SearchableSelect({
  id,
  value,
  onChange,
  options,
  placeholder = 'নির্বাচন করুন',
  disabled = false,
  emptyMessage = 'কোনো ফলাফল পাওয়া যায়নি',
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return options;

    return options.filter((opt) => {
      const haystack = (opt.searchText || opt.label).toLowerCase();
      return haystack.includes(query);
    });
  }, [options, searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpen = () => {
    if (disabled) return;
    setIsOpen(true);
    setSearchQuery('');
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchQuery('');
  };

  const displayValue = isOpen ? searchQuery : (selectedOption?.label || '');

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`relative flex items-center w-full bg-white border border-slate-200 rounded-lg transition-all ${
          disabled
            ? 'opacity-60 cursor-not-allowed'
            : 'hover:border-slate-300 focus-within:ring-2 focus-within:ring-brand-green/30 focus-within:border-brand-green'
        }`}
      >
        <Search size={16} className="absolute left-3 text-slate-400 pointer-events-none shrink-0" />
        <input
          ref={inputRef}
          id={id}
          type="text"
          value={displayValue}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={handleOpen}
          onClick={handleOpen}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
          className="w-full bg-transparent border-0 rounded-lg py-3 pl-9 pr-9 text-primary-dark font-medium font-display placeholder-slate-400 focus:outline-none disabled:cursor-not-allowed"
        />
        <ChevronDown
          size={16}
          className={`absolute right-3 text-slate-400 pointer-events-none shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && !disabled && (
        <ul className="absolute z-50 w-full mt-1 max-h-56 overflow-y-auto bg-white border border-slate-200 rounded-lg shadow-lg py-1">
          {filteredOptions.length === 0 ? (
            <li className="px-3 py-2.5 text-sm text-slate-500 font-display">{emptyMessage}</li>
          ) : (
            filteredOptions.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-left px-3 py-2.5 text-sm font-display transition-colors ${
                    opt.value === value
                      ? 'bg-brand-green/10 text-brand-green font-semibold'
                      : 'text-primary-dark hover:bg-slate-50'
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
