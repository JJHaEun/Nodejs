FROM node:18

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/

RUN yarn install

COPY . /myfolder

CMD ["yarn", "start:dev"]
