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
    title: 'Fish & shellfish',
    eyebrow: 'From the coast',
    image: 'https://images.unsplash.com/photo-1747097950921-6e273f14b47f?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Cod loins, salmon, haddock, sole, prawns, scallops, lobster tails and more, selected for quality and taste.',
    highlights: ['Cod loins', 'King prawns', 'Salmon fillets'],
  },
  {
    title: 'Meat & poultry',
    eyebrow: 'Quality cuts',
    image: 'https://images.unsplash.com/photo-1583953623787-ada99d338235?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Sirloin, ribeye and fillet steaks alongside lamb, pork, chicken and duck, all ready to keep frozen at home.',
    highlights: ['Ribeye steaks', 'Chicken breast', 'Lamb rump'],
  },
  {
    title: 'Luxury specialities',
    eyebrow: 'Something different',
    image: 'https://images.unsplash.com/photo-1768238907887-023b7ac9f450?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'A handmade speciality range including Chicken Wellington, Beef Wellington, luxury kievs and prepared fish dishes.',
    highlights: ['Chicken Wellington', 'Beef Wellington', 'Luxury kievs'],
  },
  {
    title: 'Vegetarian & desserts',
    eyebrow: 'Complete the table',
    image: 'https://images.unsplash.com/photo-1717815963501-0a3391a77103?auto=format&fit=crop&fm=jpg&q=84&w=1800',
    text: 'Vegetarian dishes, seasonal choices and desserts round out a range designed to cover everything from starters to something sweet.',
    highlights: ['Vegetarian range', 'Seasonal choices', 'Desserts'],
  },
];

const featured = [
  ['Devon hand dressed crab', 'Prepared ready to enjoy, with both white and brown crab meat and the hard work already done.'],
  ['Raw king prawns', 'Shell-on king prawns with a naturally sweet flavour, well suited to pan frying or the barbecue.'],
  ['Jumbo cod fish fingers', 'Prime flaked cod fillet in a crispy crumb, ready to cook straight from the freezer.'],
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
            <p>Quality fish, shellfish, meat, poultry and gourmet frozen foods delivered direct to homes across the south of England and Wales.</p>
            <div className="heroActions">
              <a className="buttonPrimary" href="#range">Explore the range <Arrow /></a>
              <a className="buttonGhost" href="#contact">Arrange a visit</a>
            </div>
            <div className="heroStats">
              <div><strong>Since 1998</strong><span>family run service</span></div>
              <div><strong>Over 6</strong><span>delivery vehicles</span></div>
              <div><strong>IQF</strong><span>individually quick frozen</span></div>
            </div>
          </div>

          <div className="heroVisual">
            <img src="https://images.unsplash.com/photo-1583953623787-ada99d338235?auto=format&fit=crop&fm=jpg&q=88&w=2200" alt="Steak and vegetables served on a dark plate" />
            <div className="heroImageShade" />
            <div className="heroBadge">
              <span>Home delivery</span>
              <strong>South of England<br />& Wales</strong>
            </div>
            <div className="qualityChip"><span>01</span><p>Selected for<br />quality & taste</p></div>
          </div>
        </div>
        <div className="heroTicker">
          <div>COD LOINS <span>•</span> KING PRAWNS <span>•</span> RIBEYE STEAKS <span>•</span> CHICKEN WELLINGTON <span>•</span> SMOKED SALMON <span>•</span> LUXURY SPECIALITIES <span>•</span></div>
        </div>
      </section>

      <section className="intro shell">
        <span className="sectionLabel">WHAT WE DO</span>
        <div>
          <p className="introLead">Fine frozen food with the convenience of home delivery.</p>
          <p className="introCopy">Regis Foods is a family run frozen food delivery business. The range is selected for quality and taste, covering fish and shellfish, meat and poultry, handmade luxury specialities, vegetarian choices and desserts, backed by the personal service the business has offered since 1998.</p>
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
              <img src={item.image} alt={`${item.title} representing the Regis Foods range`} />
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
          <h2>A closer look at Regis Foods.</h2>
          <p>These are three products already highlighted by Regis Foods, showing the mix of quality seafood and convenient frozen favourites available from the range.</p>
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
          <p className="storyEyebrow">From one van to a growing delivery fleet.</p>
          <h2>Personal service never went out of style.</h2>
          <p>Regis Foods began in 1998 with one frozen food delivery vehicle. Over the years the business has grown to more than six vehicles serving customers throughout the south of England and Wales.</p>
          <p>The focus remains the same: carefully selected food, personal service and the convenience of paying by card when your delivery arrives.</p>
          <div className="storyStats">
            <div><strong>1 → 6+</strong><span>from one van to over six vehicles</span></div>
            <div><strong>Up to 1 year+</strong><span>freezer life across the frozen range</span></div>
          </div>
        </div>
      </section>

      <section className="howSection" id="how">
        <div className="shell howHeader">
          <span className="sectionLabel">HOW IT WORKS</span>
          <h2>Good food, delivered simply.</h2>
        </div>
        <div className="shell steps">
          <article><span>01</span><h3>Call or email</h3><p>Place an order by phone or email, or get in touch to ask about the current range, seasonal products and special offers.</p></article>
          <article><span>02</span><h3>See the range</h3><p>If you would like to see the products first, arrange an appointment and a Regis Foods van can visit so you can view the range and speak with the team.</p></article>
          <article><span>03</span><h3>Delivered frozen</h3><p>Products are kept at the correct temperature and delivered in recyclable paper packaging. Payment can be made by card at the time of delivery.</p></article>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="shell contactGrid">
          <div>
            <span className="sectionLabel light">GET IN TOUCH</span>
            <h2>Ask about the latest range.</h2>
            <p>Contact Regis Foods for special offers, seasonal products, ordering information or to arrange an appointment to see the range.</p>
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
          <p>Quality frozen food delivered with personal service since 1998.</p>
          <div className="footerLinks"><a href="#range">Our range</a><a href="#story">Our story</a><a href="#how">How it works</a><a href="#contact">Contact</a></div>
          <span>Concept redesign · 2026</span>
        </div>
      </footer>
    </main>
  );
}
