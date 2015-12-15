import template from './home.tpl.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true
};

export default homeComponent;
