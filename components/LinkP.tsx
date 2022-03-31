import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkP = ({ href, children }:any) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} bg-gray-900 `
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default LinkP