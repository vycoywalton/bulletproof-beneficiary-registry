const workflow = [
  ['01', 'Create your account', 'Begin with a private workspace protected by identity verification.'],
  ['02', 'Verify your identity', 'Confirm you are authorized before any beneficiary search begins.'],
  ['03', 'Start a search', 'Submit the minimum information needed to locate potential benefits.'],
  ['04', 'Track securely', 'Follow progress and preserve verified policy and document records.'],
] as const;

export default function HomePage() {
  return (
    <main>
      <nav aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Bulletproof Beneficiary home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>Bulletproof<span>Beneficiary</span></span>
        </a>
        <a className="nav-action" href="#workflow">See how it works</a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Protected legacy planning</p>
        <h1>What was meant for you<br />should never be lost.</h1>
        <p className="lede">A secure place to discover beneficiary benefits, preserve trusted records, and organize what matters for the people you love.</p>
        <div className="hero-actions">
          <a className="primary-action" href="#workflow">Start with the secure process</a>
          <span>Identity verification required</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Trust commitments">
        <p><strong>Privacy first</strong><span>Minimum necessary information</span></p>
        <p><strong>Human controlled</strong><span>Approval before sensitive actions</span></p>
        <p><strong>Traceable</strong><span>Provenance for every protected record</span></p>
      </section>

      <section className="workflow" id="workflow">
        <header>
          <p className="eyebrow">A careful path forward</p>
          <h2>Simple for families.<br />Serious about security.</h2>
        </header>
        <ol>
          {workflow.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <footer>
        <p>PBOS governed · Human certification required</p>
        <p>Bulletproof Beneficiary System 001</p>
      </footer>
    </main>
  );
}
