import { Button } from 'ant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonDemo',
  setup () {
    return () => <Button>button</Button>;
  }
});
