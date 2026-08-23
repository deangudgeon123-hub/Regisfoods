const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Mail = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="14" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
    <path d="m5 7 7 5.5L19 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const categories = [
  {
    title: 'Fish & shellfish',
    eyebrow: 'From the coast',
    image: 'https://images.unsplash.com/photo-1747097950921-6e273f14b47f?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'A premium frozen seafood selection designed for easy weeknight cooking and special occasions alike.',
    highlights: ['Cod loins', 'King prawns', 'Salmon fillets'],
  },
  {
    title: 'Meat & poultry',
    eyebrow: 'Quality cuts',
    image: 'https://images.unsplash.com/photo-1583953623787-ada99d338235?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Steaks, chicken, lamb and more, selected to make stocking the freezer feel a little more considered.',
    highlights: ['Ribeye steaks', 'Chicken breast', 'Lamb rump'],
  },
  {
    title: 'Prepared favourites',
    eyebrow: 'Ready when you are',
    image: 'https://images.unsplash.com/photo-1768238907887-023b7ac9f450?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Comforting prepared dishes and indulgent freezer staples for nights when convenience still needs to feel premium.',
    highlights: ['Wellingtons', 'Filled chicken', 'Prepared fish'],
  },
  {
    title: 'Vegetarian & desserts',
    eyebrow: 'Complete the table',
    image: 'https://images.unsplash.com/photo-1717815963501-0a3391a77103?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Vegetarian dishes, seasonal options and desserts to round out a freezer built for more than just the basics.',
    highlights: ['Vegetarian range', 'Seasonal choices', 'Desserts'],
  },
];

