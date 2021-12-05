# tailwindcss-z-index-map

tailwindcss-z-index-map is currently only tested with v3 of TailwindCSS.

A plugin for TailwindCSS that grants the ability to configure a set of `z-map` utility classes that remove the need for magical z-index numbers. Instead, define an array of classes in your Tailwind config in order from smaller z-index to larger.

## Installation

Install the plugin from npm.

```
# Using npm
npm install tailwindcss-z-index-map

# Using yarn
yarn add tailwindcss-z-index-map
```

Then add the plugin to your tailwind.config.js file. Define your z-index map in the `theme` object.

```js
// tailwind.config.js
module.exports = {
  theme: {
    zIndexMap: ["lowest-item", "middle-item", "highest-item"],
  },
  plugins: [require("tailwidcss-z-index-map")],
};
```

This will result in the following utility classes being generated:

```css
.z-map-lowest-item {
  z-index: 1;
}

.z-map-middle-item {
  z-index: 2;
}

.z-map-highest-item {
  z-index: 3;
}
```

If you were to add another item in the middle of the map in the future, `.z-map-highest-item` would increase to a z-index of 4.
