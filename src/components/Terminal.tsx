import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import { profile, projects, terminalCopy } from '../content';

export function Terminal() {
  const id = useId();
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState(terminalCopy.greeting);
  function run(event: FormEvent) {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (!value) return;
    const answers: Record<string, string> = {
      help: 'Try: whoami, projects, contact, clear',
      whoami: `${profile.name}\n${profile.discipline} @ ${profile.university}`,
      projects: projects.map((p) => p.title).join(' · '),
      contact: profile.email || 'arethamadeline@connect.hku.hk',
      clear: '',
    };
    setResponse(answers[value] ?? `Unknown command: ${command}. Try “help”.`);
    setCommand('');
  }
  return <div className="terminal">
    <div className="terminal-top"><span className="terminal-dots" aria-hidden="true">● ● ●</span><span>aretha / hello.ts</span><span aria-hidden="true">⌘</span></div>
    <div className="terminal-body">
      <p className="terminal-comment">// always a work in progress</p>
      <p><span className="code-pink">const</span> aretha = {'{'}</p>
      <div className="code-indent"><p>studying: <span className="code-cream">&quot;{profile.discipline}&quot;</span>,</p><p>building: <span className="code-cream">&quot;{terminalCopy.building}&quot;</span>,</p><p>approach: <span className="code-cream">&quot;{terminalCopy.approach}&quot;</span></p></div>
      <p>{'};'}</p>
      <div className="terminal-response" aria-live="polite" aria-atomic="true">{response}</div>
      <form onSubmit={run} className="terminal-form">
        <label htmlFor={`${id}-command`}>&gt;</label>
        <input id={`${id}-command`} aria-label="Terminal command" aria-describedby={`${id}-help`} value={command} onChange={(e) => setCommand(e.target.value)} placeholder="type help" autoComplete="off" autoCapitalize="off" spellCheck={false} maxLength={80}/>
        <button type="submit" aria-label="Run terminal command">Run</button>
      </form>
      <p id={`${id}-help`} className="terminal-help">Try “help” and press Enter.</p>
    </div>
  </div>;
}
