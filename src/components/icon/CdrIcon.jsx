import clsx from 'clsx';
import size from '../../mixins/size';
import style from './styles/CdrIcon.scss';

export default {
  name: 'CdrIcon',
  mixins: [size],
  props: {
    /**
    * The href attribute passed to the use element. Will be prefixed with # automatically
    */
    use: String,
    /**
    * Sets icon fill to "inherit" so as to use parent/ancestor fill color.
    */
    inheritColor: Boolean,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-icon';
    },
    inheritColorClass() {
      return this.inheritColor ? this.style['cdr-icon--inherit-color'] : '';
    },
  },
  render() {
    const defaultDataObj = {
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
      },
    };

    if (!this.$attrs['aria-label'] && !this.$attrs['aria-labelledby']) {
      defaultDataObj.attrs['aria-hidden'] = true;
    }

    let slotDataObj = {};

    if (this.$slots.default) {
      const vNode = this.$slots.default[0];
      if (vNode.tag === 'svg') {
        // keep svg attrs/classes/on/etc to bind to our svg
        slotDataObj = vNode.data;
        // remove wrapping svg from slot but keep its contents
        this.$slots.default = vNode.children;
      }
    }

    return (<svg
      {...slotDataObj}
      {...defaultDataObj}
      class={clsx(
        this.style[this.baseClass],
        this.sizeClass,
        this.inheritColorClass,
      )}
    >
      {this.$slots.default}
      {this.use ? <use
        href={this.use}
        xlinkHref={this.use}
      /> : ''}
    </svg>);
  },
};
