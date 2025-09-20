self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/report-images": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/report-images.js"
    ],
    "/report-images/[id]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/report-images/[id].js"
    ],
    "/report-images/create": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/report-images/create.js"
    ],
    "/reports": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/reports.js"
    ],
    "/reports/create": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/reports/create.js"
    ],
    "/signin": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/signin.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];