import App from '../../core/App.js';
import Hero from '../../components/Hero/index.js';
import Intro from '../../components/Intro/index.js';
import Countdown from '../../components/Countdown/index.js';
import Parents from '../../components/Parents/index.js';
import Sponsors from '../../components/Sponsors/index.js';
import Gallery from '../../components/Gallery/index.js';
import Event from '../../components/Event/index.js';
import RSVP from '../../components/RSVP/index.js';
import Footer from '../../components/Footer/index.js';

// Instanciar la aplicación
const app = new App();

// Registrar componentes en orden secuencial
app.registerComponent('Hero', Hero);
app.registerComponent('Intro', Intro);
app.registerComponent('Countdown', Countdown);
app.registerComponent('Parents', Parents);
app.registerComponent('Sponsors', Sponsors);
app.registerComponent('Gallery', Gallery);
app.registerComponent('Event', Event);
app.registerComponent('RSVP', RSVP);
app.registerComponent('Footer', Footer);

// Iniciar aplicación al estar listo el DOM
document.addEventListener('DOMContentLoaded', () => {
  app.start('#app');
});
