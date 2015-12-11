import HeroModule from './hero'
import HeroController from './hero.controller';
import HeroComponent from './hero.component';

describe('Hero', () => {
  let $rootScope;

    describe('HeroController:', () => {
    // controller specs
        it('should set the name property when invoking the constructor', () => { // erase if removing this.name from the controller
          let controller = new HeroController();
          expect(controller).to.have.property('name');
        });
    });

      describe('Component', () => {
          // component/directive specs
          let component = HeroComponent();

          it('uses `controllerAs` syntax', () => {
            expect(component).to.have.property('controllerAs');
          });

          it('invokes the right controller', () => {
            expect(component.controller).to.equal(HeroController);
          });
      });
});
