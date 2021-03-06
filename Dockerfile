# Dockerfile to build database
FROM node:8

WORKDIR /usr/src/app

# Deal with dependencies first to improve docker caching
COPY package*.json ./
RUN npm install

# Run the build defined in package.json
CMD ["npm", "run", "build"]
