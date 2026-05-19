// portfolio.jsx — single-file C·Engineered portfolio.
// EDIT THE `DATA` OBJECT BELOW TO PUT IN YOUR REAL CONTENT.
// Everything else is layout — touch only if you want to change the structure.

// ============================================================
//  ░░  EDIT HERE  ░░
// ============================================================
const DATA = {
  // header
  name: { ru: 'Андрей Игнатов', en: 'Andrei Ignatov' },
  version: '',
  crumb: { ru: '', en: '' },
  role: { ru: '', en: '' },

  // short bio. wrap any word/phrase in [brackets] and define it in `badges`
  // below to render it as an inline pill.
  bio: {
    ru: 'Продуктовый дизайнер с 5-летним опытом в финтехе и корпоративных системах. Проектировал ключевые банковские процессы для NBU Milliy, SSO-архитектуру для Газпром Медиа и внутренние платформы. Я нахожусь на стыке дизайна и разработки — пишу на Swift, создаю прототипы в Xcode и Cursor, участвую во всех этапах: от исследований до пост-релизного анализа. Меня интересуют системы, а не просто экраны.',
    en: 'Product designer with 5 years of experience in fintech and enterprise systems. Designed core banking flows for NBU Milliy, SSO architecture for Gazprom Media, and internal platforms. I sit at the intersection of design and engineering — I write Swift, prototype in Xcode and Cursor, and stay involved at every stage, from research through post-release analysis. I care about systems, not just screens.'
  },
  // each entry is either a plain string (becomes a text pill) or an
  // object { icon, label } (icon shown to the left of label).
  badges: {
    email: { label: 'andrej.filly@gmail.com', href: 'mailto:andrej.filly@gmail.com' },
    site: { label: 'andyhoudini.ru', href: 'https://andyhoudini.ru' }
  },

  // commit/activity heatmap
  activity: {
    label: { ru: 'Активность · 6 мес', en: 'Activity · 6 mo' },
    metric: '342 commits',
    density: 0.45
  },

  // experience block
  expLabel: { ru: 'Опыт', en: 'Experience' },
  experience: [
  {
    label: { ru: '2025 — 2026', en: '2025 — 2026' },
    value: 'Gazprom ID',
    description: { ru: 'Sr. Product Designer', en: 'Sr. Product Designer' },
    href: 'https://id.gid.ru/',
    tile: { src: 'assets/logo-gazprom.svg' }
  },
  {
    label: { ru: '2023 — 2025', en: '2023 — 2025' },
    value: 'NBU Банк',
    description: { ru: 'Md→Sr. Product Designer', en: 'Md→Sr. Product Designer' },
    href: 'https://nbu.uz/ru',
    tile: { src: 'assets/logo-nbu.svg' }
  },
  {
    label: { ru: '2021 — 2023', en: '2021 — 2023' },
    value: 'AIC',
    description: { ru: 'UX/UI Designer', en: 'UX/UI Designer' },
    href: 'https://aic.ru/',
    tile: { bg: '#181816', fg: '#fff', char: 'A' }
  }],

  // Side projects / experiments without company logos
  vibesLabel: { ru: 'Навайбкодил', en: 'Vibe-coded' },
  vibes: [
  {
    label: { ru: '2026', en: '2026' },
    value: 'SVG to WebP Exporter',
    description: { ru: 'Плагин для конвертации в Figma', en: 'Design portfolio gallery, CIS' },
    href: 'https://www.figma.com/community/plugin/1638175144710570925/svg-to-webp-exporter',
    badge: { ru: 'Новый', en: 'New' }
  },
  {
    label: { ru: '2025', en: '2025' },
    value: 'Dominan Gradient Color',
    description: { ru: 'Генерация обложек по фото в стиле Spotify', en: 'ASO toolkit & templates' },
    href: 'https://codepen.io/katzlan/pen/YzaojLJ'
  }],


  // featured case shown above the project list
  caseLabel: { ru: 'Кейсы', en: 'Cases' },
  featuredCases: [
  {
    title: { ru: 'ГИД Хаб', en: 'GID Hub' },
    sub: {
      ru: 'Маркетплейс цифровых решений экосистемы Газпрома — **спроектировали core-flow с нуля: рост поставщиков на [[90]]%, конверсия публикации +[[53]]%**, каталог и карточки продукта.',
      en: 'Gazprom ecosystem digital marketplace — **designed the core flow from scratch: [[90]]% supplier growth, +[[53]]% publish conversion**, catalog and product pages.'
    },
    cover: 'assets/case-hub.png',
    href: '#'
  },
  {
    title: { ru: 'ГИД Ключ', en: 'GID Key' },
    sub: {
      ru: 'Push-аутентификатор для единого входа — **заменили SMS: доля входов через ключ +[[68]]%, время авторизации −[[40]]%**, ключи для RUTUBE, Premier и внутренних сервисов.',
      en: 'Push authenticator for unified login — **replaced SMS: +[[68]]% sign-ins via key, −[[40]]% auth time**, keys for RUTUBE, Premier and internal services.'
    },
    cover: 'assets/case-gid-key.png',
    href: '#'
  },
  {
    title: { ru: 'Газпром ID', en: 'Gazprom ID' },
    sub: {
      ru: 'Единый аккаунт для сервисов экосистемы — **перезапустили вход и регистрацию: конверсия в аккаунт +[[24]]%, отказ на OTP −[[31]]%**, быстрый вход по биометрии для RUTUBE и Premier.',
      en: 'Single account across the ecosystem — **relaunched sign-in and signup: +[[24]]% account conversion, −[[31]]% OTP drop-off**, biometric quick login for RUTUBE and Premier.'
    },
    cover: 'assets/case-gazprom-id.png',
    href: '#'
  },
  {
    title: { ru: 'Зенит', en: 'Zenit' },
    sub: {
      ru: 'Мобильное приложение клуба — **редизайн раздела «Медиа»: вовлечённость +[[18]]%, глубина сессии +[[22]]%**, новая навигация и лента новостей.',
      en: 'Club mobile app — **Media section redesign: +[[18]]% engagement, +[[22]]% session depth**, new navigation and news feed.'
    },
    cover: 'assets/case-zenit.png',
    href: '#'
  },
  {
    title: { ru: 'NBU Банк', en: 'NBU Bank' },
    sub: {
      ru: 'Приложение Milliy и дизайн-система банка — **[[120]]+ компонентов, время прототипа −[[35]]%, завершение задач в продуктах −[[32]]%**, вклады, карты и платежи.',
      en: 'Milliy app and bank design system — **[[120]]+ components, −[[35]]% prototype time, −[[32]]% task time in product flows**, deposits, cards and payments.'
    },
    cover: 'assets/case-nbu.png',
    href: '#'
  },
  {
    title: { ru: 'ВТБ Family', en: 'VTB Family' },
    sub: {
      ru: 'Привилегии VTB Private Banking — **пересобрали витрину партнёров: CTR офферов +[[27]]%, время до бронирования −[[19]]%**, карта и персональная подборка.',
      en: 'VTB Private Banking privileges — **rebuilt partner storefront: +[[27]]% offer CTR, −[[19]]% time to booking**, map and personalized picks.'
    },
    cover: 'assets/case-vtb-family.png',
    href: '#'
  },
  {
    title: { ru: 'ГИД Корпоративная платформа', en: 'GID Corporation Platform' },
    sub: {
      ru: 'Корпоративный мессенджер для команд Газпрома — **новый compose-flow: отправка сообщений −[[28]]% шагов, время назначения встречи −[[34]]%**, чаты по подразделениям.',
      en: 'Corporate messenger for Gazprom teams — **new compose flow: −[[28]]% message steps, −[[34]]% meeting scheduling time**, chats by department.'
    },
    cover: 'assets/case-gid-corp.png',
    href: '#'
  }],

  // bottom dock
  dock: [
  { id: 'proj', iconName: 'spark', label: { ru: 'Проекты', en: 'Projects' } },
  { id: 'comp', iconName: 'grid', label: { ru: 'Компоненты', en: 'Components' } },
  { id: 'notes', iconName: 'note', label: { ru: 'Заметки', en: 'Notes' } }],


  // footer line
  footer: { ru: 'Сделано мной', en: 'Made by me' },
  footerIcon: 'heart',
  clock: { city: { ru: 'Москва', en: 'Moscow' }, tz: 'UTC+3', timeZone: 'Europe/Moscow' },
  pageTitle: {
    ru: 'Андрей Игнатов — Senior product designer',
    en: 'Andrei Ignatov — Senior product designer'
  }
};
// ============================================================
//  ░░  END EDIT  ░░  (everything below is layout)
// ============================================================


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
const Tile = ({ tile }) => {
  if (tile.src) {
    return (
      <img
        src={tile.src}
        alt=""
        style={{
          width: 18, height: 18, borderRadius: 3,
          display: 'inline-block', flex: '0 0 auto', verticalAlign: 'middle',
          objectFit: 'cover',
        }}
      />
    );
  }
  return (
    <span style={{
      display: 'inline-flex', width: 18, height: 18, borderRadius: 2,
      background: tile.bg, color: tile.fg || '#fff',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 10, lineHeight: 1,
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
const Dock = ({ items, active, onChange, dark, lang }) =>
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
        fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500, cursor: 'pointer',
        letterSpacing: '-0.005em'
      }}>
          <span style={{ display: 'inline-flex', opacity: 0.85 }}>{I(it.iconName)}</span>
          <span>{it.label[lang]}</span>
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


// ---------- LangToggle ----------
const LangToggle = ({ lang, setLang, dark }) =>
<div style={{
  display: 'inline-flex', alignItems: 'center', padding: 2, borderRadius: 6,
  background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
  fontSize: 15, fontFamily: 'var(--font-mono)'
}}>
    {['ru', 'en'].map((l) =>
  <button key={l} onClick={() => setLang(l)} style={{
    padding: '3px 7px', borderRadius: 4, border: 'none', cursor: 'pointer',
    background: lang === l ? dark ? 'rgba(255,255,255,0.10)' : '#fff' : 'transparent',
    color: lang === l ? dark ? '#fff' : '#1d1d1f' : dark ? 'rgba(232,230,224,0.6)' : 'rgba(29,29,31,0.55)',
    fontFamily: 'inherit', fontSize: 'inherit', textTransform: 'lowercase',
    boxShadow: lang === l && !dark ? '0 1px 2px rgba(0,0,0,0.06)' : 'none'
  }}>{l}</button>
  )}
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
const SectionLabel = ({ children, dark }) =>
<div style={{
  fontFamily: 'var(--font-mono)', fontSize: 15, textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: dark ? 'rgba(232,230,224,0.45)' : 'rgba(29,29,31,0.45)',
  marginBottom: 14
}}>{children}</div>;


// ---------- Experience row (title + dotted underline, description, date) ----------
const ExpRow = ({ label, value, description, href, tile, badge, dark, isFirst, lang }) => {
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
        gridTemplateColumns: '1fr auto',
        columnGap: 24, alignItems: 'start',
        padding: isFirst ? '0px 0px 8px' : '8px 0px',
        borderTop: isFirst ? 'none' : dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        textDecoration: 'none', color: 'inherit',
      }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontSize: 15, fontWeight: 500, letterSpacing: '-0.005em',
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
              fontSize: 15, fontWeight: 500, letterSpacing: '-0.005em',
              color: '#ff3b30', lineHeight: 1,
            }}>{badge[lang]}</span>
          ) : null}
        </div>
        {description ? (
          <div style={{
            fontSize: 15, color: dimColor, marginTop: 4,
            lineHeight: 1.45, letterSpacing: '-0.005em',
            paddingLeft: 0,
          }}>{description[lang]}</div>
        ) : null}
      </div>
      {(label || tile) ? (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-mono)', fontSize: 15,
          color: dimColor, whiteSpace: 'nowrap', paddingTop: 2,
        }}>
          {label ? <span>{label}</span> : null}
          {tile ? <Tile tile={tile} /> : null}
        </span>
      ) : null}
    </Wrap>
  );
};

