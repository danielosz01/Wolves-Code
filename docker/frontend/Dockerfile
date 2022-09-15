FROM node:15.14.0-alpine3.10
WORKDIR /app/frontend
COPY ./frontend/package.json /app/frontend/
COPY ./frontend/package-lock.json /app/frontend/
RUN npm install -g npm@7.9.0
RUN npm install
COPY ./frontend /app/frontend/

