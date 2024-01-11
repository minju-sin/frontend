import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KakaoLogin from './components/kakaoLogin'; // Login 컴포넌트를 import

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KakaoLogin />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;