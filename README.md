# Starter Rails App

## Introduction

I have been developing a lot of my web apps for my projects using ruby on rails. Whenever I start a new app, I run "rails new nameofapp" and find myself configuring the usual gems and the same settings that I use in every project that I do. Sometimes, I spend an unnecessary amount of time configuring the same settings because I make a stupid mistake or forget to include some dependencies. I wrote this starter rails app to speed things up whenever I start a new project. I'm sure this starter rails app is not for everyone but this guide might help you integrate some of the things used here to speed up your own development workflow. And if you don't have any experience of using rails, this guide will definitely get you up and running in no time.

This is a starter rails skeleton app configured with Angular, HTML Slim, Sass, and other things. I almost always use this kind of setup in all of my rails projects. Feel free to clone this and start your own project. Leave a star! :D

## Prerequisites

Let me go through what this starter rails app contains. I will also walk you through the things
I use in my development workflow.

### Tech Stack that I use

* Ruby 2.2.4
* Rails 4.1.9
* AngularJS 1.5.8
* Slim 3.0.7
* Sass 5.0.6
* PostgreSQL

### Why still Angular 1?

I am still trying to move from Angular 1 to Angular 2. After using Angular 1 for so many years, I have gotten very comfortable in using the framework. I have this silly mindset that Angular 2 is still fresh and might need more time to mature. Definitely though, we should all switch from Angular 1 to 2 soon.

### Why Slim?

Slim is a lightweight templating engine for HTML. With Slim, your html becomes so much readable than regular html and that speeds my development by a lot. With indentation instead of opening and closing tags, I write less code that just works. Writing html becomes so much easier.

## Some other things that I use

### Which text editor should I use?

I believe you should use whatever text editor you are most comfortable with. Most popular ones are Textmate, Sublime, or Notepad++. But if you're like me, I suggest that you use [Atom](http://atom.io). Great text editor made by the folks at Github.

If you are using Atom, use linters for syntax highlighting! I use ruby, js, and css linters to
help us write clean code. More on this at: [https://atom.io/packages/linter](https://atom.io/packages/linter)

### What OS should I use?

Since I am a Mac user, I recommend you to run a rails app in Mac OS X or in a Linux machine.
It will run fine in Windows, but there's going to be a lot more work setting it up. Read up
on other articles that will guide you to install a rails app in a Windows machine.

### Install Ruby

This is a Ruby on Rails application, so you will need Ruby installed if you don't have already.

I installed Ruby using [rvm](https://rvm.io). But I believe people nowadays are installing ruby
via rbenv. Read the rvm or rbenv guide on how to install yours.

### Install Homebrew as your package manager

**Optional and ONLY for OS X users. **

[Homebrew](http://brew.sh) is probably the best package manager for Mac OS. From their page, "Homebrew installs the stuff you need that Apple didn’t." Of course, this is optional, as you can definitely use
other package managers. The next steps in this doc will be more on talking about how to install things using brew.

### Install git

Of course, I use git for version control. You will need to install it, if you don't have it already in your machine.

And since I am using brew, it will be as simple as running this in your terminal:

    brew install git

### Install PostgreSQL

I use PostgreSQL as my database in rails. You will need to install it if you don't have it already.

Again, since I am using brew, here's how to do it:

    brew install postgres
    initdb /usr/local/var/postgres -E utf8
    cp /usr/local/Cellar/postgresql/9.3.4/homebrew.mxcl.postgresql.plist ~/Library/LaunchAgents/
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
    createuser -s -r postgres

If you already have Postgres but don't have `postgres` user and command above doesn't help try this:

    psql template1
    CREATE ROLE postgres LOGIN
    SUPERUSER INHERIT CREATEDB CREATEROLE REPLICATION;
    \q

If you run into problems, I'm sure people over [stackoverflow](http://stackoverflow.com) will help you get through to whatever problem you are facing.

## Setting up your Rails app

Awesome! Now that you have all the prerequisites installed, you are now ready to setup your rails app.

First, you will need to clone the repository from Github.

    git clone git@github.com:lifelofranco/rails-app.git
    cd rails-app
    git checkout master

If it asks you to install it to install Ruby 2.2.4, please install while in the rails-app directory.

Done? Now that you have a clone of the repo, we're probably ready to start setting up your rails app.

**The following instructions will assume you are inside the rails-app repository.**

First, we need to install all gems needed to run this rails app.

    bundle install

Next, we need to initialize our database.

    bundle exec rake db:create
    bundle exec rake db:migrate

At this point you are ready to run the server for your rails-app. You can do `bundle exec rails server`
or use Pow (which I recommend, read on the next section). You should see a "Hello World" when entering localhost:3000 in your favorite browser.

### Install Pow

Why? It becomes rather tedious to run the rails server every time you need to run the app. Instead, I use pow. Install pow in your machine [here](http://pow.cx).

After that, we need to tell pow to server our application.

    mkdir ~/.pow
    cd ~/.pow
    ln -s /path/to/rails-app ./rails-app

After this, you should be able to see the application running at `http://rails-app.dev`.

I also recommend that you should install the `powder` gem to control pow.
So, while in the rails-app repository:

    gem install powder

Now you can control pow, with the following commands:

    powder restart
    powder up
    powder down

See [https://github.com/rodreegez/powder](https://github.com/rodreegez/powder) for reference.

## Any questions?

Have trouble setting up your rails app? Anything that I missed? If you have any questions or concerns,
let me know at [@lifelofranco](https://github.com/lifelofranco).
