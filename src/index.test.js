const tailwind = require("tailwindcss");
const postcss = require("postcss");
const zIndexMapPlugin = require(".");

const css = String.raw;

function run(config, plugin = tailwind) {
  config = {
    ...{ plugins: [zIndexMapPlugin], corePlugins: { preflight: false } },
    ...config,
  };

  return postcss(plugin(config)).process("@tailwind utilities", {
    from: undefined,
  });
}

test("generating z-index classes from the z-index map", async () => {
  const config = {
    purge: {
      enabled: true,
      content: [{ raw: "z-map-background z-map-sidebar z-map-modal" }],
    },
    theme: {
      zIndexMap: [
        "background",
        "sidebar",
        "sidebar-popup",
        "modal-background",
        "modal",
      ],
    },
  };

  return run(config).then((result) => {
    expect(result.css).toMatchFormattedCss(
      css`
        .z-map-background {
          z-index: 1;
        }
        .z-map-sidebar {
          z-index: 2;
        }
      `
    );

    expect(result.css).toMatchFormattedCss(
      css`
        .z-map-modal {
          z-index: 5;
        }
      `
    );
  });
});
