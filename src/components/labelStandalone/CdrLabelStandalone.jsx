import style from './styles/CdrLabelStandalone.scss';

export default {
  name: 'CdrLabelStandalone',
  props: {
    forId: {
      type: String,
      required: true,
    },
    label: String,
    disabled: Boolean,
    required: Boolean,
    optional: Boolean,
    hideLabel: Boolean,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    labelClass() {
      return {
        [this.style['cdr-label-standalone__label']]: true,
        [this.style['cdr-label-standalone__label--disabled']]: this.disabled,
      };
    },
    wrapperClass() {
      const hasContent = !this.hideLabel || this.$slots.helper || this.$slots.info;
      return {
        [this.style['cdr-label-standalone']]: true,
        [this.style['cdr-label-standalone--spacing']]: hasContent,
      };
    },
    labelEl() {
      const requiredEl = this.required ? (
        <span aria-label="required">
          *
        </span>
      ) : '';

      const optionalEl = this.optional ? (
        <span
          class={this.style['cdr-label-standalone__optional']}
        >
          (optional)
        </span>
      ) : '';

      return !this.hideLabel ? (
        <label
          class={this.labelClass}
          for={this.forId}
          ref="label"
        >
          { this.label }{ requiredEl || optionalEl ? ' ' : ''}{ requiredEl || optionalEl }
        </label>
      ) : '';
    },
  },
  render() {
    return (
      <div>
        <div class={this.wrapperClass}>
          { this.labelEl }
          { this.labelEl && this.$slots.helper && (<br/>) }
          { this.$slots.helper && (
            <span
              class={this.style['cdr-label-standalone__helper']}
            >
              { this.$slots.helper }
            </span>
          )}
          {this.$slots.info && (
            <span
              class={this.style['cdr-label-standalone__info']}
            >
              { this.$slots.info }
            </span>
          )}
        </div>

        <div class={this.style['cdr-label-standalone__input-wrap']}>
          {this.$slots.default}
          {this.$slots['info-action'] && (
            <div
              class={this.style['cdr-label-standalone__info-action']}
            >
              {this.$slots['info-action']}
            </div>
          )}
        </div>
        {this.$slots['helper-text-bottom']}
        {this.$slots.error}
      </div>
    );
  },
};
