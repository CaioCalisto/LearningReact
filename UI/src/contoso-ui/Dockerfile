FROM node:13.12.0-alpine AS build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

FROM build AS test
CMD npm run test

CMD ["npm", "start"]