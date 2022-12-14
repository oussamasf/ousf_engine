FROM node:16-bullseye-slim 

RUN apt-get update \
  && apt-get install -y \
  nmap \
  tree \
  vim

COPY package.json ./ 
COPY .env ./

RUN yarn install 
RUN yarn global add pm2 

COPY . /


EXPOSE 5050 

CMD ["pm2-runtime","ecosystem.config.js"]
