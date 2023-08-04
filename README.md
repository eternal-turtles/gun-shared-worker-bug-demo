# gun-shared-worker-bug-demo

Start the server: `deno run --allow-all server.ts`.

Inspecting the worker logs reveals a stack trace:

```
Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!
shared.worker.js:7 GUN ƒ Gun(o){
			if(o instanceof Gun){ return (this._ = {$: this}).$ }
			if(!(this instanceof Gun)){ return new Gun(o) }
			return Gun.create(this._ = {$: this, opt: o});
		}
shared.worker.js:9 Uncaught DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope': The script at 'https://cdn.jsdelivr.net/npm/gun@0.2020.1239/sea.js' failed to load.
    at http://localhost:8000/shared.worker.js:9:6
```

See:

* https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts
