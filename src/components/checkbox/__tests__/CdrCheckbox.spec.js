import { shallowMount, mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrCheckbox from 'componentdir/checkbox/CdrCheckbox';

describe('CdrCheckbox', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        labelClass: 'custom-label-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('is type checkbox', () => {
    const wrapper = shallowMount(CdrCheckbox);
    expect(wrapper.find('input').hasAttribute('type', 'checkbox')).toBe(true);
  });

  it('renders a label element', () => {
    const wrapper = mount(CdrCheckbox);
    expect(wrapper.find('label').exists()).toBe(true);
  });

  it('adds a custom label class correctly', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        labelClass: 'custom-label-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-label-class').exists()).toBe(true);
  });

  it('adds a custom input class correctly', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        inputClass: 'custom-input-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('input').classList.contains('custom-input-class')).toBe(true);
  });

  it('adds a custom content class correctly', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        contentClass: 'custom-content-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-content-class').exists()).toBe(true);
  });

  it('watches values correctly', async () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        value: false,
      },
    });
    wrapper.setProps({ value: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.value).toBe(true);
    expect(wrapper.vm.newValue).toBe(true);
  });

  it('emits change events with correct values for default checkbox', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        value: false,
      },
    });
    const cb = wrapper.findComponent({ ref: 'checkbox'});
    cb.trigger('click');
    expect(wrapper.emitted().change[0][0]).toBe(true);
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toBe(false);
  });

  it('emits change events with correct values for custom checkbox', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        trueValue: 'checked',
        falseValue: 'unchecked',
        value: '',
      },
    });
    const cb = wrapper.findComponent({ ref: 'checkbox'});
    cb.trigger('click');
    expect(wrapper.emitted().change[0][0]).toBe('checked');
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toBe('unchecked');
  });

  it('emits change events with correct values for group checkbox', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        customValue: 'b',
        value: ['a'],
      },
    });
    const cb = wrapper.findComponent({ ref: 'checkbox'});
    cb.trigger('click');
    expect(wrapper.emitted().change[0][0]).toEqual(['a', 'b']);
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toEqual(['a']);
  });
});
