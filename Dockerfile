# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Prefer corepack to install pnpm reliably
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only files needed to install deps (best for caching)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy app sources and build
# (adjust paths if you have different folders)
COPY . .
RUN pnpm run build

# ---- Serve stage ----
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Make Nginx listen on 8080 (Cloud Run default)
RUN sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
