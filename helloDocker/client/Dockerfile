FROM node:10.13-alpine
# ENV NODE_ENV production
WORKDIR /usr/src/app
# RUN npm install --production --silent && mv node_modules ../
# RUN npm install react-scripts@3.0.1 -g --silent
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# COPY . .
COPY build ./build

RUN ls -l
# RUN npm install
# Install and configure `serve`.
RUN npm install -g serve
# EXPOSE 5000

# CMD npm start
CMD serve -s build  -l 3000 

