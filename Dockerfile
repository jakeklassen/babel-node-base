FROM mhart/alpine-node:10.15.0 AS build

RUN apk add --update --no-cache \
  python \
  make \
  g++

ENV DIR=/app
WORKDIR $DIR

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn
# Bundle app source
COPY . .
RUN yarn build
RUN yarn --production

# Continue from build stage
FROM mhart/alpine-node:10.15.0

ENV PORT=3000
EXPOSE $PORT

ENV DIR=/app
WORKDIR $DIR

COPY --from=build $DIR/package.json package.json
COPY --from=build $DIR/yarn.lock yarn.lock
COPY --from=build $DIR/node_modules node_modules
COPY --from=build $DIR/dist dist

CMD ["yarn", "production"]
