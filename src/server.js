import Mozaik  from 'mozaik';
import config  from '../config';
import github  from 'mozaik-ext-github/client';
import travis  from 'mozaik-ext-travis/client';
import weather from 'mozaik-ext-weather/client';
import calendar from 'mozaik-ext-calendar/client';
import sheets from 'mozaik-ext-sheets/client';
import analytics from 'mozaik-ext-analytics/client';
import value   from 'mozaik-ext-value/client';


const mozaik = new Mozaik(config);

mozaik.bus.registerApi('github',  github);
mozaik.bus.registerApi('travis',  travis);
mozaik.bus.registerApi('weather', weather);
mozaik.bus.registerApi('calendar', calendar);
mozaik.bus.registerApi('sheets', sheets);
mozaik.bus.registerApi('analytics', analytics);
mozaik.bus.registerApi('value', value);


mozaik.startServer();
