# SEO Implementation Guide

Bu dokümanda Foody landing page için yapılan SEO optimizasyonları ve deployment sonrası yapılması gerekenler açıklanmaktadır.

## ✅ Yapılan SEO Optimizasyonları

### 1. Metadata ve Meta Tags

**Ana Sayfa (app/layout.tsx)**
- ✅ Title template (`%s | Foody`)
- ✅ Meta description (155 karakter civarı)
- ✅ Keywords array (10 anahtar kelime)
- ✅ Authors, creator, publisher bilgileri
- ✅ Robots directives
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ Language tag (en)
- ✅ Viewport ve theme-color

**Alt Sayfalar**
- ✅ Privacy Policy - Ayrı metadata
- ✅ Terms of Service - Ayrı metadata  
- ✅ Contact - Layout ile metadata

### 2. Yapılandırılmış Veri (JSON-LD)

**Homepage (app/page.tsx)**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Foody",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "iOS, Android",
  "offers": { "price": "0" },
  "aggregateRating": {
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
}
```

**Layout (app/layout.tsx)**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Foody",
  "url": "https://mealmatesapp.app",
  "applicationCategory": "LifestyleApplication"
}
```

### 3. Site Haritası ve Robot Dosyaları

**Sitemap (app/sitemap.ts)**
- ✅ Dinamik sitemap.xml oluşturma
- ✅ Change frequency tanımları
- ✅ Priority değerleri (0.5 - 1.0)
- ✅ Last modified tarihler

**Robots.txt (public/robots.txt)**
```
User-agent: *
Allow: /
Sitemap: https://mealmatesapp.app/sitemap.xml
Crawl-delay: 1
```

### 4. Open Graph Image

**Otomatik OG Image (app/opengraph-image.tsx)**
- ✅ Edge runtime ile dinamik oluşturma
- ✅ 1200x630 boyut (optimal)
- ✅ Brand renkleri (teal, cyan, blue gradient)
- ✅ Emoji ve text overlay

### 5. Teknik Optimizasyonlar

**Next.js Config (next.config.ts)**
- ✅ Compression enabled
- ✅ Powered-by header disabled (security)
- ✅ ETag generation
- ✅ Image optimization
- ✅ Standalone output (Docker)

**Performance**
- ✅ Next.js Image component kullanımı
- ✅ Priority loading (above-the-fold images)
- ✅ Lazy loading
- ✅ Font optimization (Geist)

### 6. Semantic HTML

- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Semantic tags (section, article, nav)
- ✅ ARIA labels where needed
- ✅ Alt text for images
- ✅ Descriptive link text

### 7. Security Best Practices

**Security.txt (public/.well-known/security.txt)**
```
Contact: mailto:info@evopra.com
Expires: 2026-12-31T23:59:59.000Z
Preferred-Languages: en, tr
```

## 🚀 Deployment Sonrası Yapılacaklar

### 1. Domain Ayarları

Domain `mealmatesapp.app` olarak tüm dosyalarda güncellenmiştir:

```typescript
// app/layout.tsx
metadataBase: new URL("https://mealmatesapp.app")

// app/sitemap.ts
const baseUrl = "https://mealmatesapp.app";

// public/robots.txt
Sitemap: https://mealmatesapp.app/sitemap.xml
```

### 2. Google Search Console

