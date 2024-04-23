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
    5: '#3d3d3d',
    10: '#2C2C2C',
    20: '#202020',
    30: '#1A1A1A',
  },
  text: {
    10: '#ffffff',  //secondary
    20: '#f5f5f5', //ternary
    30: '#BBBBBB', //quaternary
  },
  success: {
    50: '#43e5a0',
    60: '#1acd81',
    70: '#0fa968',
  },
  warning: {
    50: '#f5cc00',
    60: '#ffb60a',
    70: '#e28900',
  },
  danger: {
    50: '#fd3636',
    60: '#EB1616',
    70: '#c60f0f',
  },
  info: {
    50: '#0aa1ff',
    60: '#0078d4',
    70: '#005fab',
  },
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
