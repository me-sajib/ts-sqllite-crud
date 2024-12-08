
# Node version
FROM node:20

# Make work directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
COPY tsconfig.json ./
COPY . ./

# NPM install & build
RUN npm install
RUN npm run build

# PORT define
EXPOSE 5000

# Set ENV variables
ENV PORT=5000

# Open CMD & execute command
CMD [ "npm", "start"]