// ---------- Featured case (cover zooms inside frame on hover) ----------
const FeatureCase = ({ dark, item, lang }) => {
  const dim = dark ? 'rgba(232,230,224,0.55)' : 'rgba(29,29,31,0.5)';
  const [hover, setHover] = React.useState(false);
  return (
    <div>
      <a
        href={item.href || '#'}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div
          role="img"
          aria-label={typeof item.title === 'string' ? item.title : item.title[lang]}
          style={{
            borderRadius: 22,
            overflow: 'hidden',
            position: 'relative',
            marginBottom: 24,
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
              transform: `scale(${hover ? 1.04 : 1})`,
              transformOrigin: 'center bottom',
              transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)',
            }} />
          {item.indexLabel ?
          <div style={{ position: 'absolute', top: 14, left: 16, fontSize: 15, fontFamily: 'var(--font-mono)', color: dim, zIndex: 2 }}>{item.indexLabel}</div> :
          null}
          {item.metaLabel ?
          <div style={{ position: 'absolute', top: 14, right: 16, fontSize: 15, fontFamily: 'var(--font-mono)', color: dim, zIndex: 2 }}>{item.metaLabel}</div> :
          null}
        </div>
        <div style={{
          marginBottom: 18,
          width: 'min(560px, calc(100vw - 48px))',
          margin: '0 auto 18px',
        }}>
          <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4, letterSpacing: '-0.01em' }}>{typeof item.title === 'string' ? item.title : item.title[lang]}</div>
          <div style={{ fontSize: 15, lineHeight: 1.5 }}>
            <CaseSub text={item.sub[lang]} dark={dark} />
          </div>
        </div>
      </a>
    </div>);

};

