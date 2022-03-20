import { Header } from "./components/Header";
import { SearchSection } from "./components/SearchSection";
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components'
import themes from "./styles/themes";
import { DownloadSection } from "./components/DownloadSection";


function App() {
  return (
    <ThemeProvider theme={themes}>
    <>
    <GlobalStyle/>
      <Header/>
      <SearchSection/>
      <DownloadSection/>
      </>
    </ThemeProvider>
  );
}

export default App;
