# Web Security Lab - jsonbin

## Setup

1. Install MongoDB with the instructions here: https://docs.mongodb.com/manual/administration/install-community/
2. Install Node.js if you haven't done so.
3. `cd` into the folder `jsonbin`. Then `npm install`.
4. Use your GitHub account to creat an OAuth App, or ask a TA or CA to get one for you.
5. Create a new client secret in your OAuth App. Don't leave the webpage.
6. Copy the `example.env` as `.dev.env` in the same folder. **Note that it will hide in Unix-like systems. You need to know how to find it in the next step.**
7. Open your `.dev.env` file. Copy your OAuth App Client ID and Client secret to the corresponding lines.
8. Put your MongoDB URL and your host URL there. **Be sure to exclude the last `/` in your HOST.** Typically your `.dev.env` should be (OAuth App Client ID and Client secret hidden here):
```
MONGO_URL=mongodb://127.0.0.1:27017
HOST=http://localhost:8000

# github tokens for signin
GITHUB_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
GITHUB_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_CALLBACK=http://localhost:8000/_/auth/github/callback
```
9.  Run `NODE_ENV=dev PORT=8000 npm run start`

## Expreriment

The homepage of this website shows how to create, delete, read and update objects in the database. You must inlude your apikey, or the autorization token, in your request's header. For example, to add a new object:
```
curl -X POST http://localhost:8000/your_username/obj_name \
     -H 'authorization: token xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
     -d '{ foo: "bar" }'
```
To modify an object:

```
curl -X PATCH http://localhost:8000/your_username/obj_name \
     -H 'authorization: token xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
     -d '{ foo: "baz" }'
```

Your task is to discover how to pollute the prototype chain and what consequences it leads to.
