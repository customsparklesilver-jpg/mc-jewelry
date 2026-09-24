interface HeroBannerProps {
headline?: string;
tagline?: string;
ctaText?: string;
ctaLink?: string;
backgroundImage?: string;
}

export function HeroBanner({
headline = 'Crafted for the Extraordinary',
tagline = 'Moissanite & 925 Sterling Silver — Timeless Luxury, Redefined.',
ctaText = 'Shop the Collection',
ctaLink = '/collections/all',
backgroundImage = '/images/hero-banner.jpg',
}: HeroBannerProps) {
return (
<section
className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
aria-label="Hero Banner"
>
<div
className="absolute inset-0 bg-center bg-cover bg-no-repeat"
style={{ backgroundImage: `url('${backgroundImage}')` }}
/>
<div className="absolute inset-0 bg-black/60" />
<div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
<div className="flex items-center justify-center gap-4 mb-6">
<span className="block h-px w-16 bg-[#C9A84C]" />
<span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-light">
MC Jewelry
</span>
<span className="block h-px w-16 bg-[#C9A84C]" />
</div>
<h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight mb-4 drop-shadow-lg">
{headline}
</h1>
<p className="text-white/75 text-base sm:text-lg font-light tracking-wide mb-10">
{tagline}
</p>
<a
href={ctaLink}
className="inline-block border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300 text-sm uppercase tracking-[0.2em] font-medium px-10 py-4"
>
{ctaText}
</a>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
</section>
);
}
