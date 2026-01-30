## Partnr Documentation Portal
A high-performance, multi-language documentation site built with Next.js 15, featuring ISR, i18n, and Docker containerization.

## Quick Start
## Environment Setup

Bash

cp .env.example .env
## Launch with Docker

Bash

docker-compose up --build
## Access Points

* Documentation: http://localhost:3000/en/docs/v1/introduction

* API Reference: http://localhost:3000/en/api-reference

## Features
Internationalization (i18n): Full support for English (en), Spanish (es), French (fr), and German (de).

* Versioning: Documentation versions v1, v2, and v3 supported via dynamic URL structure.

* ISR: Pages revalidate every 60 seconds to ensure content freshness without sacrificing performance.

* Search: Client-side full-text search with results and no-results states.

* Interactive UI: Includes Theme Toggling (Dark/Light), Table of Contents, and Feedback Widget.

## Docker Configuration
The application is fully containerized. The docker-compose.yml includes a mandatory healthcheck to ensure service availability before the portal is marked as Ready.

## Testing Attributes
All components are tagged with specific data-testid attributes for automated evaluation:

sidebar

search-input

version-selector

theme-toggle

table-of-contents

language-switcher

feedback-input

## Content Structure
Markdown files are organized by language and version:

_docs/[locale]/[version]/[slug].md