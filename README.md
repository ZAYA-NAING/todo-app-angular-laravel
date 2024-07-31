# Local Environment Preparation for project

## Install Application

### For Windows

- Install Git [Here](https://git-scm.com/downloads)
- Install nvm [Here](https://github.com/coreybutler/nvm-windows/releases)

    ```bash
     nvm version
    ```

  If you cannot confirm the version, you need to restart your PC.
- Install nodejs

    ```bash
     nvm install 20.11.1
     nvm use 20.11.1
    ```

- Install @angular/cli

    ```bash
     npm install -g @angular/cli
    ```

- Install XAMPP (version - 8.1 / PHP 8.1) [Here](https://www.apachefriends.org/jp/download.html)

### For Mac OS

- Install brew [Here](https://brew.sh/)

 ```bash
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
 ```

- Install Git [Here](https://git-scm.com/download/mac)

```bash
brew install git
```

- Install nvm [Here](https://github.com/coreybutler/nvm-windows/releases)

```bash
brew uninstall --ignore-dependencies node 
brew uninstall --force node
brew update
brew install nvm 
mkdir ~/.nvm
vim ~/.bash_profile or ~/.zshrc


export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && \. "/usr/local/opt/nvm/etc/bash_completion"

Press ESC + :wq to save and close your file.

source ~/.bash_profile  # or source ~/.zshrc 

```

- Install nodejs

    ```bash
     nvm install 20.11.1
     nvm use 20.11.1
    ```

- Install @angular/cli

    ```bash
     npm install -g @angular/cli
    ```

- Install php

    ```bash
     brew install php@8.1
    ```

- Install composer

    ```bash
     https://getcomposer.org/download/
    ```

## Clone Project

Please clone with one of the following two methods.

- Clone With SSH

    ```bash
     git clone git@github.com:ZAYA-NAING/todo-app-angular-laravel.git
    ```

- Clone With HTTPS

    ```bash
    git clone https://github.com/ZAYA-NAING/todo-app-angular-laravel.git
    ```

## Build a local development environment

### Backend

#### For XAMPP

- Open Apache & MySQL
  - XAMPP Control Panel > Apache Start
  - XAMPP Control Panel > MySQL Start
    - Admin (<http://localhost/phpmyadmin/>)
      - New -> Create database -> Fill `todo` in database name field -> Create
- Install

    ```bash
    # Go to {project}/backend
    cd ./backend
  
    # Create .env
    cp .env.local .env
  
    # Install composer and execute migration
    composer install && php artisan migrate:fresh --seed
  
    # Serve (http://localhost:8080/)
    php artisan serve --port=8080

```

#### For Docker

- Download Docker Desktop [Here](https://www.docker.com/products/docker-desktop/)

```bash
    # Go to {project}/backend
    cd ./backend
    # Copy .env-local to .env
    cp .env-local .env
```

- Install Dependencies

```bash
composer update --prefer-dist
php artisan sail:install --devContainer
./vendor/bin/sail build
./vender/bin/sail up -d

./vender/bin/sail artisan migrate:fresh --seed

# Serve (http://localhost:8000/)
    php artisan serve
```

### Frontend

- Install

    ```bash
    # Go to {project}/frontend
    cd ./frontend
    
    # Install node modules
    npm ci
    
    # Serve (http://localhost:4200/)
    npm start

    # proxy server for development
    ./frontend/src/proxy.conf.js 

    module.exports = [
        {
            context: ['/api'],
            target: 'http://localhost:8000',
            secure: false,
        },
  ];
    ```