1. [Google Search Console](https://search.google.com/search-console)'a gidin
2. Property ekleyin (domain veya URL prefix)
3. Ownership verification için meta tag alın
4. `app/layout.tsx` içinde verification code'u ekleyin:

```typescript
verification: {
  google: "your-verification-code-here",
}
```

5. Sitemap submit edin: `https://your-domain.com/sitemap.xml`

### 3. Bing Webmaster Tools

1. [Bing Webmaster Tools](https://www.bing.com/webmasters)'a gidin
2. Site ekleyin
3. Verification tag alın
4. Layout.tsx'e ekleyin:

```typescript
verification: {
  google: "...",
  bing: "your-bing-verification-code",
}
```

### 4. Social Media Test

**Open Graph Debugger**
- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/

**Twitter Card Validator**
- Twitter: https://cards-dev.twitter.com/validator

Test edin ve önizleme kontrolü yapın.

### 5. Analytics Kurulumu

**Google Analytics 4**

1. Google Analytics hesabı oluşturun
2. Measurement ID alın (G-XXXXXXXXXX)
3. Script tag ekleyin:

```typescript
// app/layout.tsx içinde <head> kısmına
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 6. Performance Monitoring

**Core Web Vitals**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

Tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 7. Schema Markup Validation

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

Homepage JSON-LD'yi test edin.

### 8. Mobile-Friendly Test

- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

Responsive tasarımı doğrulayın.

## 📊 SEO Monitoring

### Takip Edilecek Metrikler

1. **Organic Traffic**: Google Analytics
2. **Search Impressions**: Google Search Console
3. **Click-Through Rate (CTR)**: Search Console
4. **Average Position**: Search Console
5. **Core Web Vitals**: Search Console
6. **Indexing Status**: Search Console

### Haftalık Kontrol

- [ ] Search Console hatalarını kontrol et
- [ ] Analytics trafik verilerini incele
- [ ] Conversion rate'i ölç (waitlist kayıtları)
- [ ] Top queries'i analiz et

### Aylık Kontrol

- [ ] Backlink profilini analiz et
- [ ] Competitors SEO stratejisini incele
- [ ] Content gap analizi yap
- [ ] Internal linking structure'ı optimize et

## 🎯 İleri Seviye SEO

### Blog Sistemi Ekleme

```bash
# Blog için gerekli route structure
app/
  blog/
    page.tsx          # Blog listing
    [slug]/
      page.tsx        # Individual blog post
    sitemap.ts        # Blog sitemap
```

### FAQ Schema Ekleme

```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Foody?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Foody is a recipe discovery app..."
    }
  }]
};
```

### Local SEO (Eğer fiziksel konum varsa)

```typescript
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Foody",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "...",
    "postalCode": "...",
    "addressCountry": "TR"
  }
};
```

## 🔍 Keyword Research

### Primary Keywords
- recipe app
- cooking app
- food recipes
- meal planning
- recipe finder

### Long-tail Keywords
- recipe app with ingredient search
- step by step cooking guide
- find recipes by ingredients
- cooking app for beginners
- meal planning app free

### Content Ideas
1. "10 Best Cooking Apps for 2025"
2. "How to Find Recipes Using Ingredients You Have"
3. "Meal Planning Made Easy with Foody"
4. "Step-by-Step Cooking Guide for Beginners"

## 📝 Checklist

Production'a çıkmadan önce:

- [ ] Domain URL'leri güncellendi
- [ ] Google Search Console kuruldu
- [ ] Sitemap submit edildi
- [ ] Analytics kuruldu
- [ ] Open Graph test edildi
- [ ] Mobile-friendly test yapıldı
- [ ] Page speed optimize edildi
- [ ] Schema markup validate edildi
- [ ] Social media previews kontrol edildi
- [ ] Security.txt güncel
- [ ] Robots.txt doğru
- [ ] HTTPS aktif
- [ ] SSL sertifikası geçerli

## 🆘 Sorun Giderme

### Sitemap gösterilmiyor
```bash
# Sitemap erişilebilir mi kontrol et
curl https://your-domain.com/sitemap.xml

# Robots.txt'i kontrol et
curl https://your-domain.com/robots.txt
```

### OG image yüklenmiyor
- Cache'i temizle
- Facebook/Twitter debugger kullan
- Image URL'in erişilebilir olduğunu kontrol et

### Search Console'da indexleme yok
- Sitemap submit ettiğinizden emin olun
- robots.txt'in Allow: / dediğini kontrol edin
- Meta robots noindex tag'i olmadığını kontrol edin

## 📚 Kaynaklar

- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev SEO](https://web.dev/learn/seo/)
- [Moz Beginner's Guide](https://moz.com/beginners-guide-to-seo)

---

**Son Güncelleme:** 2025-11-11
**Versiyon:** 1.0.0
