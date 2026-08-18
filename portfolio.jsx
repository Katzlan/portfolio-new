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
  bio: 'Certified [ixdf] UX and Product Design Expert with 6+ years of experience. I\'ve worked with leading tech companies across industries, from fintech to SaaS — including [salmon], [gazprom-id], [nbu], [vtb], [lanit] and others',
  bioSocial: 'I write posts on [linkedin], find inspiration on [x], and reply on [telegram].',
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

  // experience block
  expLabel: 'Experience',
  experience: [
  {
    label: '2026 — Current',
    value: 'FitnessSDK',
    description: 'Co-Founder',
    href: 'https://apps.apple.com/us/app/fitnesssdk/id6759220379',
    tile: { src: 'assets/logo-fitnesssdk.svg' }
  },
  {
    label: '2026 — 2026',
    value: 'Salmon Group',
    description: 'Senior Product Designer',
    href: 'https://salmon.ph/',
    tile: { src: 'assets/logo-salmon.svg' }
  },
  {
    label: '2025 — 2026',
    value: 'Gazprom ID',
    description: 'Senior Product Designer',
    href: 'https://id.gid.ru/',
    tile: { src: 'assets/logo-gazprom.svg' }
  },
  {
    label: '2023 — 2025',
    value: 'NBU Bank',
    description: 'Senior Product Designer',
    href: 'https://nbu.uz/ru',
    tile: { src: 'assets/logo-nbu.svg' }
  },
  {
    label: '2020 — 2023',
    value: 'VTB Family',
    description: 'Middle Product Designer',
    href: 'https://vtbfamily.ru/auth',
    tile: { src: 'assets/logo-vtb.svg' }
  }],

  // Side projects / experiments without company logos
  vibesLabel: 'Vibe-coded',
  vibes: [
  {
    label: '2026',
    value: 'SVG to WebP Exporter',
    description: 'Figma conversion plugin',
    href: 'https://www.figma.com/community/plugin/1638175144710570925/svg-to-webp-exporter'
  },
  {
    label: '2025',
    value: 'Dominant Gradient Color',
    description: 'Spotify-style covers from photos',
    href: 'https://codepen.io/katzlan/pen/YzaojLJ'
  }],


  // featured case shown above the project list
  caseLabel: 'Cases',
  featuredCases: [
  {
    title: 'GID Hub',
    sub: 'Gazprom ecosystem digital marketplace — **designed the core flow from scratch: [[90]]% supplier growth, +[[53]]% publish conversion**, catalog and product pages.',
    cover: 'assets/case-hub.png',
  },
  {
    title: 'GID Key',
    sub: 'Push authenticator for unified login — **replaced SMS: +[[68]]% sign-ins via key, −[[40]]% auth time**, keys for RUTUBE, Premier and internal services.',
    cover: 'assets/case-gid-key.png',
  },
  {
    title: 'Gazprom ID',
    sub: 'Single account across the ecosystem — **relaunched sign-in and signup: +[[24]]% account conversion, −[[31]]% OTP drop-off**, biometric quick login for RUTUBE and Premier.',
    cover: 'assets/case-gazprom-id.png',
  },
  {
    title: 'Zenit',
    sub: 'Club mobile app — **Media section redesign: +[[18]]% engagement, +[[22]]% session depth**, new navigation and news feed.',
    cover: 'assets/case-zenit.png',
  },
  {
    title: 'NBU Bank',
    sub: 'Milliy app and bank design system — **[[120]]+ components, −[[35]]% prototype time, −[[32]]% task time in product flows**, deposits, cards and payments.',
    cover: 'assets/case-nbu.png',
  },
  {
    title: 'VTB Family',
    sub: 'VTB Private Banking privileges — **rebuilt partner storefront: +[[27]]% offer CTR, −[[19]]% time to booking**, map and personalized picks.',
    cover: 'assets/case-vtb-family.png',
  },
  {
    title: 'GID Corporation Platform',
    sub: 'Corporate messenger for Gazprom teams — **new compose flow: −[[28]]% message steps, −[[34]]% meeting scheduling time**, chats by department.',
    cover: 'assets/case-gid-corp.png',
  }],

  // bottom dock
  dock: [
  { id: 'proj', iconName: 'spark', label: 'Projects' },
  { id: 'comp', iconName: 'grid', label: 'Components' },
  { id: 'notes', iconName: 'note', label: 'Notes' }],


  // footer line
  footer: 'Made by me',
  footerIcon: 'heart',
  clock: { city: 'Batumi', tz: 'UTC+4', timeZone: 'Asia/Tbilisi' },
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
    casesWidth: isCompact ? '100%' : `min(900px, calc(100vw - ${pad * 2}px))`,
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

