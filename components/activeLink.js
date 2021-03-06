import { useRouter } from "next/router";

import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const className =
    pathname === props.href || (pathname.includes(props.href) && !props.exact)
      ? `${child.props.className} ${activeClassName}`
      : child.props.className;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
