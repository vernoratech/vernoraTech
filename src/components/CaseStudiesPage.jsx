import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { caseStudies } from '../data/caseStudies';

const CaseStudiesPage = (props) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-700/20 to-purple-600/20" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="mb-12">
              <button
                type="button"
                onClick={props.onBackToHome}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 hover:bg-white/15 transition-colors duration-200"
              >
                ← Back to Home
              </button>
              <h1 className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight">
                Case studies engineered for measurable growth
              </h1>
              <p className="mt-4 text-lg text-slate-200/80 max-w-3xl">
                Explore how we partner with product and marketing teams to launch modern platforms, accelerate revenue, and operationalize continuous improvement.
              </p>
            </div>

            <div className="grid gap-10 lg:gap-12">
              {caseStudies.map((study, index) => (
                <article
                  key={study.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur transition-all duration-300 hover:border-white/25 hover:shadow-[0_30px_90px_-45px_rgba(15,23,42,0.8)]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
                        <span>{study.client}</span>
                        <span className="h-1 w-1 rounded-full bg-white/40" />
                        <span>{study.industry}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        {study.headline}
                      </h2>
                      <p className="text-base text-slate-200/80 leading-relaxed max-w-3xl">
                        {study.summary}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-52">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                        <div className="text-4xl font-bold text-white">{String(index + 1).padStart(2, '0')}</div>
                        <div className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
                          Case Study
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {study.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                        <span className="text-sm text-slate-100 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