// ---------- Tile (mini brand monogram or logo) ----------
const Tile = ({ tile, scaleSize }) => {
  const tileSize = scaleSize ? scaleSize(18) : 18;
  const tileFont = scaleSize ? scaleSize(10) : 10;
  if (tile.src) {
    return (
      <img
        src={tile.src}
        alt=""
        style={{
          width: tileSize, height: tileSize, borderRadius: 3,
          display: 'inline-block', flex: '0 0 auto', verticalAlign: 'middle',
          objectFit: 'cover',
        }}
      />
    );
  }
  return (
    <span style={{
      display: 'inline-flex', width: tileSize, height: tileSize, borderRadius: 2,
      background: tile.bg, color: tile.fg || '#fff',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: tileFont, lineHeight: 1,
      flex: '0 0 auto', verticalAlign: 'middle'
    }}>{tile.char}</span>
  );
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


// ---------- IconBtn ----------
const IconBtn = ({ children, onClick, dark, title }) =>
<button onClick={onClick} title={title} style={{
  width: 28, height: 28, borderRadius: 6, border: 'none', cursor: 'pointer',
  background: 'transparent', color: dark ? 'rgba(232,230,224,0.7)' : 'rgba(29,29,31,0.6)',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  transition: 'background .12s,color .12s'
}}
onMouseEnter={(e) => {
  e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
  e.currentTarget.style.color = dark ? '#fff' : '#000';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.background = 'transparent';
  e.currentTarget.style.color = dark ? 'rgba(232,230,224,0.7)' : 'rgba(29,29,31,0.6)';
}}>
  {children}</button>;


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
            color: 'inherit',
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

// ---------- Case description (highlighted metrics + censored digits) ----------
const CensorNum = ({ value, dark }) => (
  <span
    aria-hidden="true"
    style={{
      position: 'relative',
      display: 'inline-block',
      minWidth: `${Math.max(2, String(value).length) * 0.52}em`,
      height: '1.05em',
      verticalAlign: '-0.08em',
      marginRight: '0.02em',
    }}>
    <span style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      color: dark ? '#f2f0ea' : '#181816',
      filter: 'blur(5px)',
      opacity: 0.92,
      userSelect: 'none',
      whiteSpace: 'nowrap',
    }}>{value}</span>
    <span style={{
      position: 'absolute',
      inset: '-20% -30%',
      background: dark
        ? 'radial-gradient(ellipse 70% 90% at 50% 50%, rgba(255,255,255,0.28), transparent 72%)'
        : 'radial-gradient(ellipse 70% 90% at 50% 50%, rgba(0,0,0,0.12), transparent 72%)',
      pointerEvents: 'none',
    }} />
  </span>
);

const renderCaseSubChunk = (chunk, highlight, dark, keyBase) => {
  const dim = dark ? 'rgba(232,230,224,0.55)' : 'rgba(29,29,31,0.55)';
  const hi = dark ? '#e8e6e0' : '#1d1d1f';
  const tokens = chunk.split(/(\[\[[^\]]+\]\][%+\-]?)/g).filter(Boolean);
  return tokens.map((token, i) => {
    const censored = token.match(/^\[\[([^\]]+)\]\]([%+\-]?)$/);
    if (censored) {
      return (
        <React.Fragment key={`${keyBase}-c${i}`}>
          <CensorNum value={censored[1]} dark={dark} />
          {censored[2]}
        </React.Fragment>
      );
    }
    return token ? (
      <span key={`${keyBase}-t${i}`} style={{ color: highlight ? hi : dim }}>{token}</span>
    ) : null;
  });
};

