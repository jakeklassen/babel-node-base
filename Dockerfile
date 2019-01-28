FROM mhart/alpine-node:10.15.0 AS build

RUN apk add --update --no-cache \
  git \
  python \
  make \
  g++

ENV DIR=/app
WORKDIR $DIR

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn
# Bundle app source
COPY . .
RUN yarn build
RUN yarn --production

# Continue from build stage
FROM mhart/alpine-node:10.15.0

ENV DIR=/app
WORKDIR $DIR

COPY --from=build $DIR/package.json package.json
COPY --from=build $DIR/yarn.lock yarn.lock
COPY --from=build $DIR/node_modules node_modules
COPY --from=build $DIR/dist dist

ENV PORT=3000
EXPOSE $PORT

CMD ["yarn", "production"]
