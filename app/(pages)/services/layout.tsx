import React, { PropsWithChildren } from 'react'

type Props = {}

const layout = (props: PropsWithChildren) => {
  return (
    <main>{props.children}</main>
  )
}

export default layout
