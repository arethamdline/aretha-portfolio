import { useEffect, useId, useRef, useState } from 'react';
import { terminalCopy } from '../content';
import { Terminal } from './Terminal';

export function TerminalLauncher() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    const element = dialog.current;
    if (open && element && !element.open) element.showModal();
    if (!open && element?.open) element.close();
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  return <>
    <button ref={launcher} className="terminal-launcher" aria-label="Open terminal" aria-haspopup="dialog" aria-controls={id} aria-expanded={open} onClick={() => setOpen(true)}>
      <span className="launcher-glyph" aria-hidden="true">&gt;<span className="launcher-cursor">_</span></span>
      <span className="launcher-title">{terminalCopy.launcherTitle}</span>
    </button>
    <dialog ref={dialog} id={id} className="terminal-dialog" aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} onCancel={() => setOpen(false)} onClose={() => { setOpen(false); launcher.current?.focus(); }} onClick={event => {
      if (event.target === event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false);
      }
    }}>
      <div className="terminal-dialog-heading"><div><p className="eyebrow">A SMALL INTERACTIVE DETOUR</p><h2 id={`${id}-title`}>{terminalCopy.dialogTitle}</h2></div><button className="dialog-close" onClick={() => setOpen(false)} aria-label="Close terminal">×</button></div>
      <p id={`${id}-description`} className="terminal-dialog-description">{terminalCopy.dialogDescription}</p>
      <Terminal/>
      <p className="dialog-footnote">Esc to close <span aria-hidden="true">♡</span></p>
    </dialog>
  </>;
}
