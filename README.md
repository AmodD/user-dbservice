# user-dbservice

##### Table of Contents  
+ [Introduction](#introduction) 
+ [Prerequisite](#prerequisite) 
+ [Output](#output) 
+ [Dependancy](#dependancy)
+ [Getting the code](#getting_the_code)
+ [How To Run](#how_to_run)
+ [How To Access](#how_to_access)


<a name="introduction"/>

## Introduction
This is a web service to interact with the system user database. All end users trying to access Fortiate's suite of products reside in the system user db.To interact with the system user db , the user-dbservice gives an API for other applications who want to create or verify users of the system.

<a name="prerequiste"/> 

## Prerequisite
versions of the following platforms
* NodeJS **> 10.15.0**
* npm (node package manager) **> 6.8.0**

> check your version of nodejs
```
node --version
```

> check your version of npm
```
npm --version
```

> Installation Steps for nodejs & npm
- Goto <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
- Download the LTS version
- Follow steps given by the nodejs installer to install nodejs
- Along with *node* command now you will have *npm* command installed as well 


<a name="output"/>

## Output
The output of login-ui application is JSON formatted data. 


<a name="dependancy"/>

## Dependancy
Need to have following in project root i.e. projects/fortiate/build/workspaces/nodejs/user-dbservice
+ system_user_db.sqlite

<a name="getting_the_code"/>

## Getting the Code

> first timers
```
cd projects/fortiate/build/workspaces/nodejs
git clone git@github.com:fortiate/user-dbservice.git
```

> updating user-dbservice
```
cd projects/fortiate/build/workspaces/nodejs/user-dbservice
git pull
```


<a name="how_to_start"/>

## How to run

> starting user-dbservice
```
cd projects/fortiate/build/workspaces/nodejs/user-dbservice
npm install
node app
```


<a name="how_to_access"/>

## How to access

TODO : swagerizing user-dbservice
