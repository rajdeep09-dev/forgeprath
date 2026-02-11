import ReededHero from "@/components/ReededHero";
import BenefitsGrid from "@/components/BenefitsGrid";
import HorizontalPrograms from "@/components/HorizontalPrograms";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import InstagramFeed from "@/components/InstagramFeed";
import ContactFooter from "@/components/ContactFooter";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";

import img01 from "@/assets/client_transformation_01.jpg";
import img02 from "@/assets/client_transformation_02.jpg";
import img03 from "@/assets/client_transformation_03.jpg";
import img04 from "@/assets/client_transformation_04.jpg";
import img05 from "@/assets/client_transformation_05.jpg";
import img06 from "@/assets/client_transformation_06.jpg";

const results = [
  { name: "Bangalore Nationals", stat: "1st Place", quote: "Weighted Endurance — First Place 🥇", image: img01 },
  { name: "6-Month Transformation", stat: "+12kg LBM", quote: "From skinny to muscular in just 6 months.", image: img02 },
  { name: "1-Year Transformation", stat: "Transformed", quote: "Complete physique overhaul in 12 months.", image: img03 },
  { name: "Back Development", stat: "6 Months", quote: "May to November — insane back gains.", image: img04 },
  { name: "Maharashtra State", stat: "🥉 Bronze", quote: "Bronze Medal — State Powerlifting Championship.", image: img05 },
  { name: "Client & Coach", stat: "Winner", quote: "ISC Streetlifting National Championship 2025.", image: img06 },
];

const PortfolioPage = () => {
  return (
    <>
      <ReededHero />
      <BenefitsGrid />

      {/* Transformation Marquee */}
      <section className="py-24 md:py-32">
        <ScrollReveal>
          <div className="text-center mb-16 px-6">
            <p className="mono-label mb-4">The Proof</p>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase text-gradient">
              Real Transformations
            </h2>
          </div>
        </ScrollReveal>

        <Marquee speed={40}>
          {results.map((r) => (
            <div key={r.name} className="glass glow-border w-[340px] flex-shrink-0 overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 border-t border-[hsl(var(--border))]">
                <div className="flex items-baseline justify-between mb-2">
                  <p className="font-heading text-lg uppercase">{r.name}</p>
                  <p className="font-heading text-xl font-bold">{r.stat}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{r.quote}"</p>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      <HorizontalPrograms />
      <ResultsSection />
      <FAQSection />
      <InstagramFeed />
      <ContactFooter />
    </>
  );
};

export default PortfolioPage;
