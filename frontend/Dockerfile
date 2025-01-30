FROM node:22.0.0 AS base
WORKDIR /app
ENV TZ=Asia/Tokyo
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml /app/

FROM base AS dev-package
RUN pnpm install --frozen-lockfile

FROM base AS production-package
RUN pnpm install --frozen-lockfile --production

FROM base AS build
COPY . /app
COPY --from=dev-package /app/node_modules /app/node_modules
RUN printenv > .env.production
RUN pnpm build

FROM dev-package AS development
COPY . /app/
CMD ["pnpm", "dev"]

FROM node:22.0.0-slim AS production
WORKDIR /app
ENV TZ=Asia/Tokyo
RUN npm install -g pnpm
COPY --from=production-package /app/node_modules /app/node_modules
COPY package.json pnpm-lock.yaml next.config.ts /app/
COPY --from=build /app/.next /app/.next
COPY --from=build /app/.env.production /app/.env.production
CMD ["pnpm", "start"]