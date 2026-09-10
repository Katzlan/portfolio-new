// portfolio.jsx — single-file C·Engineered portfolio.
// EDIT THE `DATA` OBJECT BELOW TO PUT IN YOUR REAL CONTENT.
// Everything else is layout — touch only if you want to change the structure.

// ============================================================
//  ░░  EDIT HERE  ░░
// ============================================================
const DATA = {
  // header
  name: 'Andrei Ignatov',
  version: '',
  crumb: '',
  role: '',

  // short bio. wrap any word/phrase in [brackets] and define it in `badges`
  // below to render it as an inline pill.
  bio: [
  'As a Senior Product Designer, I enhanced [salmon]\'s internal Referral Program for Filipino promodizers by streamlining KYC flows and creating comic-style onboarding guides.',
  'Previously served as Lead Designer at [gazprom-id], driving products like SSO, Zenit, GID Hub, and the GID Enterprise Platform.'],
  bioSocial: 'I advocate for a strong Design Trio model, treating managers, engineers, and designers as equal partners focused on real business outcomes and user needs. I thrive on complex projects and leverage AI to streamline my workflow and boost team impact.',
  // each entry is either a plain string (becomes a text pill) or an
  // object { icon, label } (icon shown to the left of label).
  badges: {
    ixdf: { label: 'IxDF', href: 'https://ixdf.org/courses' },
    salmon: { label: 'Salmon', href: 'https://salmon.ph/' },
    'gazprom-id': { label: 'Gazprom ID', href: 'https://id.gid.ru/' },
    nbu: { label: 'NBU Uzbekistan', href: 'https://nbu.uz/ru' },
    vtb: { label: 'VTB', href: 'https://www.vtb.ru/' },
    lanit: { label: 'Lanit', href: 'https://lanit.ru/' },
    email: { label: 'andrej.filly@gmail.com', href: 'mailto:andrej.filly@gmail.com' },
    site: { label: 'andyhoudini.ru', href: 'https://andyhoudini.ru' },
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andy-ignatov-662a38252/?skipRedirect=true' },
    x: { label: 'X', href: 'https://x.com/AndreiLancarra' },
    telegram: { label: 'Telegram', href: 'https://t.me/katzlan' }
  },

  // commit/activity heatmap
  activity: {
    label: 'Activity · 6 mo',
    metric: '342 commits',
    density: 0.45
  },


  // bottom dock
  dock: [
  { id: 'proj', iconName: 'spark', label: 'Projects' },
  { id: 'comp', iconName: 'grid', label: 'Components' },
  { id: 'notes', iconName: 'note', label: 'Notes' }],


  // footer links
  contacts: [
  { label: 'Telegram', href: 'https://t.me/katzlan' },
  { label: 'Email', href: 'mailto:andrej.filly@gmail.com' },
  { label: 'Resume', href: 'https://www.dropbox.com/scl/fi/3drkqypbqoz31w8wyfvzl/Andy-Ignatov-Senior-Product-Designer.pdf?rlkey=re0s1li6er28g26pqe8pe6hrd&st=u3zlqqpe&dl=0' }],

  pageTitle: 'Andrei Ignatov — Senior product designer'
};
// ============================================================
//  ░░  END EDIT  ░░  (everything below is layout)
// ============================================================


// ---------- responsive layout (tablet + mobile) ----------
const DESKTOP_PAD = 24;
const COMPACT_PAD = 12;
const COMPACT_MAX = 1023;
const MOBILE_MAX = 767;

const useLayout = () => {
  const [width, setWidth] = React.useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  React.useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const isCompact = width <= COMPACT_MAX;
  const isMobile = width <= MOBILE_MAX;
  const pad = isCompact ? COMPACT_PAD : DESKTOP_PAD;
  const ratio = 16 / 15;
  const scaleFont = (px) => (isCompact ? Math.max(16, Math.round(px * ratio)) : px);
  const scaleSize = (px) => (isCompact ? Math.round(px * ratio) : px);
  return {
    isCompact,
    isMobile,
    pad,
    contentWidth: `min(560px, calc(100vw - ${pad * 2}px))`,
    scale: scaleFont,
    scaleSize,
  };
};

