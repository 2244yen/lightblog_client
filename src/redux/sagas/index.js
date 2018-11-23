import * as userSaga from './user'
import * as articleSaga from './article'

const sagas = {
  ...articleSaga,
  ...userSaga
}

export function registerWithMiddleware(middleware: { run: Function }) {
  for (let name in sagas) {
    middleware.run(sagas[name])
  }
}