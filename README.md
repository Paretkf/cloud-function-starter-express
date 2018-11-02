# Firebase Cloud Function Starter :star:
Starter project for create restAPI with firebase cloud function and firebase Realtime Database(RDB).

## Node Version
```
node -v
v10.9.0
```
## Dependencies
* [**body-parser**](https://github.com/expressjs/body-parser)  parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [**cors**](https://github.com/expressjs/cors) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [**express**](https://github.com/expressjs/express) create restAPI. 
* [**firebase-admin**](https://github.com/firebase/firebase-admin-node) provides the tools and infrastructure you need to develop your app with admin.
* [**firebase-functions**](https://github.com/firebase/firebase-functions) package provides an SDK for defining Cloud Functions for Firebase.

## Structure
* **config** configulation file, example express firebase cors etc.
* **core** business logic fuction for api.
* **utils** utility functtion.
* **index.js** exporting and route for function.

## Installation
**1. Set up Node.js and the Firebase CLI** 
install **firebase-tools** to deploy functions to the Cloud Functions runtime.
```
npm install -g firebase-tools
```

**2. Login Firebase** 
to login via the browser and authenticate the firebase tool.
```
firebase login
```


**3. Initialize Firebase SDK for Cloud Functions** 
to create dependencies for your project. **You can run!**

```
firebase init functions
```
![](./img/example1.png)

## Build run and deploy!
**1. Change Directory to functions folder**
```
cd functions
```

**2. Build and Run in local** develop in local server running on port 5000.
```
npm run serve
```
example.
```
http://localhost:5000/<project-name>/<firebase-server>/helloWorld
```
**3. Deploy** function to firebase.
```
npm run deploy
```