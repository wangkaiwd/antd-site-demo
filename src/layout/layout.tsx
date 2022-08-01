import { Button, Card, Layout, LayoutContent, LayoutHeader, PageHeader, Space } from 'ant-design-vue';
import './index.less';
import { RouterView } from 'vue-router';

export default {
  name: 'SiteLayout',
  setup () {
    const onOpenSandbox = () => {
      console.log('codesandbox');
    };
    const onSwitchLanguage = () => {
      console.log('language');
    };
    return () => (
      <Layout class="site-layout">
        <PageHeader
          title="Demo"
          sub-title="Try this"
        />
        <LayoutContent>
          <Card class="site-layout-content">
            <Space direction={'vertical'}>
              <Space>
                <Button type={'primary'} onClick={onOpenSandbox}>open in codesandbox</Button>
                <Button type={'primary'} onClick={onSwitchLanguage}>TS(click to js)</Button>
              </Space>
              <RouterView></RouterView>
            </Space>
          </Card>
        </LayoutContent>
      </Layout>
    );
  }
};
