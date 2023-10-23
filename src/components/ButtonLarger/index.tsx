import React from "react";
import * as C from './styles'

type title = {
  name: string;
 
}

export function ButtonLarger ({name}:title){
  return (
    <C.Button>
        <C.Title>
        {name}
        </C.Title>
    </C.Button>
  )
}