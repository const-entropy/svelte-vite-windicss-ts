import "virtual:windi.css";
import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
/*eslint semi: ["error", "always"]*/
// if (import.meta.hot) {
//     import.meta.hot.accept();
//     import.meta.hot.dispose(() => {
//         app.$destroy();
//     });
// }
