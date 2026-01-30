## DocsPortal: Multilingual Documentation System
This project is a high-performance documentation portal built with Next.js 15+, Docker, and next-intl. It dynamically renders Markdown content from a structured file system, supporting multiple versions and languages.

##  Getting Started
1. Prerequisites
Docker Desktop (with at least 4GB RAM allocated in Settings > Resources).

Node.js 20+ (for local development).

2. Installation & Build
To build and run the portal inside a Docker container:

PowerShell
# Build with fresh cache to ensure all .md files are synced
docker-compose build --no-cache

# Start the container
docker-compose up -d
3. Access the Portal
URL: http://localhost:3000/en/docs/v1/introduction

Languages: Switch between en, es, fr, and de via the header buttons.

## Tech Stack & Key Features
Framework: Next.js 15+ (App Router) with Turbopack support.

Internationalization: next-intl for seamless locale switching.

Content: next-mdx-remote/rsc for server-side Markdown rendering.

Deployment: Optimized node:20-slim Docker image.

Navigation: A dynamic Sidebar that automatically scans the Docs folder to create buttons for every .md file.
