module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "@/assets/scss/mixins.scss";
          `,
      },
    },
  },
};