// ---------- localStorage helpers ----------
const lsGet = (k, fb) => {
  try {const v = localStorage.getItem(k);return v == null ? fb : v;}
  catch {return fb;}
};
const lsSet = (k, v) => {try {localStorage.setItem(k, v);} catch {}};

// ---------- icons ----------
const ICONS = {
  sun: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>,

  moon: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>,

  menu: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>,

  arrowUp: (p) =>
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>,

  spark: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" />
    </svg>,

  grid: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" />
    </svg>,

  note: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M4 4h12l4 4v12H4z" /><path d="M16 4v4h4" />
    </svg>,

  heart: (p) =>
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
      <path d="M12 21s-7-4.35-9.5-9.05C.9 8.5 2.6 4.5 6.5 4.5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 3.9 0 5.6 4 4 7.45C19 16.65 12 21 12 21z" />
    </svg>

};
const I = (name, props) => {
  const C = ICONS[name];
  return C ? <C {...props || {}} /> : null;
};

// ---------- Activity heatmap ----------
const Heatmap = ({ rows = 7, cols = 36, gap = 3, density = 0.45, seed = 7, dark }) => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 900);
    return () => clearInterval(id);
  }, []);
  const accent = dark ? '#3fb950' : '#1f883d';
  const medium = dark ? 'rgba(63,185,80,0.4)' : 'rgba(31,136,61,0.4)';
  const dim = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)';
  const cells = React.useMemo(() => {
    const arr = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const n = Math.abs(Math.sin(r * 13.31 + c * 7.17 + seed * 1.7 + tick * 1.13) * 10000) % 1;
        let s = 0;
        if (n < density * 0.55) s = 2;else
        if (n < density) s = 1;
        arr.push(s);
      }
    }
    return arr;
  }, [tick, rows, cols, seed, density]);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: `${gap}px`,
      width: '100%'
    }}>
      {cells.map((s, i) =>
      <div key={i} style={{
        aspectRatio: '1 / 1',
        background: s === 2 ? accent : s === 1 ? medium : dim,
        transition: 'background 600ms ease',
        borderRadius: 1
      }} />
      )}
    </div>);

};

// ---------- Dock ----------
const Dock = ({ items, active, onChange, dark, scale }) =>
<div style={{
  position: 'fixed', left: '50%', bottom: 24, transform: 'translateX(-50%)',
  display: 'flex', alignItems: 'center', gap: 6,
  padding: '6px 8px',
  background: dark ? 'rgba(20,20,22,0.78)' : 'rgba(255,255,255,0.82)',
  border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
  borderRadius: 999,
  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
  boxShadow: dark ? '0 12px 40px rgba(0,0,0,0.4)' : '0 12px 40px rgba(0,0,0,0.08)',
  zIndex: 50
}}>
    <div style={{
    width: 30, height: 30, borderRadius: '50%',
    background: dark ? '#2a2a2a' : '#e8e6e0',
    backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,.25), transparent 60%)',
    flex: '0 0 auto'
  }} />
    {items.map((it) => {
    const isActive = active === it.id;
    return (
      <button key={it.id} onClick={() => onChange(it.id)} style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '6px 12px', borderRadius: 999, border: 'none',
        background: isActive ? dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.06)' : 'transparent',
        color: dark ? '#e8e6e0' : '#1d1d1f',
        fontFamily: 'var(--font-sans)', fontSize: scale(15), fontWeight: 500, cursor: 'pointer',
        letterSpacing: '-0.005em'
      }}>
          <span style={{ display: 'inline-flex', opacity: 0.85 }}>{I(it.iconName)}</span>
          <span>{it.label}</span>
        </button>);

  })}
  </div>;


