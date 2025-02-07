# syntax=docker/dockerfile:1

FROM node:18-alpine AS build

WORKDIR /app

# Copy package*.json and package-lock.json (if available)
COPY package*.json ./

# # Install dependencies
# RUN npm install

# Copy the rest of the application code
COPY . .

# # Generate Prisma Client
# RUN npx prisma generate

# Create a separate stage for the runtime image
FROM node:18-alpine AS runtime

WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/src ./src 

# Expose the port your application will listen on (if applicable)
EXPOSE 3000

# Start the application
CMD ["node", "src/app.js"]