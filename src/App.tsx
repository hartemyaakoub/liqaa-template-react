import { useEffect, useState } from 'react';
import { LIQAA, type LIQAAClient } from '@liqaa/js';

export default function App() {
  const [pk, setPk] = useState(import.meta.env.VITE_LIQAA_PK || '');
  const [token, setToken] = useState('');
  const [client, setClient] = useState<LIQAAClient | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!pk || !token) return;
    setError('');
    LIQAA.init({ publicKey: pk, sdkToken: token, accent: '#1d4ed8' })
      .then(setClient)
      .catch((e) => setError(e.message));
  }, [pk, token]);

  return (
    <main style={{ maxWidth: 640, margin: '80px auto', padding: '0 24px', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>React + LIQAA</h1>
      <p style={{ color: '#475569', lineHeight: 1.7 }}>
        Paste your <code>pk_live_</code> and a server-issued <code>sdk_token</code> below.
        Issue one with: <code>npx @liqaa/cli token issue you@test.com</code>
      </p>

      <input value={pk} onChange={(e) => setPk(e.target.value)} placeholder="pk_live_…"
             style={{ width: '100%', padding: 12, marginBottom: 8, fontFamily: 'monospace' }} />
      <input value={token} onChange={(e) => setToken(e.target.value)} placeholder="sdk_token (tkc_…)"
             style={{ width: '100%', padding: 12, marginBottom: 16, fontFamily: 'monospace' }} />

      {error && <div style={{ padding: 12, background: '#fef2f2', color: '#dc2626', borderRadius: 8, marginBottom: 16 }}>{error}</div>}

      <button onClick={() => client?.startCall('support@you.com', 'Support')} disabled={!client}
              style={{ padding: '14px 24px', background: '#0a0d18', color: '#fff', border: 0, borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
        🎥 {client ? 'Start call' : 'Loading SDK…'}
      </button>
    </main>
  );
}