const featured = [
  ['Hand dressed crab', 'Prepared ready to enjoy, with the hard work already done.'],
  ['Raw king prawns', 'A versatile freezer staple suited to pan frying, grilling and quick midweek meals.'],
  ['Jumbo cod fish fingers', 'A nostalgic favourite reworked as a more premium freezer option.'],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <header className="header shell">
          <a className="brand" href="#home" aria-label="Harbour and Hearth home">
            <span className="brandSeal"><b>H</b><i>H</i></span>
            <span className="brandWords"><strong>HARBOUR</strong><small>& HEARTH</small></span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#range">Our range</a>
            <a href="#story">Our story</a>
            <a href="#how">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="headerCta" href="#contact">Enquire</a>
        </header>

        <div className="heroGrid shell">
          <div className="heroCopy">
            <div className="heroKicker"><span /> Premium frozen food, delivered differently</div>
            <h1>Fine food.<br /><em>Frozen at its best.</em></h1>
            <p>Quality seafood, meat, poultry and prepared favourites presented with a more premium approach to home freezer delivery.</p>
            <div className="heroActions">
              <a className="buttonPrimary" href="#range">Explore the range <Arrow /></a>
              <a className="buttonGhost" href="#contact">Make an enquiry</a>
            </div>
            <div className="heroStats">
              <div><strong>Premium</strong><span>carefully presented range</span></div>
              <div><strong>Simple</strong><span>direct home delivery</span></div>
              <div><strong>Frozen</strong><span>ready when you are</span></div>
            </div>
          </div>

          <div className="heroVisual">
            <img src="https://images.unsplash.com/photo-1583953623787-ada99d338235?auto=format&fit=crop&fm=jpg&q=88&w=2200" alt="Steak and vegetables served on a dark plate" />
            <div className="heroImageShade" />
            <div className="heroBadge">
              <span>Curated for home</span>
              <strong>Premium freezer<br />essentials</strong>
            </div>
            <div className="qualityChip"><span>01</span><p>Selected for<br />quality & taste</p></div>
          </div>
        </div>
        <div className="heroTicker">
          <div>COD LOINS <span>•</span> KING PRAWNS <span>•</span> RIBEYE STEAKS <span>•</span> PREPARED FAVOURITES <span>•</span> SMOKED SALMON <span>•</span> DESSERTS <span>•</span></div>
        </div>
      </section>

      <section className="intro shell">
        <span className="sectionLabel">WHAT WE DO</span>
        <div>
          <p className="introLead">Fine frozen food with a stronger sense of presentation.</p>
          <p className="introCopy">Harbour & Hearth is a fictional premium frozen food delivery concept built around a simple idea: the freezer can still feel considered. The range covers seafood, meat, poultry, prepared dishes, vegetarian options and desserts, all presented with a more refined digital experience.</p>
        </div>
      </section>

      <section className="rangeSection" id="range">
        <div className="shell rangeTop">
          <span className="sectionLabel light">THE RANGE</span>
          <div>
            <p className="rangeEyebrow">Stock the freezer properly.</p>
            <h2>Something for every table.</h2>
          </div>
        </div>
        <div className="shell categoryGrid">
          {categories.map((item, index) => (
            <article className="categoryCard" key={item.title}>
              <img src={item.image} alt={`${item.title} from the Harbour and Hearth concept range`} />
              <div className="categoryShade" />
              <span className="cardIndex">0{index + 1}</span>
              <div className="categoryContent">
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="categoryTags">{item.highlights.map((tag) => <small key={tag}>{tag}</small>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featuredSection shell">
        <div className="featuredIntro">
          <span className="sectionLabel">FEATURED FROM THE RANGE</span>
          <h2>A closer look at Harbour & Hearth.</h2>
          <p>Three examples showing how a premium frozen food range can balance quality, convenience and stronger presentation.</p>
        </div>
        <div className="featuredList">
          {featured.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      <section className="storySection" id="story">
        <div className="storyImage">
          <img src="https://images.unsplash.com/photo-1684253188376-16c7875d04bc?auto=format&fit=crop&fm=jpg&q=86&w=2000" alt="King prawns served on a dark platter" />
          <div className="storyYear">H&H</div>
        </div>
        <div className="storyCopy">
          <span className="sectionLabel light">THE CONCEPT</span>
          <p className="storyEyebrow">A freezer brand designed to feel more premium.</p>
          <h2>Convenience without looking cheap.</h2>
          <p>The concept explores what a modern direct to consumer frozen food brand could look like with stronger typography, richer imagery and a more considered customer journey.</p>
          <p>The focus is deliberately simple: make everyday frozen food feel more desirable before the customer has even seen the product in person.</p>
          <div className="storyStats">
            <div><strong>01</strong><span>premium visual positioning</span></div>
            <div><strong>02</strong><span>clear product led structure</span></div>
          </div>
        </div>
      </section>

      <section className="howSection" id="how">
        <div className="shell howHeader">
          <span className="sectionLabel">HOW IT WORKS</span>
          <h2>Good food, delivered simply.</h2>
        </div>
        <div className="shell steps">
          <article><span>01</span><h3>Browse the range</h3><p>Explore seafood, meat, poultry, prepared dishes and desserts through a clearer product first experience.</p></article>
          <article><span>02</span><h3>Build your order</h3><p>Choose the products that suit your freezer and household without overcomplicating the journey.</p></article>
          <article><span>03</span><h3>Delivered frozen</h3><p>Your order arrives ready for the freezer so better food is on hand whenever you need it.</p></article>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="shell contactGrid">
          <div>
            <span className="sectionLabel light">CONCEPT PROJECT</span>
            <h2>Built to make frozen food feel premium.</h2>
            <p>This is a fictional portfolio concept created to demonstrate brand positioning, art direction and modern ecommerce style presentation.</p>
          </div>
          <div className="contactCards">
            <a href="mailto:hello@sussexsiteco.co.uk"><Mail /><span><small>Project by</small><strong>Sussex Site Co.</strong></span><Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <a className="brand footerBrand" href="#home"><span className="brandSeal"><b>H</b><i>H</i></span><span className="brandWords"><strong>HARBOUR</strong><small>& HEARTH</small></span></a>
          <p>Premium frozen food concept built around stronger digital presentation.</p>
          <div className="footerLinks"><a href="#range">Our range</a><a href="#story">Concept</a><a href="#how">How it works</a><a href="#contact">Contact</a></div>
          <span>Portfolio concept · 2026</span>
        </div>
      </footer>
    </main>
  );
}
