import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PublicPage from './pages/public/PublicPage';
import LoginPage from './pages/admin/LoginPage';
import AdminPage from './pages/admin/AdminPage';
import GlobalStyle from './components/GlobalStyle';
import PrivateRoute from './components/PrivateRoute';
import AuthRedirect from './components/AuthRedirect';
import NotFoundPage from './pages/NotFoundPage';


const theme = {
  primary: {
    40: '#ff6666',
    50: '#fd3636',
    60: '#EB1616',
    70: '#c60f0f',
    80: '#a31111',
  },
  background: {
    10: '#2C2C2C',
    20: '#202020',
  },
  text: {
    10: '#ffffff',  //secondary
    20: '#f5f5f5', //ternary
    30: '#BBBBBB', //quaternary
  }
}

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<PublicPage/>} />
          <Route path="/login" element={
            <AuthRedirect>
              <LoginPage/>
            </AuthRedirect>
          } />
          <Route path="/admin/*" element={
            <PrivateRoute>
              <AdminPage/>
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router>   
    </ThemeProvider>
  );
}

export default App;
