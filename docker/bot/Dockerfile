FROM node:14-alpine
LABEL name "Clockify Discord BOT"
LABEL version "1.0.0"

WORKDIR /usr/ckBOT

RUN apk add --update \
    && apk add --no-cache --virtual .build-deps curl
RUN curl -L https://unpkg.com/@pnpm/self-installer | node && apk del .build-deps

COPY tsconfig.json package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages packages/
COPY services/bot/tsconfig.json services/bot/package.json services/bot/
ENV NODE_ENV="development"

RUN pnpm i --r
ENV NODE_ENV="production"
COPY services/bot/src/ services/bot/src/
RUN pnpm run build && pnpm prune --prod

CMD [ "node", "./services/bot/dist/index.js"]
