# Faith Ayooluwa Gbadero — Artist Portfolio MVP

A responsive, editorial-style portfolio website built with HTML, CSS and vanilla JavaScript.

## Media folders

The artwork collection and portfolio sections use optimized, display-sized WebP copies in `assets/images/optimized/`. Keep the original artwork files unchanged so the full-resolution images remain available. The Studio and Media sections are image-only; no video files are required.

## Contact flow

The contact form submits to FormSubmit's AJAX endpoint for `gbaderofaitha@gmail.com`. The message contains the client's name, email, inquiry type, selected artwork, and full message. FormSubmit delivers it directly to Faith's inbox and uses the client's email for replies.

## Deploy

Deploy the static site with GitHub Pages or another static hosting provider. Serve it over HTTPS for the contact form to work correctly; opening the files directly from `file://` does not support form submission.

The page also includes a Content Security Policy that restricts scripts and assets to this site, with explicit allowances for Google Fonts and FormSubmit. GitHub Pages does not support custom response headers, so the policy is delivered as a meta tag. This does not let the site set `X-Content-Type-Options` or `X-Frame-Options`, and `frame-ancestors` cannot be enforced from a meta policy. Those protections require a host or proxy that can set HTTP response headers.

# faith-portfolio
