FROM node
# LABEL author="Joycelyn Lui"

RUN mkdir /app
WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]