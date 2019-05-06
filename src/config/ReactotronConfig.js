import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

// para funcionar apenas em ambiente de desenvolvimento e passado o plugin do redux
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect()

  console.tron = tron
  tron.clear()
}
