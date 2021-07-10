FROM node
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
RUN npm install --quiet
RUN npm install nodemon -g --quiet
RUN npm install typescript -g --quiet
RUN npm install express --quiet
RUN npm install ts-node --quiet
COPY . .
EXPOSE 8000
CMD npm run dev
# CMD nodemon -L --watch . app.js
