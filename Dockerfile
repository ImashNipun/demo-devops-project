FROM node:current-alpine
COPY . /app
WORKDIR /app
RUN npm install .
CMD ["node","./src/index.js"]