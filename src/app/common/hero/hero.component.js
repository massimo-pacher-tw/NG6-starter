import template from './hero.tpl.html';
import controller from './hero.controller';
import './hero.scss';

let heroComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default heroComponent;
