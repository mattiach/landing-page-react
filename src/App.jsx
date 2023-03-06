import { Fragment, useEffect, useState, useContext } from 'react';
import './styles/App.css';
import { ThemeContext } from './theme/Theme';

// translations
import languages from './languages/languages.json';

// animations
import FadeEffect from './animations/FadeEffect';

// components
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Title from './components/Title/Title';
import Subtitle from './components/Subtitle/Subtitle';
import Paragraph from './components/Paragraph/Paragraph';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Map from './components/Map/Map';
import Gallery from './components/Gallery/Gallery';
import HorizontalRule from './components/horizontalRule/HorizontalRule';

function App() {
  const { isDark } = useContext(ThemeContext);

  // translations
  const [language, setLanguage] = useState('it');
  const [selectedValue, setSelectedValue] = useState('it');
  const [translation, setTraslation] = useState(languages);
  const [mobileView, setMobileView] = useState(true);

  const changeLanguage = (langSelected) => {
    setLanguage(langSelected);
  }

  useEffect(() => {
    // Browser language settings
    const userBrowserLanguage = navigator.language || navigator.userLanguage;

    // settings language
    let language = 'it';
    let selectedValue = 'it';

    if (userBrowserLanguage === 'en-EN') {
      language = 'en';
      selectedValue = 'en'; F
    } else if (userBrowserLanguage === 'de-DE') {
      language = 'de';
      selectedValue = 'de';
    }

    setLanguage(language);
    setSelectedValue(selectedValue);

    // Gestione evento scorrimento passivo
    window.addEventListener('DOMContentLoaded', () => { }, { passive: true });
    window.addEventListener('touchstart', () => { }, { passive: true });
    window.addEventListener('scroll', () => { }, { passive: true });
  }, []);


  return (
    <>
      {/* Header */}
      <FadeEffect>
        <div className={`${isDark ? "dark-mode" : ''} pb-16`}>
          <Fragment>
            <Container>
              <Navbar
                changeLanguage={changeLanguage}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
            </Container>
            <Container margine={mobileView}>
              <header className='sm:mt-2 md:mt-3 lg:mt-4'>
                <Jumbotron imageUrl="images/sfondo.webp">
                  {/* <h1 className="text-6xl font-bold text-center text-blue-600">Welcome to my website</h1>
                <p className="text-3xl text-center text-blue-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Jumbotron>
              </header>
            </Container>
          </Fragment>

          {/* Main */}
          <Fragment>
            <div className="md:mt-10 mt-8">
              <Container>
                <div className="text-center">
                  <HorizontalRule />
                  <Title>{translation[0].title[language]}</Title>
                </div>
              </Container>
            </div>
            <main className='mt-2'>
              <Container>
                <div className='mt-8'>
                  <Subtitle>{translation[0].subtitle1[language]}</Subtitle>
                </div>
                <Paragraph>{translation[0].paragraph1[language]}</Paragraph>
                <Paragraph>{translation[0].paragraph2[language]}</Paragraph>
              </Container>
              <div className='mt-8'>
                <Container>
                  <Subtitle>{translation[0].subtitle2[language]}</Subtitle>
                  <Paragraph>{translation[0].paragraph3[language]}</Paragraph>
                </Container>
              </div>
            </main>
            <aside className='mt-10 md:mt-14 lg:mt-16'>
              <Container>
                <Gallery />
              </Container>
            </aside>
            <div className='mt-10 md:mt-14 lg:mt-16'>
              <Container>
                <HorizontalRule />
                <div className='text-center mb-10'>
                  <Title>{translation[0].title2[language]}</Title>
                </div>
              </Container>
            </div>
            <div className="mt-8 md:mt-12 lg:mt-14">
              <Container>
                <div>
                  <div className='flex justify-center flex-wrap max-w-max gap-10 mx-auto'>
                    <div className='mx-auto flex justify-center mb-8 md:mb-14 lg:mb-18 xl:order-2'>
                      <Form
                        button={translation[0].form.button[language]}
                        email={translation[0].form.email[language]}
                        terms={translation[0].form.terms[language]}
                        terms2={translation[0].form.terms2[language]}
                        textarea={translation[0].form.textarea[language]}
                        title={translation[0].form.title[language]}
                        name={translation[0].form.name[language]}
                        phone={translation[0].form.phone[language]}
                        confirm_message={translation[0].form.confirm_message[language]}
                        terms_and_conditions={translation[0].terms_and_conditions[language]}
                      />
                    </div>
                    <div className='mx-auto flex justify-center'>
                      <Map />
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Fragment>
        </div>
      </FadeEffect>
    </>
  )
}

export default App;