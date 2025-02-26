FROM oven/bun:1.2.4-debian

LABEL org.opencontainers.image.authors="ronn.angelo.lee@gmail.com"

WORKDIR /app
COPY . /app

RUN bun install

ENTRYPOINT ["bun"]
CMD ["run", "dev"]
