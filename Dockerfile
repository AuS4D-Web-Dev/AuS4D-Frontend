# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install deps (cached layer)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lsockfile

# Copy source and build
COPY . .
RUN pnpm run build

# ---- Serve stage ----
FROM nginx:alpine
# Serve the built files
COPY --from=build /app/dist /usr/share/nginx/html

# Make Nginx listen on 8080 (Cloud Run uses 8080)
RUN sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
