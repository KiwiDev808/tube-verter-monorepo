/* istanbul ignore next */
import { app } from './app';

const PORT = process.env.PORT || 3001;

async function startApp() {
  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });
}

startApp();
