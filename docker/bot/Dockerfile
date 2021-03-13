FROM node:14-alpine
LABEL name "Clockify Discord BOT"
LABEL version "0.0.1"

WORKDIR /usr/ckBOT

RUN apk add --update && apk add --no-cache --virtual .build-deps curl
RUN curl -L https://unpkg.com/@pnpm/self-installer | node && apk del .build-deps

COPY tsconfig.base.json package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY services/bot/package.json services/bot/
RUN pnpm i --r
ENV NODE_ENV="production"

COPY knexfile.js  ./
COPY migrations ./migrations
COPY services/bot ./services/bot/
RUN pnpm run build && pnpm prune --prod

CMD [ "pnpm", "run", "start:bot:prod"]
