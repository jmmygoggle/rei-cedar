import CdrIcon from '../CdrIcon';
export default {
  name: 'IconExperiencesPaddling',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M4.875 9C5.497 9 6 9.502 6 10.125c0 .48-.57 1.357-.817 1.71a.368.368 0 01-.615 0c-.248-.353-.818-1.23-.818-1.71C3.75 9.502 4.253 9 4.875 9zm0 1.928c.218-.36.375-.69.375-.803a.376.376 0 00-.375-.375.371.371 0 00-.375.375c0 .113.157.443.375.803zm13.808 1.237c.247.353.817 1.23.817 1.71 0 .623-.503 1.125-1.125 1.125a1.123 1.123 0 01-1.125-1.125c0-.48.57-1.357.817-1.71.136-.202.473-.202.616 0zm-.308 2.085c.21 0 .375-.165.375-.375 0-.113-.157-.435-.375-.803-.218.36-.375.69-.375.803 0 .21.165.375.375.375zm-3.75-8.265c.21 0 .375.172.375.375v3c0 .21-.165.375-.375.375a.371.371 0 01-.375-.375v-3c0-.21.165-.375.375-.375zM15.75 4.5c.622 0 1.125.503 1.125 1.125V9.84c0 .262-.09.518-.247.72l-1.126 1.357a1.17 1.17 0 01-.495.338v7.237c.21 0 .376.165.376.375s-.165.375-.375.375h-.75a.371.371 0 01-.375-.375c0-.21.165-.375.375-.375v-7.237a1.126 1.126 0 01-.495-.338l-1.126-1.357a1.106 1.106 0 01-.262-.72V5.625c0-.622.502-1.125 1.125-1.125h2.25zm.375 5.34V5.625a.376.376 0 00-.375-.375H13.5a.371.371 0 00-.375.375V9.84c0 .09.03.172.098.24l1.124 1.357a.367.367 0 00.571 0l1.125-1.357a.388.388 0 00.082-.24zM8.625 15c.21 0 .375.165.375.375v3c0 .21-.165.375-.375.375a.371.371 0 01-.375-.375v-3c0-.21.165-.375.375-.375zm.863-2.182l1.132 1.357c.165.202.255.457.255.72v4.215c0 .623-.502 1.125-1.125 1.125H7.5a1.123 1.123 0 01-1.125-1.125v-4.215c0-.262.09-.518.263-.72l1.125-1.357c.127-.158.3-.263.487-.323V5.25a.371.371 0 01-.375-.375c0-.21.165-.375.375-.375H9c.21 0 .375.165.375.375S9.21 5.25 9 5.25v7.245c.188.06.36.165.488.323zm.637 6.292v-4.215c0-.09-.03-.172-.082-.24l-1.125-1.357a.376.376 0 00-.578 0l-1.125 1.357a.354.354 0 00-.09.24v4.215c0 .21.165.375.375.375h2.25c.21 0 .375-.165.375-.375z"></path>
    </cdr-icon>)
  },
};
