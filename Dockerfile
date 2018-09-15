FROM node:alpine
# Create app directory
RUN mkdir -p /app
WORKDIR /app
# Install app dependencies
COPY package.json /app/
RUN yarn install
# Bundle app source
COPY . /app
RUN yarn run build
EXPOSE 3000
CMD [ "node", "./server" ]