const ImprintSection = () => {
  return (
    <section className="section imprint-section" id="imprint">
      <div className="about-content">
        <h2 className="section-title">Imprint (Impressum)</h2>

        <div className="imprint-content glass-card">
          <h3>Information pursuant to §5 E-Commerce Act (ECG) and §25 Media Act (MStV):</h3>

          <h3>Website Operator:</h3>
          <p>
            <strong>Name:</strong> Elias Pöschl<br />
            <strong>Country:</strong> Austria<br />
            <strong>Email:</strong> <a href="mailto:eliaspoe194@gmail.com">eliaspoe194@gmail.com</a><br />
            <strong>GitHub:</strong> <a href="https://github.com/DeltaAT" target="_blank" rel="noopener noreferrer">@DeltaAT</a>
          </p>

          <h3>Hosting Provider:</h3>
          <p>
            <strong>Operator:</strong> netcup GmbH<br />
            <strong>Address:</strong> Emmy-Noether-Straße 10, 76131 Karlsruhe, Germany<br />
            <strong>Website:</strong> <a href="https://www.netcup.com" target="_blank" rel="noopener noreferrer">www.netcup.com</a><br />
            <strong>Privacy:</strong> <a href="https://www.netcup.com/en/contact/privacy-policy" target="_blank" rel="noopener noreferrer">netcup Privacy Policy</a>
          </p>

          <h3>Liability for Content:</h3>
          <p>
            As service providers, we are responsible for our own content in accordance with Austrian law and §7(1) of the Telemediengesetz (TMG).
            We are obligated to monitor our content for legal violations. However, we are not obligated to monitor external information provided
            by third parties or to investigate alleged unlawful activity. Our obligations to remove or block the use of information remain unaffected.
          </p>

          <h3>Liability for Links:</h3>
          <p>
            Our website contains links to external third-party websites. We have no influence over their content and assume no liability for them.
            The respective provider or operator of linked pages is responsible for their content. At the time of linking, we verified that no legal violations existed.
            However, continuous monitoring of linked content is not reasonable without concrete evidence of violations.
          </p>

          <h3>Copyright and Intellectual Property:</h3>
          <p>
            The content and works created by the site operators are subject to Austrian copyright law and international copyright treaties.
            Reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright law require written permission
            of the author or creator. Unauthorized use may result in civil or criminal penalties under Austrian law (§91 et seq. Urheberrechtsgesetz - UrhG).
          </p>

          <h3>Disclaimer:</h3>
          <p>
            The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind,
            express or implied, regarding the accuracy, adequacy, or completeness of this information. Your use of this website is at your own risk.
            We shall not be liable for any damages arising from the use of this website or its content.
          </p>

          <h3>Dispute Resolution:</h3>
          <p>
            Consumers in Austria have the right to access the online dispute resolution platform (ODR) provided by the European Commission at
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> ec.europa.eu/consumers/odr/</a>.
          </p>

          <h3>Last Updated:</h3>
          <p>{new Date().toLocaleDateString('de-AT')}</p>
        </div>
      </div>
    </section>
  );
};

export default ImprintSection;
