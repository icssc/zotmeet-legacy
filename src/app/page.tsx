import Button from "../components/button";
import {
  Root,
  Trigger,
  Portal,
  Content,
  ScrollUpButton,
  Viewport,
  SelectItem,
  ScrollDownButton,
} from "../components/select";

export default function Home() {
  return (
    <main>
      <Button color="yellow" size="large" label="test" />

      <Root>
        <Trigger color="blue" />
        <Portal>
          <Content position="popper" align="end">
            <ScrollUpButton />
            <Viewport>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
              <SelectItem value="a">This is a very long select value item name</SelectItem>
              <SelectItem value="b">Hi</SelectItem>
            </Viewport>
            <ScrollDownButton />
          </Content>
        </Portal>
      </Root>
    </main>
  );
}