// ---------- Live clock ----------
const ClockChip = ({ dark, clock, lang }) => {
  const city = typeof clock.city === 'string' ? clock.city : clock.city[lang];
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
      fontFamily: 'var(--font-mono)', fontSize: 15,
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
  const [lang, setLang] = React.useState(() => lsGet('lang', 'ru'));
  const [activeDock, setActiveDock] = React.useState('comp');
  const dark = theme === 'dark';

  React.useEffect(() => {lsSet('theme', theme);document.body.dataset.theme = theme;document.documentElement.lang = lang;}, [theme, lang]);
  React.useEffect(() => {lsSet('lang', lang);}, [lang]);
  React.useEffect(() => {
    document.title = DATA.pageTitle?.[lang] ?? (typeof DATA.name === 'string' ? DATA.name : DATA.name[lang]);
  }, [lang]);

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
          width: 'min(560px, calc(100vw - 48px))',
          margin: '0 auto',
          padding: '20px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)', fontSize: 15,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src="assets/avatar.jpg"
              alt={typeof DATA.name === 'string' ? DATA.name : DATA.name[lang]}
              style={{
                width: 24, height: 24, borderRadius: '50%',
                objectFit: 'cover', display: 'inline-block',
                flex: '0 0 auto',
                boxShadow: dark
                  ? 'inset 0 0 0 1px rgba(255,255,255,0.08)'
                  : 'inset 0 0 0 1px rgba(0,0,0,0.06)',
              }}
            />
            <span style={{ fontWeight: 500 }}>{typeof DATA.name === 'string' ? DATA.name : DATA.name[lang]}</span>
            {DATA.version || DATA.crumb[lang] ?
            <span style={{ color: dim }}>— {[DATA.version, DATA.crumb[lang]].filter(Boolean).join(' · ')}</span> :
            null}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <LangToggle lang={lang} setLang={setLang} dark={dark} />
            <IconBtn dark={dark} onClick={() => setTheme(dark ? 'light' : 'dark')} title="theme">
              {dark ? <ICONS.sun /> : <ICONS.moon />}
            </IconBtn>
          </div>
        </div>
      </div>

      {/* main column */}
      <main style={{
        width: 'min(560px, calc(100vw - 48px))',
        margin: '0 auto',
        position: 'relative', zIndex: 1,
        padding: '24px 0px 48px',
      }}>

        {/* header: bio */}
        <header style={{ marginBottom: 44 }}>
          <p style={{ margin: 0, fontSize: 16, lineHeight: "1.65" }}>
            <RichLine text={DATA.bio[lang]} badges={DATA.badges} dark={dark} />
          </p>
        </header>

        {/* experience */}
        <section style={{ marginBottom: 44 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'min(140px, 30%) 1fr', columnGap: 24, alignItems: 'start' }}>
            <SectionLabel dark={dark}>{DATA.expLabel[lang]}</SectionLabel>
            <div>
              {DATA.experience.map((e, i) =>
              <ExpRow key={i} label={e.label[lang]} value={e.value} description={e.description} href={e.href} tile={e.tile} badge={e.badge} dark={dark} isFirst={i === 0} lang={lang} />
              )}
              <div style={{ borderBottom: `1px solid ${rule}` }} />
            </div>
          </div>
        </section>

        {/* vibe-coded */}
        <section style={{ marginBottom: 44 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'min(140px, 30%) 1fr', columnGap: 24, alignItems: 'start' }}>
            <SectionLabel dark={dark}>{DATA.vibesLabel[lang]}</SectionLabel>
            <div>
              {DATA.vibes.map((e, i) =>
              <ExpRow key={i} value={e.value} description={e.description} href={e.href} badge={e.badge} dark={dark} isFirst={i === 0} lang={lang} />
              )}
              <div style={{ borderBottom: `1px solid ${rule}` }} />
            </div>
          </div>
        </section>

        {/* featured cases — wider than main column */}
        <section style={{
          width: 'min(900px, calc(100vw - 48px))',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: 64, marginBottom: 24,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {DATA.featuredCases.map((c, i) =>
              <FeatureCase key={i} dark={dark} item={c} lang={lang} />
            )}
          </div>
        </section>

        {/* footer */}
        <footer style={{ marginTop: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 15, textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: dark ? 'rgba(232,230,224,0.45)' : 'rgba(29,29,31,0.45)',
            display: 'inline-flex', alignItems: 'center', gap: 8
          }}>
            <span>{DATA.footer[lang]}</span>
            {DATA.footerIcon ? <span style={{ display: 'inline-flex', color: '#3b82f6' }}>{I(DATA.footerIcon)}</span> : null}
          </div>
          <ClockChip dark={dark} clock={DATA.clock} lang={lang} />
        </footer>
      </main>
    </div>);

};

ReactDOM.createRoot(document.getElementById('root')).render(<Portfolio />);