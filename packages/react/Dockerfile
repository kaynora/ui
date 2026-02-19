FROM node:20-slim

WORKDIR /app
COPY package.json package-lock.json ./
COPY apps/docs/package.json ./apps/docs/package.json
COPY packages/react/package.json ./packages/react/package.json
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build --workspace=apps/docs

EXPOSE 3000
CMD ["npm", "run", "start", "--workspace=apps/docs"]