// ---------- Inline-link text helper ----------
// Items in `[brackets]` become underlined links if the matching badge entry has
// an `href`; otherwise the word is rendered as plain text.
const RichLine = ({ text, badges, dark }) => {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((p, i) => {
    if (p.startsWith('[') && p.endsWith(']')) {
      const key = p.slice(1, -1);
      const b = badges[key];
      if (!b) return key;
      const label = typeof b === 'string' ? b : b.label;
      const href = typeof b === 'object' ? b.href : null;
      if (href) {
        return (
          <a key={i} href={href} target="_blank" rel="noreferrer"
          style={{
            color: '#000',
            textDecoration: 'underline',
            textDecorationColor: dark ? 'rgba(232,230,224,0.35)' : 'rgba(29,29,31,0.3)',
            textUnderlineOffset: '3px',
            textDecorationThickness: '1px'
          }}>{label}</a>);

      }
      return <React.Fragment key={i}>{label}</React.Fragment>;
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
};

// ---------- Foldable photo (Duo-style unfold) ----------
// Folded: the right half only (160x224, rounded on the right). Click swings the
// left half open around the hinge with a frosted-glass blur and a light sheen.
const FOLD_W = 160, FOLD_H = 224, FOLD_R = 22, FOLD_MS = 900;
const FOLD_EASE = 'cubic-bezier(.22,.8,.2,1)';
const foldT = (...props) => props.map((p) => `${p} ${FOLD_MS}ms ${FOLD_EASE}`).join(', ');

const FoldPhoto = ({ src, alt }) => {
  const [open, setOpen] = React.useState(false);
  const [runs, setRuns] = React.useState(0);
  const toggle = () => { setOpen((o) => !o); setRuns((n) => n + 1); };
  const fx = (name) => runs ? `${name} ${FOLD_MS}ms ${FOLD_EASE} both` : 'none';
  const fxDir = open ? 'normal' : 'reverse';
  return (
    <button type="button" onClick={toggle} aria-pressed={open} aria-label={open ? 'Fold photo' : 'Unfold photo'}
      style={{
        position: 'relative', display: 'block',
        width: open ? FOLD_W * 2 : FOLD_W, height: FOLD_H,
        padding: 0, border: 'none', background: 'transparent', cursor: 'pointer',
        perspective: 1200,
        transition: foldT('width'),
        WebkitTapHighlightColor: 'transparent',
      }}>
      <style>{`
        @keyframes fold-sheen {
          0% { opacity: 0; transform: translateX(-70%) skewX(-14deg); }
          45% { opacity: .75; }
          100% { opacity: 0; transform: translateX(70%) skewX(-14deg); }
        }
        @keyframes fold-hinge { 0% { opacity: 0; } 45% { opacity: 1; } 100% { opacity: 0; } }
      `}</style>
      <div style={{
        position: 'absolute', top: 0, right: 0, width: FOLD_W, height: FOLD_H,
        overflow: 'hidden', borderRadius: `0 ${FOLD_R}px ${FOLD_R}px 0`,
      }}>
        <img src={src} alt={alt} draggable={false} style={{
          position: 'absolute', top: 0, left: -FOLD_W, width: FOLD_W * 2, height: FOLD_H,
          objectFit: 'cover', display: 'block',
        }} />
        <div key={`h${runs}`} aria-hidden="true" style={{
          position: 'absolute', inset: 0, opacity: 0, pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(0,0,0,.35), rgba(0,0,0,0) 40%)',
          animation: fx('fold-hinge'), animationDirection: fxDir,
        }} />
      </div>
      <div style={{
        position: 'absolute', top: 0, right: FOLD_W, width: FOLD_W, height: FOLD_H,
        overflow: 'hidden', borderRadius: `${FOLD_R}px 0 0 ${FOLD_R}px`,
        transformOrigin: '100% 50%',
        transform: `rotateY(${open ? 0 : 90}deg)`,
        backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
        transition: foldT('transform'),
        willChange: 'transform',
      }}>
        <img src={src} alt="" aria-hidden="true" draggable={false} style={{
          position: 'absolute', top: 0, left: 0, width: FOLD_W * 2, height: FOLD_H,
          objectFit: 'cover', display: 'block',
          filter: open ? 'blur(0px) brightness(1)' : 'blur(14px) brightness(1.15)',
          transition: foldT('filter'),
        }} />
        <div key={`s${runs}`} aria-hidden="true" style={{
          position: 'absolute', inset: '-20%', opacity: 0, pointerEvents: 'none',
          background: 'linear-gradient(100deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.8) 50%, rgba(255,255,255,0) 70%)',
          animation: fx('fold-sheen'), animationDirection: fxDir,
        }} />
      </div>
    </button>
  );
};

// ============================================================
//  THE PAGE
// ============================================================
const Portfolio = () => {
  const [theme, setTheme] = React.useState(() => lsGet('theme', 'dark'));
  const [activeDock, setActiveDock] = React.useState('comp');
  const { isCompact, scale } = useLayout();
  const dark = theme === 'dark';

  React.useEffect(() => {
    lsSet('theme', theme);
    document.body.dataset.theme = theme;
    document.documentElement.lang = 'en';
  }, [theme]);
  React.useEffect(() => {
    document.title = DATA.pageTitle ?? DATA.name;
  }, []);

  const fg = dark ? '#e6e4dd' : '#181816';
  const bg = dark ? '#0b0b0c' : '#ffffff';

  return (
    <div style={{
      minHeight: '100vh', background: bg, color: fg,
      fontFamily: 'var(--font-sans)',
      letterSpacing: '-0.005em', position: 'relative',
      transition: 'background .25s, color .25s',
      display: 'flex', flexDirection: 'column'
    }}>
      {/* faint dot grid */}
      <div style={{
        position: 'fixed', inset: 0, opacity: dark ? 0.7 : 1,
        backgroundImage: `radial-gradient(circle, ${dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      {/* centered hero: avatar + bio */}
      <main style={{
        flex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 1,
        padding: isCompact ? '32px 20px' : '48px 24px',
      }}>
        <div style={{ width: '100%', maxWidth: 480, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
            <FoldPhoto src="assets/avatar.png" alt={DATA.name} />
          </div>
          <p style={{ margin: '0 0 16px', fontSize: scale(18), fontWeight: 600, color: '#000' }}>
            {DATA.name}
          </p>
          {(Array.isArray(DATA.bio) ? DATA.bio : [DATA.bio]).map((para, i) =>
          <p key={i} style={{ margin: i === 0 ? 0 : '12px 0 0', fontSize: scale(15), lineHeight: "1.65", color: '#75726f' }}>
            <RichLine text={para} badges={DATA.badges} dark={dark} />
          </p>
          )}
          {DATA.bioSocial ?
          <p style={{ margin: '12px 0 0', fontSize: scale(15), lineHeight: "1.65", color: '#75726f' }}>
            <RichLine text={DATA.bioSocial} badges={DATA.badges} dark={dark} />
          </p> :
          null}
        </div>
      </main>

      {/* footer */}
      <footer style={{
        width: '100%', maxWidth: 480, margin: '0 auto',
        padding: isCompact ? '0 20px 24px' : '0 24px 32px',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: scale(15),
          color: dark ? 'rgba(232,230,224,0.7)' : 'rgba(29,29,31,0.7)',
          display: 'inline-flex', alignItems: 'center', gap: 8
        }}>
          {DATA.contacts.map((c, i) =>
          <React.Fragment key={c.label}>
            {i > 0 ? <span style={{ opacity: 0.4 }}>·</span> : null}
            <a href={c.href} target="_blank" rel="noreferrer" style={{
              color: '#000', textDecoration: 'underline',
              textDecorationColor: dark ? 'rgba(232,230,224,0.35)' : 'rgba(29,29,31,0.3)',
              textUnderlineOffset: '3px', textDecorationThickness: '1px',
            }}>{c.label}</a>
          </React.Fragment>
          )}
        </div>
      </footer>
    </div>);

};

ReactDOM.createRoot(document.getElementById('root')).render(<Portfolio />);