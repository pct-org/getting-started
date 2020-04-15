#!/bin/sh
set -e

echo "Installing essential tools..."

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"

wget -qO - https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add -
echo "deb https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt-get update

sudo apt-get install -y \
  git \
  mongodb-org

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn

echo "Create directory..."
sudo mkdir -p /pct-org

sudo chmod -R 7777 /pct-org

cd /pct-org

# Remove getting started to be sure
rm -rf ./getting-started

echo "Cloning repo"
ssh-keyscan github.com >> ~/.ssh/known_hosts
git clone --recurse-submodules https://github.com/pct-org/getting-started.git

cd getting-started
nvm install
nvm use

yarn install
yarn setup
