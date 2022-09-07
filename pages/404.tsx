import Block from '../components/Block';
import Content from '../components/Content';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  return (
    <Content
      name="404 :("
      summary="This page does not exist!">
      <Block id="INFO">
        <p>
          You can head back <a href="/">home</a> or view the <a href="/faq">FAQ</a> to get in touch with Sam, since this is probably his fault.
        </p>
        <p>
          If you think this page should exist, send Sam a message with the following link: <code>https://samtaylorwedding.com{router.asPath}</code>
        </p>
      </Block>
    </Content>
  )
}