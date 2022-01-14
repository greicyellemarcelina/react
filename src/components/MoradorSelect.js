import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function MoradorSelect({items}) {
    const [selected, setSelected] = useState()
    return(
        <Stack>
            {items?.map(item=>(
                <Button onClick={()=>setSelected(item.id)} variant={item.id === selected ? "solid" : "outline"}>
                    {item.name}
                </Button>
            ))}
        </Stack>
    )
}