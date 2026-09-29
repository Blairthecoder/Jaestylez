'use client';

import { useEffect, useRef, useState } from 'react';

type Option = { value: string; label: string; selected?: boolean };

/** Renders the same markup as the jQuery "nice-select" plugin so the template CSS applies. */
export function NiceSelect({
  name,
  id,
  options,
  onChange,
}: {
  name: string;
  id?: string;
  options: Option[];
  onChange?: (value: string) => void;
}) {
  const initial = Math.max(0, options.findIndex((o) => o.selected));
  const [index, setIndex] = useState(initial);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (options[index]) onChange?.(options[index].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen((v) => !v);
    } else if (event.key === 'Escape') {
      setOpen(false);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIndex((i) => Math.max(0, i - 1));
    }
  }

  return (
    <>
      <input type="hidden" name={name} id={id} value={options[index]?.value ?? ''} />
      <div
        ref={root}
        className={`nice-select${open ? ' open' : ''}`}
        tabIndex={0}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
      >
        <span className="current">{options[index]?.label}</span>
        <ul className="list" role="listbox">
          {options.map((option, i) => (
            <li
              key={option.value}
              role="option"
              aria-selected={i === index}
              className={`option${i === index ? ' selected focus' : ''}`}
              data-value={option.value}
              onClick={(event) => {
                event.stopPropagation();
                setIndex(i);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
