export default {
  input: 'dist/index.js',
  output:{
    file:'dist/bundles/inputautosize.umd.js',
    format: 'umd'
  },
  sourceMap: false,
  name: 'ng.inputautosize',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  },
  external: [ '@angular/core', '@angular/forms', '@angular/common' ]
}