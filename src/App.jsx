import { SnackbarProvider } from 'notistack'
import './App.css'
import { AppRouter } from './routes/AppRouter'

function App () {
    return (
        <SnackbarProvider maxSnack={3}>
            <AppRouter />
        </SnackbarProvider>
    )
}

export default App
