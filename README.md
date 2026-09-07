# NOVA — AI Productivity Platform

A polished, responsive company landing page for the NOVA fictional AI productivity platform, built with Django templates, semantic HTML, modern CSS, and vanilla JavaScript.

## Features

- Responsive navigation with mobile hamburger menu
- Hero dashboard composition and trusted-by logo strip
- Six reusable product feature cards
- Product story, solutions, workflow steps, and impact statistics
- Animated stats and scroll reveal transitions
- Testimonial carousel
- Monthly / annual pricing toggle with three plans
- FAQ accordion with accessible native `details` elements
- Demo modal, light / dark theme toggle, newsletter validation, and back-to-top button
- Responsive layouts for desktop, tablet, and mobile

## Technology

- Python 3.10+
- Django 5
- HTML5, CSS3, vanilla JavaScript
- Google Fonts: Manrope and DM Mono

## Run locally

```bash
python -m venv venv
# Windows PowerShell
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py runserver
```

Open http://127.0.0.1:8000/ in your browser.

> Important: do not open `templates/index.html` directly with Live Server or the VS Code HTML preview. It is a Django template, so `{% static %}` paths are resolved only when Django renders the page. In VS Code, press `F5` and select `NOVA Django Server`, then open `http://127.0.0.1:8000/`.

## Project structure

- `nova_project/` — Django configuration and WSGI/ASGI entry points
- `landing/` — landing page app and view
- `templates/index.html` — semantic page structure and content
- `static/css/style.css` — responsive design system and component styles
- `static/js/main.js` — page interactions and animation behavior

## AI tools used

GitHub Copilot was used to assist with ideation, implementation, and code review. All code is organized and understandable for manual review.

## Deployment

This Django project can be deployed to Render, Railway, Fly.io, or any Python-compatible hosting provider. Set `DEBUG=False`, use an environment variable for `SECRET_KEY`, configure `ALLOWED_HOSTS`, and run `collectstatic` for production.
