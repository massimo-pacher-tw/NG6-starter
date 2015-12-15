import template from './navbar.tpl.html';
import controller from './navbar.controller';
import './navbar.scss';

let navbarComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default navbarComponent;