const CaseSub = ({ text, dark }) => {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) => (
    <React.Fragment key={i}>{renderCaseSubChunk(part, i % 2 === 1, dark, i)}</React.Fragment>
  ));
};

// ---------- Section label ----------
const SectionLabel = ({ children, dark, scale, isMobile }) =>
<div style={{
  fontFamily: 'var(--font-mono)', fontSize: scale(15), textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: dark ? 'rgba(232,230,224,0.45)' : 'rgba(29,29,31,0.45)',
  marginBottom: isMobile ? 10 : 14
}}>{children}</div>;


// ---------- Experience row (title + dotted underline, description, date) ----------
const ExpRow = ({ label, value, description, href, tile, badge, dark, isFirst, scale, scaleSize, isMobile }) => {
  const [hover, setHover] = React.useState(false);
  const Wrap = href ? 'a' : 'div';
  const titleColor = dark ? '#e8e6e0' : '#1d1d1f';
  const dimColor = dark ? 'rgba(232,230,224,0.55)' : 'rgba(29,29,31,0.55)';
  return (
    <Wrap
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
        columnGap: isMobile ? 0 : 24,
        rowGap: isMobile ? 6 : 0,
        alignItems: 'start',
        padding: isFirst ? '0px 0px 8px' : '8px 0px',
        borderTop: isFirst ? 'none' : dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        textDecoration: 'none', color: 'inherit',
      }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontSize: scale(15), fontWeight: 500, letterSpacing: '-0.005em',
            color: titleColor,
            textDecoration: href ? 'underline' : 'none',
            textDecorationStyle: 'dotted',
            textDecorationColor: hover ? titleColor : (dark ? 'rgba(232,230,224,0.4)' : 'rgba(29,29,31,0.35)'),
            textUnderlineOffset: '4px',
            textDecorationThickness: '1px',
            transition: 'text-decoration-color .15s',
          }}>{value}</span>
          {badge ? (
            <span style={{
              fontSize: scale(15), fontWeight: 500, letterSpacing: '-0.005em',
              color: '#ff3b30', lineHeight: 1,
            }}>{badge}</span>
          ) : null}
        </div>
        {description ? (
          <div style={{
            fontSize: scale(15), color: dimColor, marginTop: 4,
            lineHeight: 1.45, letterSpacing: '-0.005em',
            paddingLeft: 0,
          }}>{description}</div>
        ) : null}
      </div>
      {(label || tile) ? (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-mono)', fontSize: scale(15),
          color: dimColor, whiteSpace: isMobile ? 'normal' : 'nowrap',
          paddingTop: isMobile ? 0 : 2,
        }}>
          {label ? <span>{label}</span> : null}
          {tile ? <Tile tile={tile} scaleSize={scaleSize} /> : null}
        </span>
      ) : null}
    </Wrap>
  );
};

