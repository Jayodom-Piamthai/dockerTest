FROM prisma/prisma:4

WORKDIR /app

COPY prisma ./prisma

CMD ["prisma", "generate"]