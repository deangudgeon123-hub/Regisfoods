const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Phone = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.2 3.8 9.5 8l-1.8 1.7c1.1 2.4 3 4.3 5.4 5.4l1.7-1.8 4.2 2.3-.8 3.6c-.2.8-.9 1.4-1.8 1.4C9.1 20.6 3.4 14.9 3.4 7.6c0-.9.6-1.6 1.4-1.8l2.4-.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
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
    title: 'Fish & seafood',
    eyebrow: 'From the coast',
    image: 'https://images.unsplash.com/photo-1747097950921-6e273f14b47f?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Cod loins, salmon, sole, haddock, prawns, scallops, lobster and more, selected for quality and flavour.',
    highlights: ['Cod loins', 'King prawns', 'Salmon fillets'],
  },
  {
    title: 'Meat & poultry',
    eyebrow: 'Premium cuts',
    image: 'https://images.unsplash.com/photo-1583953623787-ada99d338235?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Steaks, lamb, pork, chicken and duck, portioned for easy home cooking and kept frozen until delivery.',
    highlights: ['Ribeye steak', 'Chicken breast', 'Lamb rump'],
  },
  {
    title: 'Gourmet specialities',
    eyebrow: 'Made for easy dining',
    image: 'https://images.unsplash.com/photo-1768238907887-023b7ac9f450?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'From chicken Wellington to handmade speciality dishes, made to bring restaurant-style food home.',
    highlights: ['Chicken Wellington', 'Beef Wellington', 'Luxury kievs'],
  },
  {
    title: 'Desserts',
    eyebrow: 'Something sweet',
    image: 'https://images.unsplash.com/photo-1717815963501-0a3391a77103?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Finish the meal properly with a rotating selection of indulgent frozen desserts and seasonal favourites.',
    highlights: ['Seasonal range', 'Family favourites', 'Special treats'],
  },
];

const featured = [
  ['Devon hand dressed crab', 'Prepared and ready to enjoy, with rich white and brown crab meat.'],
  ['Raw king prawns', 'Shell-on prawns with a naturally sweet flavour, ideal for grilling or pan frying.'],
  ['Jumbo cod fish fingers', 'Prime cod fillet in a crisp crumb, ready straight from the freezer.'],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <header className="header shell">
          <a className="brand" href="#home" aria-label="Regis Foods home">
            <span className="brandSeal"><b>R</b><i>F</i></span>
            <span className="brandWords"><strong>REGIS</strong><small>FOODS</small></span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#range">Our range</a>
            <a href="#story">Our story</a>
            <a href="#how">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="headerCta" href="tel:07437904340"><Phone /> Call to order</a>
        </header>

        <div className="heroGrid shell">
          <div className="heroCopy">
            <div className="heroKicker"><span /> Family run since 1998</div>
            <h1>Fine food.<br /><em>Frozen at its best.</em></h1>
            <p>Premium fish, seafood, meat and gourmet specialities delivered direct to your door across Southern England and Wales.</p>
            <div className="heroActions">
              <a className="buttonPrimary" href="#range">Explore the range <Arrow /></a>
              <a className="buttonGhost" href="#contact">Arrange a visit</a>
            </div>
            <div className="heroStats">
              <div><strong>25+</strong><span>years serving customers</span></div>
              <div><strong>6+</strong><span>delivery vehicles</span></div>
              <div><strong>IQF</strong><span>locked in freshness</span></div>
            </div>
          </div>

          <div className="heroVisual">
            <img src="https://images.unsplash.com/photo-1583953623787-ada99d338235?auto=format&fit=crop&fm=jpg&q=88&w=2200" alt="Premium steak and vegetables served on a dark plate" />
            <div className="heroImageShade" />
            <div className="heroBadge">
              <span>Home delivery</span>
              <strong>Southern England<br />& Wales</strong>
            </div>
            <div className="qualityChip"><span>01</span><p>Quality selected<br />for taste</p></div>
          </div>
        </div>
        <div className="heroTicker">
          <div>COD LOINS <span>•</span> KING PRAWNS <span>•</span> RIBEYE STEAKS <span>•</span> CHICKEN WELLINGTON <span>•</span> SMOKED SALMON <span>•</span> GOURMET DESSERTS <span>•</span></div>
        </div>
      </section>

      <section className="intro shell">
        <span className="sectionLabel">WHAT WE DO</span>
        <div>
          <p className="introLead">A freezer full of food you actually look forward to eating.</p>
          <p className="introCopy">Regis Foods sources and delivers a broad range of premium frozen food, from everyday favourites to restaurant-style specialities. Quality, convenience and personal service have been at the heart of the business since day one.</p>
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
              <img src={item.image} alt={`${item.title} from the Regis Foods range`} />
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
          <span className="sectionLabel">CUSTOMER FAVOURITES</span>
          <h2>A few favourites from the freezer.</h2>
          <p>Not sure where to start? These are the kinds of products that make the Regis range feel a little different from the weekly supermarket run.</p>
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
          <div className="storyYear">1998</div>
        </div>
        <div className="storyCopy">
          <span className="sectionLabel light">OUR STORY</span>
          <p className="storyEyebrow">One van. One idea.</p>
          <h2>Personal service never went out of style.</h2>
          <p>Regis Foods started with a single frozen food delivery vehicle and grew into a multi-van operation serving customers across the south of England and Wales.</p>
          <p>The business still focuses on the same things: carefully selected food, straightforward service and the convenience of paying by card when your order arrives.</p>
          <div className="storyStats">
            <div><strong>1 → 6+</strong><span>vehicles as the business grew</span></div>
            <div><strong>Up to 1 year+</strong><span>freezer life across much of the range</span></div>
          </div>
        </div>
      </section>

      <section className="howSection" id="how">
        <div className="shell howHeader">
          <span className="sectionLabel">HOW IT WORKS</span>
          <h2>Good food, delivered simply.</h2>
        </div>
        <div className="shell steps">
          <article><span>01</span><h3>Get in touch</h3><p>Call or email Regis Foods to ask about the current range, seasonal products and special offers.</p></article>
          <article><span>02</span><h3>See the range</h3><p>Arrange an appointment and a Regis Foods van can come out so you can see the products and speak with the team.</p></article>
          <article><span>03</span><h3>Delivered frozen</h3><p>Your order is kept at the correct temperature and delivered in recyclable paper packaging, ready for your freezer.</p></article>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="shell contactGrid">
          <div>
            <span className="sectionLabel light">READY TO ORDER?</span>
            <h2>Bring better food home.</h2>
            <p>Ask about the latest range, seasonal products or arrange for the team to show you what is available.</p>
          </div>
          <div className="contactCards">
            <a href="tel:07437904340"><Phone /><span><small>Call Regis Foods</small><strong>07437 904340</strong></span><Arrow /></a>
            <a href="mailto:info@regisfoods.com"><Mail /><span><small>Email the team</small><strong>info@regisfoods.com</strong></span><Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <a className="brand footerBrand" href="#home"><span className="brandSeal"><b>R</b><i>F</i></span><span className="brandWords"><strong>REGIS</strong><small>FOODS</small></span></a>
          <p>Premium frozen food delivered with personal service since 1998.</p>
          <div className="footerLinks"><a href="#range">Our range</a><a href="#story">Our story</a><a href="#how">How it works</a><a href="#contact">Contact</a></div>
          <span>Concept redesign · 2026</span>
        </div>
      </footer>
    </main>
  );
}