// ---------- Featured case (cover zooms inside frame on hover) ----------
const FeatureCase = ({ dark, item, isCompact, scale, contentWidth }) => {
  const dim = dark ? 'rgba(232,230,224,0.55)' : 'rgba(29,29,31,0.5)';
  const [hover, setHover] = React.useState(false);
  const zoomHover = !isCompact && hover;
  return (
    <div
      {...(!isCompact ? {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
      } : {})}>
      <div
        role="img"
          aria-label={item.title}
          style={{
            ...(isCompact ? {
              width: '100vw',
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)',
              borderRadius: 0,
            } : {
              borderRadius: 22,
            }),
            overflow: 'hidden',
            position: 'relative',
            marginBottom: isCompact ? 16 : 24,
            aspectRatio: '900 / 633',
            isolation: 'isolate',
          }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: item.cover ? `url(${item.cover})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              transform: `scale(${zoomHover ? 1.04 : 1})`,
              transformOrigin: 'center bottom',
              transition: isCompact ? 'none' : 'transform 600ms cubic-bezier(.2,.7,.2,1)',
            }} />
          {item.indexLabel ?
          <div style={{ position: 'absolute', top: 14, left: 16, fontSize: scale(15), fontFamily: 'var(--font-mono)', color: dim, zIndex: 2 }}>{item.indexLabel}</div> :
          null}
          {item.metaLabel ?
          <div style={{ position: 'absolute', top: 14, right: 16, fontSize: scale(15), fontFamily: 'var(--font-mono)', color: dim, zIndex: 2 }}>{item.metaLabel}</div> :
          null}
        </div>
        <div style={{
          width: contentWidth,
          margin: '0 auto 18px',
        }}>
          <div style={{ fontSize: scale(17), fontWeight: 500, marginBottom: 4, letterSpacing: '-0.01em' }}>{item.title}</div>
          <div style={{ fontSize: scale(15), lineHeight: 1.5 }}>
            <CaseSub text={item.sub} dark={dark} />
          </div>
        </div>
    </div>);

};

// ---------- Live clock ----------
const ClockChip = ({ dark, clock, scale }) => {
  const city = clock.city;
  const [t, setT] = React.useState('');
  React.useEffect(() => {
    const fmt = () => {
      const d = new Date();
      if (clock.timeZone) {
        const parts = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit', minute: '2-digit', hour12: false,
          timeZone: clock.timeZone
        }).formatToParts(d);
        const hh = parts.find((p) => p.type === 'hour').value;
        const mm = parts.find((p) => p.type === 'minute').value;
        setT(`${hh}:${mm}`);
      } else {
        setT(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`);
      }
    };
    fmt();
    const id = setInterval(fmt, 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-mono)', fontSize: scale(15),
      color: dark ? 'rgba(232,230,224,0.55)' : 'rgba(29,29,31,0.55)'
    }}>
      {city} · {t} {clock.tz}
    </span>);

};

