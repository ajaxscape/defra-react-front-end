import {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface Props {
  id: string;
  name: string;
  hint: string | null;
  error: string | null;
}

export default function ariaDescribedBy({id, name, hint, error}: Props): string | undefined {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${name || id}-error` : undefined

  if (errorId) {
    if (hintId) {
      return `${hintId} ${errorId}`
    } else {
      return errorId
    }
  }
  return hintId
}