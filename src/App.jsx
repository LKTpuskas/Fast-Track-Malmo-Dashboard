import React   from 'react';
import Mozaik  from 'mozaik/browser';
import github  from 'mozaik-ext-github';
import travis  from 'mozaik-ext-travis';
import time    from 'mozaik-ext-time';
import weather from 'mozaik-ext-weather';
import analytics from 'mozaik-ext-analytics';
import value    from 'mozaik-ext-value';
import calendar from 'mozaik-ext-calendar';
import sheets from 'mozaik-ext-sheets';
const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;



Mozaik.Registry.addExtensions({
    github,
    travis,
    time,
    weather,
    calendar,
    sheets,
    analytics,
    value
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
