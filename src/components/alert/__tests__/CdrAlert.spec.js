import { mount } from '../../../../test/vue-jest-style-workaround.js';
import { h } from 'vue';
import CdrAlert from 'componentdir/alert/CdrAlert';
// import IconCheckFill from 'componentdir/icon/comps/check-fill';
describe('CdrAlert', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrAlert, {
      propsData: {
        type: 'info',
      },
      slots: {
       default: "🤪 hey im an alert",
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
