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

This challenges have three vulnerabilities: OS command injection, prototype pollution and path traversal. Your task is to find out what you can do with these vulnerabilities.
