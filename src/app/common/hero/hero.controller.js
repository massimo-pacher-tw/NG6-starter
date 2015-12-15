class HeroController {
  /*@ngInject*/
  constructor($http) {
    this.name = 'hero';
    console.log($http);
  }
}

export default HeroController;
