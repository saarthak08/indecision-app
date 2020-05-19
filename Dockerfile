
FROM node:alpine

WORKDIR /indecision-app
 
COPY . ./

RUN yarn

EXPOSE 8080

CMD ["yarn","dev"]