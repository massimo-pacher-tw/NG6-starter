import "bootstrap/dist/css/bootstrap.css";


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component.js';


angular.module('transferwise.invite', [
  uiRouter,
  Common.name,
  Components.name
])

.component('twInviteApp', AppComponent);