// ============================================================
//  THE PAGE
// ============================================================
const Portfolio = () => {
  const [theme, setTheme] = React.useState(() => lsGet('theme', 'dark'));
  const [activeDock, setActiveDock] = React.useState('comp');
  const { isCompact, isMobile, contentWidth, casesWidth, scale, scaleSize } = useLayout();
  const dark = theme === 'dark';
  const sectionGap = isCompact ? 32 : 44;
  const sectionGrid = isMobile ? '1fr' : 'min(140px, 30%) 1fr';

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
  const dim = dark ? 'rgba(230,228,221,0.5)' : 'rgba(24,24,22,0.5)';
  const rule = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)';

  return (
    <div style={{
      minHeight: '100vh', background: bg, color: fg,
      fontFamily: 'var(--font-sans)',
      letterSpacing: '-0.005em', position: 'relative',
      transition: 'background .25s, color .25s'
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

      {/* top bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 30,
        width: '100%',
        background: dark ? 'rgba(11,11,12,0.7)' : 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'
      }}>
        <div style={{
          width: contentWidth,
          margin: '0 auto',
          padding: isCompact ? '16px 0' : '20px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)', fontSize: scale(15),
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <img
              src="assets/header-accent.gif"
              alt=""
              style={{
                width: 30, height: 30, borderRadius: '50%',
                objectFit: 'cover', display: 'inline-block',
                flex: '0 0 auto',
                boxShadow: dark
                  ? 'inset 0 0 0 1px rgba(255,255,255,0.08)'
                  : 'inset 0 0 0 1px rgba(0,0,0,0.06)',
              }}
            />
            <img
              src="assets/avatar.png"
              alt={DATA.name}
              style={{
                width: 30, height: 30, borderRadius: '50%',
                objectFit: 'cover', display: 'inline-block',
                flex: '0 0 auto',
                boxShadow: dark
                  ? 'inset 0 0 0 1px rgba(255,255,255,0.08)'
                  : 'inset 0 0 0 1px rgba(0,0,0,0.06)',
              }}
            />
            </div>
            <span style={{ fontWeight: 500 }}>{DATA.name}</span>
            {DATA.version || DATA.crumb ?
            <span style={{ color: dim }}>— {[DATA.version, DATA.crumb].filter(Boolean).join(' · ')}</span> :
            null}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <IconBtn dark={dark} onClick={() => setTheme(dark ? 'light' : 'dark')} title="theme">
              {dark ? <ICONS.sun /> : <ICONS.moon />}
            </IconBtn>
          </div>
        </div>
      </div>

      {/* main column */}
      <main style={{
        width: contentWidth,
        margin: '0 auto',
        position: 'relative', zIndex: 1,
        padding: isCompact ? '20px 0px 40px' : '24px 0px 48px',
      }}>

        {/* header: bio */}
        <header style={{ marginBottom: sectionGap }}>
          <p style={{ margin: 0, fontSize: scale(16), lineHeight: "1.65" }}>
            <RichLine text={DATA.bio} badges={DATA.badges} dark={dark} />
          </p>
          {DATA.bioSocial ?
          <p style={{ margin: '12px 0 0', fontSize: scale(16), lineHeight: "1.65" }}>
            <RichLine text={DATA.bioSocial} badges={DATA.badges} dark={dark} />
          </p> :
          null}
        </header>

        {/* experience */}
        <section style={{ marginBottom: sectionGap }}>
          <div style={{ display: 'grid', gridTemplateColumns: sectionGrid, columnGap: isMobile ? 0 : 24, rowGap: isMobile ? 10 : 0, alignItems: 'start' }}>
            <SectionLabel dark={dark} scale={scale} isMobile={isMobile}>{DATA.expLabel}</SectionLabel>
            <div>
              {DATA.experience.map((e, i) =>
              <ExpRow key={i} label={e.label} value={e.value} description={e.description} href={e.href} tile={e.tile} badge={e.badge} dark={dark} isFirst={i === 0} scale={scale} scaleSize={scaleSize} isMobile={isMobile} />
              )}
              <div style={{ borderBottom: `1px solid ${rule}` }} />
            </div>
          </div>
        </section>

        {/* vibe-coded */}
        <section style={{ marginBottom: sectionGap }}>
          <div style={{ display: 'grid', gridTemplateColumns: sectionGrid, columnGap: isMobile ? 0 : 24, rowGap: isMobile ? 10 : 0, alignItems: 'start' }}>
            <SectionLabel dark={dark} scale={scale} isMobile={isMobile}>{DATA.vibesLabel}</SectionLabel>
            <div>
              {DATA.vibes.map((e, i) =>
              <ExpRow key={i} value={e.value} description={e.description} href={e.href} badge={e.badge} dark={dark} isFirst={i === 0} scale={scale} scaleSize={scaleSize} isMobile={isMobile} />
              )}
              <div style={{ borderBottom: `1px solid ${rule}` }} />
            </div>
          </div>
        </section>

        {/* featured cases — wider than main column */}
        <section style={{
          width: casesWidth,
          position: 'relative',
          left: isCompact ? 0 : '50%',
          transform: isCompact ? 'none' : 'translateX(-50%)',
          marginTop: isCompact ? 40 : 64,
          marginBottom: 24,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: isCompact ? 40 : 56 }}>
            {DATA.featuredCases.map((c, i) =>
              <FeatureCase key={i} dark={dark} item={c} isCompact={isCompact} scale={scale} contentWidth={contentWidth} />
            )}
          </div>
        </section>

        {/* footer */}
        <footer style={{ marginTop: isCompact ? 40 : 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: scale(15), textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: dark ? 'rgba(232,230,224,0.45)' : 'rgba(29,29,31,0.45)',
            display: 'inline-flex', alignItems: 'center', gap: 8
          }}>
            <span>{DATA.footer}</span>
            {DATA.footerIcon ? <span style={{ display: 'inline-flex', color: '#3b82f6' }}>{I(DATA.footerIcon)}</span> : null}
          </div>
          <ClockChip dark={dark} clock={DATA.clock} scale={scale} />
        </footer>
      </main>
    </div>);

};

ReactDOM.createRoot(document.getElementById('root')).render(<Portfolio />);