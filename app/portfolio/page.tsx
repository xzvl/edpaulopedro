'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'

const PLATFORMS = ['All', 'WordPress', 'Webflow', 'Shopify', 'Squarespace', 'HubSpot', 'Wix', 'HTML', 'Next.js']
const COMPANIES = ['All', 'Growmodo', 'Net Fusion Technology', 'Glue Digital', 'Capital Tech Co', 'Powered']

function getDisplayUrl(url: string): string {
  try {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return new URL(url).hostname.replace(/^www\./, '')
    }
  } catch {}
  return url
}

function isValidUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

const onlineCount = portfolioData.filter((e) => e.active === 'yes').length
const totalCount = portfolioData.length

export default function PortfolioPage() {
  const [status, setStatus] = useState<'online' | 'unlisted'>('online')
  const [platform, setPlatform] = useState('All')
  const [company, setCompany] = useState('All')

  const filtered = useMemo(() => {
    return portfolioData.filter((entry) => {
      const matchesStatus = status === 'online' ? entry.active === 'yes' : entry.active !== 'yes'
      const matchesPlatform = platform === 'All' || entry.platform === platform
      const matchesCompany = company === 'All' || entry.company === company
      return matchesStatus && matchesPlatform && matchesCompany
    })
  }, [status, platform, company])

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/15 backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center px-6 md:px-margin-desktop py-6 w-full max-w-container-max mx-auto">
          <Link href="/">
            <Image
              src="/assets/alt-logo.webp"
              alt="Ed Paulo Pedro"
              width={160}
              height={40}
              className="lg:h-10 h-6 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant/70 hover:text-on-surface transition-colors duration-300"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 px-6 md:px-margin-desktop w-full max-w-container-max mx-auto">
          <span className="font-label-mono text-label-mono text-cyber-red uppercase mb-4 block tracking-widest">
            Portfolio
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
            Websites //{' '}
            <span className="font-light opacity-50">Built & Contributed</span>
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-2xl mb-12">
            A comprehensive list of websites I&apos;ve built and contributed to across multiple companies and platforms.
          </p>
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="font-headline-lg text-headline-lg-mobile text-cyber-red">{onlineCount}+</div>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-1">
                Online Sites
              </div>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg-mobile text-on-surface">{totalCount}+</div>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-1">
                Total Projects
              </div>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg-mobile text-on-surface">5</div>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-1">
                Companies
              </div>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg-mobile text-on-surface">8</div>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-1">
                Platforms
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Table Section */}
        <section className="px-6 md:px-margin-desktop py-16 pb-32 w-full max-w-container-max mx-auto">
          {/* Filters */}
          <div className="mb-10 space-y-5">
            {/* Status toggle */}
            <div className="flex gap-2">
              {(['online', 'unlisted'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-6 py-2 rounded-sm font-label-mono text-label-mono uppercase tracking-widest transition-all duration-200 ${
                    status === s
                      ? 'bg-cyber-red text-white cyber-red-glow'
                      : 'border border-white/10 text-on-surface-variant hover:border-white/30 hover:text-on-surface'
                  }`}
                >
                  {s === 'online' ? '● Online' : '○ Unlisted'}
                </button>
              ))}
            </div>

            {/* Platform filter */}
            <div>
              <p className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">
                Platform
              </p>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`px-3 py-1 rounded-sm font-label-mono text-[10px] uppercase tracking-widest transition-all duration-200 ${
                      platform === p
                        ? 'bg-white/15 text-on-surface border border-white/30'
                        : 'border border-white/10 text-on-surface-variant hover:border-white/20 hover:text-on-surface'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Company filter */}
            <div>
              <p className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">
                Company
              </p>
              <div className="flex flex-wrap gap-2">
                {COMPANIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCompany(c)}
                    className={`px-3 py-1 rounded-sm font-label-mono text-[10px] uppercase tracking-widest transition-all duration-200 ${
                      company === c
                        ? 'bg-white/15 text-on-surface border border-white/30'
                        : 'border border-white/10 text-on-surface-variant hover:border-white/20 hover:text-on-surface'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result count */}
          <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-4">
            Showing {filtered.length} site{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Table */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-4 text-left font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest w-12">
                      #
                    </th>
                    <th className="px-4 py-4 text-left font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Website
                    </th>
                    <th className="px-4 py-4 text-left font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Platform
                    </th>
                    <th className="px-4 py-4 text-left font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest hidden md:table-cell">
                      Company
                    </th>
                    <th className="px-4 py-4 text-left font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Contribution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((entry, i) => {
                    const displayUrl = getDisplayUrl(entry.url)
                    const isLink = isValidUrl(entry.url)
                    return (
                      <tr
                        key={`${entry.url}-${i}`}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors duration-150"
                      >
                        <td className="px-4 py-3 font-label-mono text-[10px] text-on-surface-variant/50">
                          {i + 1}
                        </td>
                        <td className="px-4 py-3 max-w-[200px] md:max-w-none">
                          {isLink ? (
                            <a
                              href={entry.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-body-md text-sm text-on-surface hover:text-cyber-red transition-colors duration-200 truncate block"
                            >
                              {displayUrl}
                            </a>
                          ) : (
                            <span className="font-body-md text-sm text-on-surface-variant/70 truncate block">
                              {displayUrl}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-white/10 rounded-sm font-label-mono text-[10px] text-on-surface border border-white/10 whitespace-nowrap">
                            {entry.platform}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-body-md text-sm text-on-surface-variant hidden md:table-cell whitespace-nowrap">
                          {entry.company}
                        </td>
                        <td className="px-4 py-3 font-label-mono text-label-mono text-cyber-red whitespace-nowrap">
                          {entry.contribution || '—'}
                        </td>
                      </tr>
                    )
                  })}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-4 py-16 text-center font-body-md text-on-surface-variant/50">
                        No sites match the selected filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
