import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'dist/index.js',
  output:{
    file:'dist/bundles/inputautosize.umd.js',
    format: 'umd'
  },
  sourceMap: false,
  name: 'ng.inputautosize',
  external: [ '@angular/core', '@angular/forms', '@angular/common' ],
  onwarn: ( warning ) => {
      const skip_codes = [
          'THIS_IS_UNDEFINED',
          'MISSING_GLOBAL_NAME'
      ];
      if ( skip_codes.indexOf(warning.code) != -1 ) return;
      console.error(warning);
  }
}