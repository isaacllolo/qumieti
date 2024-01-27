
module.exports = {
  root: "/",

  build: {
    command: "npm run build",
    outputPath: "./dist",
  },

  deploy: {
    startCommand: "npm serve dist -s -n -p $PORT",
    outputDir: "./dist",
    root: "/",
     
  },
};
