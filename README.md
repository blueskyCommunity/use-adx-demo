# Goal: build on top of ADX

So if we want to build on ADX, we need first to be able to use it as a dependency in a project.

Next we will try to use it as a proper npm package

To try to do this, install this repo locally and install [https://github.com/bluesky-social/adx](https://github.com/bluesky-social/adx) in the same folder

.

## Steps for development Setup

**Step 1:** If windows User setup WSL, for reference follow:  https://docs.microsoft.com/en-us/windows/wsl/install

**Step 2:** Clone ADX Repo in the same Folder by https://github.com/bluesky-social/adx.git
```
cd adx
yarn
yarn build
cd ..
```

Step 3: Goto to 'node' folder and use
```
cd node
npm install
npm start
cd ..
```

**Step 4:** Goto to 'frontend' folder and use
```
cd frontend
npm install
npm run dev
```

**Step 5:** Initiate the user using Frontend on localhost:3000

Input Fields:
>> server: http://localhost:2583 (or at port 2584)
>> username: test (whatever username you want)



**Step 6:** Initiate another user using ADX cli by changing repo path.
```
export ADX_REPO_PATH="~/.adx-alice"
yarn cli init
```

**Step 7:** Refer Adx sample commands to post, follow, unfollow the user.


## Images of Frontend UI

### Initiation

![Initiation](./images//Initiation.PNG?raw=true "Initiation")

### Dashboard

![Dashboard](./images//Dashboard.PNG?raw=true "Dashboard")

### followers

![followers](./images//followers.PNG?raw=true "followers")

### Follows

![Follows](./images//Follows.PNG?raw=true "Follows")
