FROM node:16-bullseye-slim 

COPY package.json ./ 
COPY .env ./

RUN yarn install 
RUN yarn global add nodemon 

COPY . /


EXPOSE 5050 

CMD ["nodemon" ,"index.js"]
