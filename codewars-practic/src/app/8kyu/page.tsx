import { Flex } from "@radix-ui/themes"
import { Test } from "./(katas)/test"

type Props = {  }
export default function Page(props: Props) {

return (
    <Flex align={"center"} justify={"center"} p={'5'}>
        <Test/>
  </Flex>
)}
