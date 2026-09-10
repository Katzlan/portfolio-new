// portfolio.jsx — single-file C·Engineered portfolio.
// EDIT THE `DATA` OBJECT BELOW TO PUT IN YOUR REAL CONTENT.
// Everything else is layout — touch only if you want to change the structure.

// ============================================================
//  ░░  EDIT HERE  ░░
// ============================================================
const DATA = {
  // header
  name: 'Andrei Ignatov',
  // headline shown above the bio (kept separate from `name` so the avatar's
  // alt text and the page/browser-tab title stay unaffected)
  greeting: 'What I love',
  version: '',
  crumb: '',
  role: '',

  // short bio. wrap any word/phrase in [brackets] and define it in `badges`
  // below to render it as an inline pill.
  bio: [
  'As a Senior Product Designer, I enhanced Salmon\'s internal [salmon-referral] for Filipino promodizers by streamlining KYC flows and creating comic-style onboarding guides.',
  'Previously served as Lead Designer at Gazprom ID, driving products like SSO, Zenit, GID Hub, and the [gazprom-enterprise].'],
  bioSocial: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
  // shown instead of the bio above while the photo is unfolded (click to toggle)
  bioShort: {
    intro: 'My wife, my parents, and everyone who supports me no matter what.',
    list: [
    { label: 'Book', value: 'Emotional Design by Don Norman' },
    { label: 'Bands', value: 'Foals, Tame Impala, Djo' },
    { label: 'Games', value: 'Baldur\'s Gate 3, Red Dead Redemption 2, Metro Exodus' },
    { label: 'Hobbies', value: 'Guitar, Fingerstyle' },
    { label: 'Movies & Shows', value: 'The Intouchables (1+1), The Lord of the Rings, Stranger Things' }],
    outro: [
    'I’m inspired by locals and their stories, spontaneous trips, and late-night talks.',
    'Someday, I’ll record my guitar playing :)']
  },
  // each entry is either a plain string (becomes a text pill) or an
  // object { icon, label } (icon shown to the left of label).
  // `page: true` marks a company link as internal — clicking it opens a
  // dedicated in-site page (with a "step back" link) instead of the
  // external site directly.
  badges: {
    ixdf: { label: 'IxDF', href: 'https://ixdf.org/courses' },
    salmon: {
      label: 'Salmon', href: 'https://salmon.ph/', page: true,
      case: {
        title: 'Salmon promodizer app',
        description: 'How to help promodizers earn extra money? The key I found was dead simple: make the app easier to use and cut down friction during verification. Easy, right?',
        cover: 'assets/case-salmon.webp',
        blocks: [
        { type: 'section', heading: 'The Challenge', paragraphs: [
          'The Salmon Referral Program lets store employees like security guards, cleaners, or managers, but usually young sales associates—**earn extra money** by offering credit lines to customers right before they pay.',
          'To join the program, employees need to complete verification. This stopped hidden scams and gave promodizers a nice perk—getting exclusive deals from Salmon on better terms. At the time, mandatory verification was already used in around 30 stores.',
          'I was tasked with designing the **KYC flow** for promodizers. Once verified, they could sell credit lines to our customers, while customers got the products they wanted on great terms.'] },
        { type: 'image', src: 'assets/case-salmon-asis.webp', alt: 'AS IS — existing KYC face scan and ID verification flow' },
        { type: 'section', heading: 'Solution', paragraphs: [
          'I found that **OCR** and **Liveness** were the biggest bottlenecks. First, users didn\'t realize they had to scan a physical ID instead of a printout. Second, bad lighting meant their selfie didn\'t match the ID photo. To fix this, I redesigned the camera to guide users and take the photo automatically instead of letting them do it manually.'] },
        { type: 'stats', items: [
          { value: '82.3%', label: 'KYC' },
          { value: '95.8%', label: 'Approval Rate' },
          { value: '+1', label: 'Useful Feature' }] },
        { type: 'image', src: 'assets/case-salmon-2.webp', alt: 'Redesigned KYC flow' },
        { type: 'section', heading: 'Approach', paragraphs: [
          'To get a real feel for what promodizers do, **I put on the uniform**, visited stores, talked to the team, and even **worked a full shift** at SM Mall. Here\'s what I learned:'] },
        { type: 'process', items: [
          { emoji: '❤️', label: 'Empathize', text: 'Spent a day working as a promodizer and chatted with the team to see what their everyday job is really like.', photo: 'assets/case-salmon-empathize.webp' },
          { emoji: '🎯', label: 'Define', text: 'Turned their real-world experience—no phones allowed on the sales floor, heavy foot traffic, and just one 30-minute break per shift—into one core rule: keep the solution fast and minimal.' },
          { emoji: '💡', label: 'Ideate', text: 'Rewrote the copy and added visual tips right before OCR and Liveness, plus real-time guidance right inside the camera.' },
          { emoji: '⚡', label: 'Prototype', text: 'Built simple Figma prototypes. Since promodizers already knew the old flow, I didn\'t need to build a complex camera simulation for testing.' },
          { emoji: '✏️', label: 'Test', text: 'Ran interviews and usability tests with 6 promodizers. For Tagalog speakers, I teamed up with a UX researcher to help out.' }] },
        { type: 'highlight-list', heading: 'Competitor analysis',
          intro: ['Checked out **WeChat Pay**, **Binance**, and **Revolut**. WeChat, which is built for the Asian market, lets users pick their ID type first—like a UMID, Postal ID, PRC ID, driver\'s license, national ID, or passport. Adding that simple extra step could easily fix our problem with people choosing the wrong ID.'],
          items: [
          { label: 'WeChat', text: '"WeChat is a great example of designing for users across Asia. It also uses a camera that automatically captures selfies without making you tap a button."', image: 'assets/case-salmon-wechat.webp' },
          { label: 'Binance', text: 'Binance is all about speed—it scans the ID and face as fast as possible.', image: 'assets/case-salmon-binance.webp' },
          { label: 'Revolut', text: 'Revolut also focuses on speed, like Binance, while matching WeChat\'s ability to handle different regions and document types.', image: 'assets/case-salmon-revolut.webp' }] },
        { type: 'section', heading: 'Designed concept', paragraphs: [
          'Sketched out what our camera was missing. I kept in mind that people rarely read instructions and that the old camera screen was way too huge. My idea was simple: drop manual camera controls entirely and give instant feedback right on screen using quick animations.'] },
        { type: 'image', src: 'assets/case-salmon-concept.webp', alt: 'Camera concept sketches' },
        { type: 'section', heading: 'Usability Testing', paragraphs: [
          'I didn\'t overcomplicate the prototype or waste time building a camera simulation. I put together a quick Figma prototype and had promodizers run through it. As they went, I asked about each element—what they thought it meant and what they expected it to do. In total, we tested this with 6 promodizers who had already used the old verification flow.'] },
        { type: 'image', src: 'assets/case-salmon-usability.webp', alt: 'Usability testing session' },
        { type: 'section', heading: 'Useful Insights', paragraphs: [
          { text: 'During **field surveys**, **interviews**, and **usability tests**, promodizers were super open about how they work. They really appreciated that we were trying to make their lives a little easier—which made getting quick, honest feedback a breeze.', image: 'assets/case-salmon-insight1.webp' },
          { text: 'Users still tried to use a screenshot from their phone instead of a physical ID. They read the tip, but misunderstood \'photocopies\'—to them, it only meant printed paper. So I tweaked the wording to make it crystal clear.', image: 'assets/case-salmon-insight2.webp' },
          'A cool insight popped up when we asked what the \'X\' button meant—5 out of 6 users surprisingly thought it would close the entire browser! So I swapped it out for \'Skip for now\'.'] },
        { type: 'numbered-list', heading: 'Reflection', items: [
          { title: 'Simplicity wins', text: 'As designers, we love following trends or copying cool solutions. But we miss the big point: every single element needs a clear purpose. A designer\'s real job is to understand the user\'s problem and build something that actually helps.' },
          { title: 'Put yourself in the user\'s shoes', text: 'Going into the field showed me the real weight of past design decisions. Promodizers have to sell, help, and explain things to customers all at once—so there\'s zero room for extra clutter.' },
          { title: 'Get feedback often', text: 'Getting fast feedback directly from promodizers let me iterate quickly and ship the solution to production way faster.' }] },
        { type: 'team', heading: 'Our team', items: [
          { role: 'UX Writer', name: 'JM' },
          { role: 'UX Researcher', name: 'Oliver Bayani' },
          { role: 'Lead UX Researcher', name: 'Vladislav Emeilianov' },
          { role: 'Front-End', name: 'Oleg Pitsik' },
          { role: 'Lead Back-End', name: 'Adila Rzaeva' },
          { role: 'Product Manager', name: 'Kristina Grekova' },
          { role: 'Product Designer', name: 'Andrei Ignatov' }] },
        { type: 'image', src: 'assets/case-salmon-team.webp', alt: 'Team photo' }]
      }
    },
    'gazprom-id': {
      label: 'Gazprom ID', href: 'https://id.gid.ru/', page: true,
      case: {
        title: 'GID Loyalty Program',
        description: 'How do we motivate employees to come back to the corporate app? Let\'s build a loyalty program! Let\'s do it!',
        cover: 'assets/case-gazprom-cover.webp',
        blocks: [
        { type: 'section', heading: 'The Challenge', paragraphs: [
          'The internal GID platform was created for communication, training, and other services for Gazprom employees. Every employee gets a corporate email address for platform access, but beyond completing the mandatory safety briefing, they rarely went further.',
          'The platform offers valuable discounts, available resorts, and joint sports events near your city. The platform\'s reach covers all of Russian Federation.',
          'I was responsible for the 0→1 design of the loyalty program, meant to increase employee engagement and retention through tangible material benefits, not just discounts.'] },
        { type: 'image', src: 'assets/case-gazprom-challenge.webp', alt: 'GID app — home, channels, feed, services, discounts' },
        { type: 'section', heading: 'Solution', paragraphs: [
          'Based on in-depth interviews, I found that tangible **material benefits mattered** far more to employees than simple mentions of discounts and events.',
          'We developed this idea together with the business and created a loyalty program that let people feel like they were part of something bigger—genuine advocates of a major company.'] },
        { type: 'stats', items: [
          { value: '+34%', label: 'Retention' },
          { value: '+80%', label: 'Services per users' },
          { value: '+380%', label: 'MAU' }] },
        { type: 'image', src: 'assets/case-gazprom-activity.webp', alt: 'Activity and rewards screens' },
        { type: 'numbered-list', heading: 'Several steps to redeem rewards',
          intro: ['The loyalty program made everyday activity in GID feel more valuable. I designed the flow around a simple cycle:'],
          items: [
          { title: 'Get tasks', text: 'See a fresh set of weekly tasks and the points each one is worth.' },
          { title: 'Complete them and earn points', text: 'Finish a task and get points credited to your balance right away.' },
          { title: 'Spend points on perks and merch', text: 'Exchange your points for services and corporate merch in the GID store.' }] },
        { type: 'section', heading: 'Stage 1. Get tasks', paragraphs: [
          'Employees opened their profile and saw their activity: completed tasks, current points, and available tasks. They could choose an action, such as organising a sports challenge or liking a post in a company group.'] },
        { type: 'image', src: 'assets/case-gazprom-stage1.webp', alt: 'Stage 1 flow' },
        { type: 'section', heading: 'Stage 2. Complete them and earn points', paragraphs: [
          'After selecting a task, employees tapped **"Go to task"** and were taken directly to the required post or group. Once they completed the action, GID immediately confirmed it and credited the points. They could then return to their activity and see their updated balance.'] },
        { type: 'image', src: 'assets/case-gazprom-stage2.webp', alt: 'Stage 2 flow' },
        { type: 'section', heading: 'Stage 3. Spend points on perks and merch', paragraphs: [
          'Employees scrolled down to the store, opened the catalogue, and selected an item such as a branded cap. They exchanged their points for the product and received it by mail through the delivery service.'] },
        { type: 'image', src: 'assets/case-gazprom-stage3.webp', alt: 'Stage 3 flow and branded cap' },
        { type: 'section', heading: 'Achievements', paragraphs: [
          'Achievements play a special role here. The idea is to give employees extra motivation to actually do something — not just earn points and spend them, but leave their own mark. The achievements were sketched out as drafts in ChatGPT, then each one was attached to a specific section.'] },
        { type: 'image', src: 'assets/case-gazprom-achievements.webp', alt: 'Achievement badge icons' },
        { type: 'image', src: 'assets/case-gazprom-achievements-flow.webp', alt: 'Achievements collection flow' },
        { type: 'section', heading: 'Useful insight', paragraphs: [
          'By the way, two-thirds of employees **dreamed about the corporate merchandise** our communications team had been drawing up purely for moodboards.'] },
        { type: 'image', src: 'assets/case-gazprom-merch.webp', alt: 'Corporate merch poster designs', caption: 'Here I\'ve placed my favorite pieces of work from the communications team :)' },
        { type: 'section', heading: 'Reflection', paragraphs: [
          'It was an awesome quarter. The team was full of energy and shipped fast. I loved working with our bold branding, and as the service grew, there was never a dull moment. I got to use everything I knew while picking up a ton of new skills along the way.'] },
        { type: 'team', heading: 'Our team', items: [
          { role: 'Lead UX Researcher', name: 'Polina Khromova' },
          { role: 'Front-End', name: 'Andrei Malyshev' },
          { role: 'Back-End', name: 'Alexandr Zolotarev' },
          { role: 'Product Owner', name: 'Vadim Ivankov' },
          { role: 'Product Manager', name: 'Alexander Morera' },
          { role: 'Lead Communication Designer', name: 'Ksenia Scherbakova' },
          { role: 'Senior Product Designer', name: 'Andrei Ignatov' }] },
        { type: 'image', src: 'assets/case-gazprom-outro.webp', alt: '' }]
      }
    },
    nbu: { label: 'NBU Uzbekistan', href: 'https://nbu.uz/ru', page: true },
    vtb: { label: 'VTB', href: 'https://www.vtb.ru/', page: true },
    lanit: { label: 'Lanit', href: 'https://lanit.ru/', page: true },
    email: { label: 'andrej.filly@gmail.com', href: 'mailto:andrej.filly@gmail.com' },
    site: { label: 'andyhoudini.ru', href: 'https://andyhoudini.ru' },
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andy-ignatov-662a38252/?skipRedirect=true' },
    x: { label: 'X', href: 'https://x.com/AndreiLancarra' },
    telegram: { label: 'Telegram', href: 'https://t.me/katzlan' },
    'salmon-referral': { label: 'Referral Program', page: true, target: 'salmon' },
    'gazprom-enterprise': { label: 'GID Enterprise Platform', page: true, target: 'gazprom-id' }
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

// ---------- hash-based mini router (for internal company pages) ----------
const PAGE_PREFIX = '#/company/';
const hashToPage = () =>
typeof window === 'undefined' ? null :
window.location.hash.startsWith(PAGE_PREFIX) ? window.location.hash.slice(PAGE_PREFIX.length) : null;

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
const RichLine = ({ text, badges, dark, onNavigate }) => {
  const parts = text.split(/(\[[^\]]+\])/g);
  const linkStyle = {
    color: '#000',
    textDecoration: 'underline',
    textDecorationColor: dark ? 'rgba(232,230,224,0.35)' : 'rgba(29,29,31,0.3)',
    textUnderlineOffset: '3px',
    textDecorationThickness: '1px'
  };
  return parts.map((p, i) => {
    if (p.startsWith('[') && p.endsWith(']')) {
      const key = p.slice(1, -1);
      const b = badges[key];
      if (!b) return key;
      const label = typeof b === 'string' ? b : b.label;
      const href = typeof b === 'object' ? b.href : null;
      const isPage = typeof b === 'object' && b.page;
      if (isPage) {
        return (
          <button key={i} type="button" onClick={() => onNavigate(b.target || key)}
          style={{ ...linkStyle, background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer' }}>
            {label}
          </button>);
      }
      if (href) {
        return (
          <a key={i} href={href} target="_blank" rel="noreferrer" style={linkStyle}>{label}</a>);

      }
      return <React.Fragment key={i}>{label}</React.Fragment>;
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
};

// ---------- Bold-markdown text (**bold**) for case copy ----------
const BoldText = ({ text }) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
  p.startsWith('**') && p.endsWith('**') ?
  <strong key={i} style={{ color: '#000', fontWeight: 700 }}>{p.slice(2, -2)}</strong> :
  <React.Fragment key={i}>{p}</React.Fragment>
  );
};

// ---------- Stat tiles (bordered row of value/label pairs) ----------
const CaseStats = ({ items, scale }) =>
<div style={{
  display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`,
  border: '1px solid rgba(0,0,0,0.1)', borderRadius: 14, overflow: 'hidden',
}}>
  {items.map((it, i) =>
  <div key={i} style={{
    padding: '16px 18px',
    borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.1)' : 'none',
  }}>
    <div style={{ fontSize: scale(22), fontWeight: 700, color: '#000' }}>{it.value}</div>
    <div style={{ marginTop: 6, fontSize: scale(14), color: '#75726f' }}>{it.label}</div>
  </div>
  )}
</div>;

// ---------- Process stages (Empathize/Define/Ideate/…) — horizontal-scroll table ----------
const CaseProcess = ({ items, scale }) =>
<div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '0 -20px', padding: '0 20px' }}>
  <div style={{
    display: 'flex', width: 'max-content',
    border: '1px solid rgba(0,0,0,0.1)', borderRadius: 14, overflow: 'hidden',
  }}>
    {items.map((it, i) =>
    <div key={it.label} style={{
      width: 220, flex: '0 0 auto',
      borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.1)' : 'none',
    }}>
      <div style={{
        padding: '14px 16px', background: '#f7f7f5',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        fontSize: scale(16), fontWeight: 600, color: '#000', whiteSpace: 'nowrap',
      }}>
        {it.emoji} {it.label}
      </div>
      <div style={{ padding: '14px 16px' }}>
        <p style={{ margin: 0, fontSize: scale(14), lineHeight: '1.55', color: '#75726f' }}>
          {it.text}
        </p>
        {it.photo ?
        <img src={it.photo} alt="" style={{
          marginTop: 12, width: '100%', aspectRatio: '4 / 3', borderRadius: 12,
          objectFit: 'cover', display: 'block',
        }} /> :
        null}
      </div>
    </div>
    )}
  </div>
</div>;

// ---------- Highlighted sub-items (e.g. competitor breakdown) ----------
const CaseHighlightList = ({ heading, intro, items, scale }) =>
<React.Fragment>
  <p style={{ margin: 0, fontSize: scale(20), fontWeight: 700, color: '#000' }}>
    {heading}
  </p>
  {intro.map((para, j) =>
  <p key={j} style={{ margin: '16px 0 0', fontSize: scale(16), lineHeight: '1.6', color: '#75726f' }}>
    <BoldText text={para} />
  </p>
  )}
  {items.map((it, i) =>
  <div key={it.label} style={{ marginTop: 24 }}>
    <span style={{
      display: 'inline-block', background: '#fdec9a', color: '#000',
      fontWeight: 700, fontSize: scale(15), padding: '2px 7px', borderRadius: 4,
    }}>{it.label}</span>
    <p style={{ margin: '12px 0 0', fontSize: scale(16), lineHeight: '1.6', color: '#75726f' }}>
      {it.text}
    </p>
    {it.image ?
    <img src={it.image} alt="" style={{
      marginTop: 16, width: '100%', aspectRatio: '16 / 10', borderRadius: 14,
      objectFit: 'cover', display: 'block',
    }} /> :
    null}
  </div>
  )}
</React.Fragment>;

// ---------- Numbered takeaways (e.g. Reflection) ----------
const CaseNumberedList = ({ heading, intro, items, scale }) =>
<React.Fragment>
  <p style={{ margin: 0, fontSize: scale(20), fontWeight: 700, color: '#000' }}>
    {heading}
  </p>
  {(intro || []).map((para, j) =>
  <p key={j} style={{ margin: '16px 0 0', fontSize: scale(16), lineHeight: '1.6', color: '#75726f' }}>
    <BoldText text={para} />
  </p>
  )}
  {items.map((it, i) =>
  <div key={it.title} style={{
    display: 'flex', gap: 8, marginTop: i === 0 ? 16 : 20,
  }}>
    <span style={{ fontSize: scale(16), color: '#75726f', flex: '0 0 auto' }}>{i + 1}.</span>
    <div>
      <p style={{ margin: 0, fontSize: scale(16), fontWeight: 700, color: '#000' }}>
        {it.title}
      </p>
      <p style={{ margin: '4px 0 0', fontSize: scale(16), lineHeight: '1.6', color: '#75726f' }}>
        {it.text}
      </p>
    </div>
  </div>
  )}
</React.Fragment>;

// ---------- Team credits ----------
const CaseTeam = ({ heading, items, scale }) =>
<React.Fragment>
  <p style={{ margin: 0, fontSize: scale(20), fontWeight: 700, color: '#000' }}>
    {heading}
  </p>
  <div style={{ marginTop: 16 }}>
    {items.map((it) =>
    <p key={it.role} style={{ margin: 0, fontSize: scale(16), lineHeight: '1.9', color: '#75726f' }}>
      {it.role}: <strong style={{ color: '#000', fontWeight: 700 }}>{it.name}</strong>
    </p>
    )}
  </div>
</React.Fragment>;

// ---------- Internal company page ----------
const CompanyPage = ({ label, caseData, scale }) =>
<div style={{ width: '100%', maxWidth: 480, textAlign: 'left' }}>
  <p style={{ margin: 0, fontSize: scale(24), fontWeight: 700, color: '#000' }}>
    {caseData ? caseData.title : label}
  </p>
  {caseData ?
  <React.Fragment>
    <p style={{ margin: '16px 0 0', fontSize: scale(16), lineHeight: '1.6', color: '#75726f' }}>
      {caseData.description}
    </p>
    <div style={{
      marginTop: 32, borderRadius: 22, overflow: 'hidden',
      aspectRatio: '4 / 3', background: '#eeeeee',
    }}>
      <img src={caseData.cover} alt={caseData.title} style={{
        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
      }} />
    </div>
    {(caseData.blocks || []).map((block, i) =>
    <div key={i} style={{ marginTop: 40 }}>
      {block.type === 'stats' ? <CaseStats items={block.items} scale={scale} /> :
      block.type === 'process' ? <CaseProcess items={block.items} scale={scale} /> :
      block.type === 'image' ?
      <React.Fragment>
        <img src={block.src} alt={block.alt || ''} style={{ width: '100%', borderRadius: 18, display: 'block' }} />
        {block.caption ?
        <p style={{ margin: '12px 0 0', fontSize: scale(15), lineHeight: '1.6', color: '#75726f', fontStyle: 'italic' }}>
          {block.caption}
        </p> :
        null}
      </React.Fragment> :
      block.type === 'highlight-list' ? <CaseHighlightList heading={block.heading} intro={block.intro} items={block.items} scale={scale} /> :
      block.type === 'numbered-list' ? <CaseNumberedList heading={block.heading} intro={block.intro} items={block.items} scale={scale} /> :
      block.type === 'team' ? <CaseTeam heading={block.heading} items={block.items} scale={scale} /> :
      <React.Fragment>
        <p style={{ margin: 0, fontSize: scale(20), fontWeight: 700, color: '#000' }}>
          {block.heading}
        </p>
        {block.paragraphs.map((para, j) => {
          const text = typeof para === 'string' ? para : para.text;
          const image = typeof para === 'string' ? null : para.image;
          return (
            <React.Fragment key={j}>
              <p style={{ margin: '16px 0 0', fontSize: scale(16), lineHeight: '1.6', color: '#75726f' }}>
                <BoldText text={text} />
              </p>
              {image ?
              <img src={image} alt="" style={{
                marginTop: 16, width: '100%', borderRadius: 18, display: 'block',
              }} /> :
              null}
            </React.Fragment>);

        })}
      </React.Fragment>}
    </div>
    )}
  </React.Fragment> :
  null}
</div>;

// ---------- Foldable photo (Duo-style unfold) ----------
// Folded: the right half only (160x224, rounded on the right). Click swings the
// left half open around the hinge with a frosted-glass blur and a light sheen.
const FOLD_W = 160, FOLD_H = 224, FOLD_R = 22, FOLD_MS = 900;
const FOLD_EASE = 'cubic-bezier(.22,.8,.2,1)';
const foldT = (...props) => props.map((p) => `${p} ${FOLD_MS}ms ${FOLD_EASE}`).join(', ');
// text crossfade: the fade-OUT duration must exactly match the swap timeout
// below, otherwise the old copy is still mid-fade when the new copy starts
// fading in and the two overlap (looked especially janky on mobile).
const TEXT_OUT_MS = 260;
const TEXT_IN_MS = 320;

const FoldPhoto = ({ src, alt, open, onToggle }) => {
  const [runs, setRuns] = React.useState(0);
  const toggle = () => { onToggle(); setRuns((n) => n + 1); };
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
        filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.07)) drop-shadow(0 1px 3px rgba(0,0,0,0.04))',
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
  const [activeDock, setActiveDock] = React.useState('comp');
  const { isCompact, isMobile, scale } = useLayout();
  const dark = false; // site is light-only

  // photo unfold <-> bio text: swap the copy at the fold's midpoint, crossfading.
  // On mobile the text just swaps instantly — no fade.
  const [photoOpen, setPhotoOpen] = React.useState(false);
  const [shortShown, setShortShown] = React.useState(false);
  const [textFade, setTextFade] = React.useState(1);
  const [textFadeMs, setTextFadeMs] = React.useState(TEXT_IN_MS);
  const swapTimer = React.useRef(null);
  const togglePhoto = () => {
    const next = !photoOpen;
    setPhotoOpen(next);
    if (isMobile) {
      setShortShown(next);
      return;
    }
    setTextFadeMs(TEXT_OUT_MS);
    setTextFade(0);
    clearTimeout(swapTimer.current);
    swapTimer.current = setTimeout(() => {
      setShortShown(next);
      setTextFadeMs(TEXT_IN_MS);
      setTextFade(1);
    }, TEXT_OUT_MS);
  };
  React.useEffect(() => () => clearTimeout(swapTimer.current), []);

  // internal company pages, addressed via #/company/<key> so back/forward and
  // refresh behave; navigating pushes history, "step back" pops it.
  const [page, setPage] = React.useState(() => hashToPage());
  React.useEffect(() => {
    const onHashChange = () => setPage(hashToPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  const navigateTo = (key) => { window.location.hash = PAGE_PREFIX + key; };
  const goBack = () => { window.location.hash = ''; };

  React.useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);
  React.useEffect(() => {
    document.title = DATA.pageTitle ?? DATA.name;
  }, []);
  React.useEffect(() => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    loader.classList.add('is-hidden');
    const timer = setTimeout(() => loader.remove(), 300);
    return () => clearTimeout(timer);
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

      {(() => {
        const companyBadge = page ? DATA.badges[page] : null;
        if (companyBadge) {
          return (
            <React.Fragment>
              {/* internal company page */}
              <main style={{
                flex: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 1,
                padding: isCompact ? '32px 20px 96px' : '48px 24px 112px',
              }}>
                <CompanyPage label={companyBadge.label} caseData={companyBadge.case} scale={scale} />
              </main>
              <footer style={{
                position: 'fixed', bottom: 0, left: 0, width: '100%',
                background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)',
                paddingBottom: 'env(safe-area-inset-bottom, 0px)',
                zIndex: 2,
              }}>
                <div style={{
                  maxWidth: 480, margin: '0 auto',
                  padding: isCompact ? '16px 20px' : '20px 24px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}>
                  <button type="button" onClick={goBack} style={{
                    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: scale(15),
                    color: '#000', textDecoration: 'underline',
                    textDecorationColor: dark ? 'rgba(232,230,224,0.35)' : 'rgba(29,29,31,0.3)',
                    textUnderlineOffset: '3px', textDecorationThickness: '1px',
                    background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                  }}>Вернуться на главную</button>
                </div>
              </footer>
            </React.Fragment>);

        }
        return (
          <React.Fragment>
            {/* centered hero: avatar + bio */}
            <main style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', zIndex: 1,
              padding: isCompact ? '32px 20px' : '48px 24px',
            }}>
              <div style={{ width: '100%', maxWidth: 480, textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
                  <FoldPhoto src="assets/avatar.webp" alt={DATA.name} open={photoOpen} onToggle={togglePhoto} />
                </div>
                <div style={{ display: 'grid' }}>
                  {/* both variants occupy the same grid cell so the block's height is
                      always the taller of the two — swapping never shifts the layout */}
                  <div style={{
                    gridArea: '1 / 1', opacity: shortShown ? 0 : textFade,
                    transition: isMobile ? 'none' : `opacity ${textFadeMs}ms ${FOLD_EASE}`, pointerEvents: shortShown ? 'none' : 'auto',
                  }} aria-hidden={shortShown}>
                    <p style={{ margin: '0 0 16px', fontSize: scale(18), fontWeight: 600, color: '#000' }}>
                      {DATA.name}
                    </p>
                    {(Array.isArray(DATA.bio) ? DATA.bio : [DATA.bio]).map((para, i) =>
                    <p key={i} style={{ margin: i === 0 ? 0 : '12px 0 0', fontSize: scale(15), lineHeight: "1.65", color: '#75726f' }}>
                      <RichLine text={para} badges={DATA.badges} dark={dark} onNavigate={navigateTo} />
                    </p>
                    )}
                    {DATA.bioSocial ?
                    <p style={{ margin: '12px 0 0', fontSize: scale(15), lineHeight: "1.65", color: '#75726f' }}>
                      <RichLine text={DATA.bioSocial} badges={DATA.badges} dark={dark} onNavigate={navigateTo} />
                    </p> :
                    null}
                  </div>
                  <div style={{
                    gridArea: '1 / 1', opacity: shortShown ? textFade : 0,
                    transition: isMobile ? 'none' : `opacity ${textFadeMs}ms ${FOLD_EASE}`, pointerEvents: shortShown ? 'auto' : 'none',
                    alignSelf: 'start',
                  }} aria-hidden={!shortShown}>
                    <p style={{ margin: '0 0 16px', fontSize: scale(18), fontWeight: 600, color: '#000' }}>
                      {DATA.greeting}
                    </p>
                    <p style={{ margin: 0, fontSize: scale(15), lineHeight: "1.65", color: '#75726f' }}>
                      {DATA.bioShort.intro}
                    </p>
                    <p style={{ margin: '8px 0 0', fontSize: scale(15), lineHeight: "1.65" }}>
                      {DATA.bioShort.list.map((item, i) =>
                      <React.Fragment key={item.label}>
                        {i > 0 ? <br /> : null}
                        <span style={{ color: '#000' }}>{item.label}:</span>{' '}
                        <span style={{ color: '#75726f' }}>{item.value}</span>
                      </React.Fragment>
                      )}
                    </p>
                    {DATA.bioShort.outro.map((para, i) =>
                    <p key={i} style={{ margin: i === 0 ? '12px 0 0' : '8px 0 0', fontSize: scale(15), lineHeight: "1.65", color: '#75726f' }}>
                      {para}
                    </p>
                    )}
                  </div>
                </div>
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
                display: 'inline-flex', alignItems: 'center', gap: 16
              }}>
                {DATA.contacts.map((c) =>
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{
                  color: '#000', textDecoration: 'underline',
                  textDecorationColor: dark ? 'rgba(232,230,224,0.35)' : 'rgba(29,29,31,0.3)',
                  textUnderlineOffset: '3px', textDecorationThickness: '1px',
                }}>{c.label}</a>
                )}
              </div>
            </footer>
          </React.Fragment>);

      })()}
    </div>);

};

ReactDOM.createRoot(document.getElementById('root')).render(<Portfolio />);