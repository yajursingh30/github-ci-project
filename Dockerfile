
# Use Node.js 24 Alpine as the base image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy application files
COPY server.js ./
COPY public ./public

# Set application environment
ENV NODE_ENV=production

# Set application version
ARG APP_VERSION=local
ENV APP_VERSION=$APP_VERSION

# Use non-root user
USER node

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
