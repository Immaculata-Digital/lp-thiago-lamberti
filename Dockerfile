# Dockerfile para LP Thiago Lamberti (Next.js Static)
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Stage de produção com Nginx
FROM nginx:alpine

# Copiar arquivos buildados (do diretório 'out' gerado pelo next export)
COPY --from=builder /app/out /usr/share/nginx/html

# Copiar configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
