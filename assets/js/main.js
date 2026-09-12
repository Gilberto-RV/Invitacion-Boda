import App from '../../core/App.js?v=20260827_03';
import Hero from '../../components/Hero/index.js?v=20260827_03';
import Intro from '../../components/Intro/index.js?v=20260827_03';
import Countdown from '../../components/Countdown/index.js?v=20260827_03';
import Parents from '../../components/Parents/index.js?v=20260827_03';
import Sponsors from '../../components/Sponsors/index.js?v=20260827_03';
import Entertainment from '../../components/Entertainment/index.js?v=20260827_03';
import Gallery from '../../components/Gallery/index.js?v=20260827_03';
import Video from '../../components/Video/index.js?v=20260827_03';
import Event from '../../components/Event/index.js?v=20260827_03';
import RSVP from '../../components/RSVP/index.js?v=20260912_02';
import Footer from '../../components/Footer/index.js?v=20260827_03';

// Instanciar la aplicación
const app = new App();

// Registrar componentes en orden secuencial
app.registerComponent('Hero', Hero);
app.registerComponent('Intro', Intro);
app.registerComponent('Countdown', Countdown);
app.registerComponent('Parents', Parents);
app.registerComponent('Sponsors', Sponsors);
app.registerComponent('Entertainment', Entertainment);
app.registerComponent('Gallery', Gallery);
app.registerComponent('Video', Video);
app.registerComponent('Event', Event);
app.registerComponent('RSVP', RSVP);
app.registerComponent('Footer', Footer);

// Iniciar aplicación al estar listo el DOM
document.addEventListener('DOMContentLoaded', () => {
  app.start('#app');
});
