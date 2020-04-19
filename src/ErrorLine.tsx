import React from "react";

interface Props {
  error: { id: string; message: string };
}

export default function ErrorLine(props: Props) {
  const {id, message} = props.error
  return (
    <li>
      <a href={`#${id}`}>{message}</a>
    </li>
  )
}