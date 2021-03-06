import template from './about.html';
import controller from './about.controller';
import './about.scss';

let aboutComponent = {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
};

export default aboutComponent;
