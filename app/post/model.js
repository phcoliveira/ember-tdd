import DS from 'ember-data';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

const { Model, attr } = DS;

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  viewsCount: attr('number'),

  firstLine: computed('body', function() {
    const body = this.get('body');

    if (isPresent(body)) {
      return body.match(/^(.+)$/m)[0];
    } else {
      return '';
    }
  }),
});
