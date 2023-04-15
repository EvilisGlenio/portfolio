import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function ButtonHeader(props) {

  return (
    <Link href={props.href}>
      <Button margin="0.5" size="md" variant="ghost" color="current" w={{base:"100%"}}>
        {props.content}
      </Button>
    </Link>
  );
}
