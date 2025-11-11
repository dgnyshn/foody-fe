# Foody - Recipe Discovery Landing Page

A modern, SEO-optimized landing page for the Foody recipe app with waitlist functionality and contact form.

## 🚀 Features

- ✅ Waitlist integration with Router.so
- 📧 Contact form with email delivery (Resend)
- 🎨 Modern UI with Tailwind CSS v4
- 📱 Fully responsive design
- 🔍 SEO optimized with metadata, structured data, and sitemap
- 🐳 Docker production ready
- 🔒 Legal pages (Privacy Policy, Terms of Service)

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Resend API
- **Waitlist:** Router.so API
- **Deployment:** Docker

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Add your API keys to .env.local
# - ROUTER_API_KEY
# - ROUTER_ENDPOINT_ID
# - RESEND_API_KEY
```

## 🔑 Environment Variables

Create a `.env.local` file with the following:

```bash
# Router.so (Waitlist)
ROUTER_API_KEY=your_router_api_key
ROUTER_ENDPOINT_ID=your_endpoint_id

# Resend (Contact Form)
RESEND_API_KEY=your_resend_api_key
```

## 🚀 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🐳 Docker Deployment

See [DOCKER.md](./DOCKER.md) for detailed Docker deployment instructions.

```bash
# Build and run with Docker Compose
docker-compose up -d

# Access at http://localhost:3001
```

## 📊 SEO Optimizations

This landing page includes comprehensive SEO features:

### ✅ Metadata & Tags
- Title, description, and keywords optimized for search engines
- Open Graph tags for social media sharing
- Twitter Card support
- Canonical URLs
- Robots meta tags

### ✅ Structured Data (JSON-LD)
- SoftwareApplication schema on homepage
- WebApplication schema in layout
- Proper organization and ratings markup

### ✅ Technical SEO
- `sitemap.xml` - Auto-generated dynamic sitemap
- `robots.txt` - Search engine crawler instructions
- Semantic HTML structure with proper heading hierarchy
- Image optimization with Next.js Image component
- Compression and performance optimization

### ✅ Security
- `.well-known/security.txt` for responsible disclosure
- Removed `X-Powered-By` header
- Environment variable protection

### 📍 SEO Checklist

- [x] Meta title and description on all pages
- [x] Open Graph and Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Mobile-friendly responsive design
- [x] Fast page load times
- [x] Semantic HTML (h1, h2, etc.)
- [x] Alt text for images
- [x] Security.txt file

## 📝 Pages

- `/` - Homepage with waitlist
- `/contact` - Contact form
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## 🔧 Configuration

Update these values in your code:

1. **Domain URL** - Already configured to `mealmatesapp.app` in:
   - `app/layout.tsx` (metadataBase)
   - `app/sitemap.ts` (baseUrl)
   - `public/robots.txt` (Sitemap URL)

2. **Google Search Console** - Add verification code in `app/layout.tsx`:
   ```typescript
   verification: {
     google: "your-google-verification-code",
   }
   ```

3. **Social Media** - Update Twitter handle in `app/layout.tsx`:
   ```typescript
   twitter: {
     creator: "@your_twitter_handle",
   }
   ```

## 📧 Email Configuration

Contact form emails are sent to `info@evopra.com` using Resend.

1. Verify your domain at [resend.com/domains](https://resend.com/domains)
2. Update `from` email in `app/api/contact/route.ts` to use your domain
3. Test the contact form

## 🎯 Next Steps for SEO

After deployment:

1. **Submit sitemap to search engines:**
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

2. **Verify domain ownership:**
   - Add verification meta tag from Google Search Console
   - Update `verification.google` in layout.tsx

3. **Monitor performance:**
   - Google Analytics integration
   - Google Search Console monitoring
   - Core Web Vitals tracking

4. **Create a blog** (optional):
   - Add `/blog` section for content marketing
   - Publish recipe-related articles for organic traffic

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support, email info@evopra.com
