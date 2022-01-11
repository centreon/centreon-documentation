# How to build the documentation locally

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Prerequisites

1. Install **yarn**. On Windows: https://classic.yarnpkg.com/latest.msi

2. Install **node.js** (version 14 minimum): https://nodejs.org/en/download/

3. Clone the repository :

   ```
   git clone https://github.com/centreon/centreon-documentation.git
   ```

4. If you need, check out the branch you want:

   ```
   git checkout <name_of_branch>
   ```

4. Install dependencies:
   ```
   yarn
   ```

## Building the documentation website

* Build the EN or FR version of the site (faster)

   * EN: ```yarn start```
   * FR: ```yarn start --locale=fr```

   The website opens in your brower at the following address: http://localhost:3000/. Most changes are reflected live without having to restart the server.

* If you really need to build the whole website, use the following command (but be aware it takes a long time to build):

   ```
   yarn build
   ```
    Then use the `npm run serve` command to test open the website in your browser.